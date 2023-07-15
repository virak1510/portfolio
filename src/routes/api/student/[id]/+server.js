/** @type {import('./$types').RequestHandler} */
import PocketBase from "pocketbase";
import { PUBLIC_POCKETBASE_URL } from "$env/static/public";
const pb = new PocketBase(PUBLIC_POCKETBASE_URL);
export async function GET({params}) {
    const record = await pb.collection('student').getOne(params.id, {
    });
    const data = JSON.stringify(structuredClone(record))
    return new Response(data);
};

export async function DELETE({params}) {
    await pb.collection('student').delete(params.id);
    return new Response(JSON.stringify({message: 'Deleted'}),{status: 200});
};

export async function PUT({params, request}) {
    const body = await request.json();
    await pb.collection('student').update(params.id, body);
    return new Response(JSON.stringify({message: 'updated'}),{status: 200});
};
