/** @type {import('./$types').PageLoad} */
export const ssr = false;
// export async function load() {
//     return {};
// };
import { object } from 'zod';
export async function load({locals}) {
    let message = await locals.pb.collection('message').getFullList(200, {
        sort: 'created',
        expand:'user'
    });
    
    const messages = structuredClone(message)
    return {messages};
};

/** @type {import('./$types').Actions} */
export const actions = {
    create: async ({locals, request}) => {
        let data = Object.fromEntries(await request.formData())
        data.user = locals.user.id
        locals.pb.collection('message').create(data)
    }
};