/** @type {import('./$types').PageServerLoad} */
export async function load({request,params}) {
    const slug = params.slug
    return {slug};
};