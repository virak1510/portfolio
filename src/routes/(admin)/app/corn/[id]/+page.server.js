/** @type {import('./$types').PageServerLoad} */
export async function load({request, params,locals}) {
    let slug = params.id
    return {slug};
};