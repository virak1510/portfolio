/** @type {import('./$types').PageServerLoad} */
import PocketBase from "pocketbase";
import { PUBLIC_POCKETBASE_URL } from "$env/static/public";
import { error } from "@sveltejs/kit";
const pb = new PocketBase(PUBLIC_POCKETBASE_URL);
export async function load() {
    // try {
    //     const record = await pb.collection('theme').getFirstListItem('id="eygsnhbtpaybi3l"');
    //     let theme = record.theme;
    //     return {theme}
    // } catch (err) {
    //     throw error(500, err.message)
    // }
    // return {theme};
};