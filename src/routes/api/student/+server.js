/** @type {import('./$types').RequestHandler} */
import PocketBase from "pocketbase";
import { PUBLIC_POCKETBASE_URL } from "$env/static/public";
const pb = new PocketBase(PUBLIC_POCKETBASE_URL);
export async function GET() {
  const student = await pb
    .collection("student")
    .getFullList(200 /* batch size */, {
      sort: "-created",
    });
    console.log(student);

  let data = JSON.stringify(structuredClone(student));
  return new Response(data);
}

export async function POST({ request }) {
  const body = await request.json();
  const record = await pb.collection("student").create(body);
  return new Response(JSON.stringify({message:"success"}), {status: 201});
}

