/** @type {import('./$types').PageServerLoad} */
import { error, redirect } from '@sveltejs/kit';
export async function load() {
  return {};
}

/** @type {import('./$types').Actions} */
export const actions = {
  register: async ({locals, request}) => {
    const body = Object.fromEntries(await request.formData())
    try {
        const record = await locals.pb.collection('users').create(body);
    } catch (err) {
        throw error(500, err.message)
    };
    throw redirect(303, "/login")
  },
};
