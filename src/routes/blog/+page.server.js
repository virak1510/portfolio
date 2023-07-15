/** @type {import('./$types').PageServerLoad} */
export async function load({request,params,url}) {
    const slug = params
    url
    return {slug};
};

/** @type {import('./$types').Actions} */
export const actions = {
    setTheme:async ({url, cookies})=>{
        const theme = url.searchParams.get("theme")
        if (theme) {
            cookies.set('colortheme',theme,{
                path:'/',
                maxAge: 60*60*24*365
            })
        }
    }
};