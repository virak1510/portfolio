import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET() {
    return new Response();
};
export async function POST({locals, request}) {
    try {
        locals.pb.authStore.clear();
    } catch (err) {
    }
    throw redirect(303,"/login")
    // return new Response();
};