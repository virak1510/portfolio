import { redirect, fail, error } from '@sveltejs/kit';
import { validateData } from '$lib/utils';
import { loginSchema } from '$lib/schema';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    return {};
};

/** @type {import('./$types').Actions} */
export const actions = {
    login: async ({locals, request}) =>{
        const {formData, errors} = await validateData(await request.formData(), loginSchema)
        if (errors) {
            return fail(401,{
                data:formData,
                errors:errors.fieldErrors
            })
        }
        
        try {
            const auth = await  locals.pb.collection('users').authWithPassword(
                formData.username,
                formData.password,
                );
            // locals.user = auth;
        } catch (err) {
            throw error(500, "something error")
        }
        throw redirect(303,'/app')
    }
};