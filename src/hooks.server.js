/** @type {import('@sveltejs/kit').Handle} */
import PocketBase from "pocketbase";
import { PUBLIC_POCKETBASE_URL } from "$env/static/public";
import { redirect } from "@sveltejs/kit";
export async function handle({ event, resolve }) {
  event.locals.pb = new PocketBase(PUBLIC_POCKETBASE_URL);
  event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '')
  try{
    if (event.locals.pb.authStore.isValid) {
      await event.locals.pb.collection('users').authRefresh();
      event.locals.user = structuredClone(event.locals.pb.authStore.model)
      // const id = locals.user.id;
      const userRole = await event.locals.pb.collection('users').getFirstListItem(`id="${event.locals.user.id}"`, {
        expand: 'role',
      });
      event.role = userRole?.expand?.role?.role
    }
  }catch(err){
    console.log("🚀 - err", err);
    event.locals.pb.authStore.clear()
    event.locals.user = undefined
  }
  const response = await resolve(event);
  /// api
  
if (event.url.pathname.startsWith("/api")) {
        // Required for CORS to work
        const method = ["POST","GET","PUT","DELETE","PATCH", "OPTIONS"]
        if (method.includes(event.request.method)) {
            return new Response(null, {
                headers: {
                    "Access-Control-Allow-Methods":
                        "GET, POST, PUT, DELETE, PATCH, OPTIONS",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers": "*",
                },
            });
        }
        response.headers.append("Access-Control-Allow-Origin", `*`);
        response.headers.set("Content-Type", "application/json; charset=utf-8");
        return response;
    }


  // middleware for /app route
  if (event.url.pathname.startsWith('/app')) {
    if (!event.locals.pb.authStore.isValid) {
      throw redirect (303, '/login')
    }

    if (event.url.pathname.startsWith('/app/corn')) {
      if (event.role !== "legend") {
        throw redirect (303, '/app')
      }
    }
  }

  response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie({secure:false}))


  return response;
}
