import {env} from "$env/dynamic/private";

export async function load(Request) {
    const currentSlug = Request.url.pathname.split('/').pop();
    const res = await fetch(`${env.API_URL}/api/projects/${currentSlug}`)
    const homeData = await res.json()
    console.log(homeData.attributes)
    return homeData.data.attributes
}