import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    return {};
};
/** @type {import('./$types').Actions} */
export const actions = {
    update: async function({request, locals}){
        // let bb = await request.formData();
        const body = Object.fromEntries(await request.formData())
        if(body.avatar.size === 0){
            delete body.avatar
        }
        if (!(body.password || body.passwordConfirm || body.oldPassword)) {
            delete body.password
            delete body.passwordConfirm
            delete body.oldPassword
        }
        try {
            const {username, avatar} = await locals.pb.collection('users').update(locals.user.id, body);
            locals.user.username = username;
            locals.user.avatar = avatar;
        } catch (err) {
            console.log(err);
            throw error(500)
        }
        
    }
};