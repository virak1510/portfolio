/** @type {import('./$types').PageServerLoad} */
export async function load({locals}) {
    const userWithRole = await locals.pb.collection('users').getFirstListItem(`id= "${locals.user.id}"`, {
        expand: 'role',
    });
    locals.user = structuredClone(userWithRole)
    let user = locals.user 

    return {user};
}; 