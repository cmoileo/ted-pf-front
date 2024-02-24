import {env} from "$env/dynamic/private";

export async function load() {
    const res = await fetch(`${env.API_URL}/api/home?populate=deep`)
    const homeData = await res.json()
    return homeData.data.attributes
}