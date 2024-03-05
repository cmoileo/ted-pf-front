import {env} from "$env/dynamic/private";

export async function load() {
    const res = await fetch(`${env.API_URL}/api/projects/1?populate=deep`)
    const homeData = await res.json()
    return homeData.data.attributes
}