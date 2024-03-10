import {env} from "$env/dynamic/private";

export async function load() {
    const res = await fetch(`https://ted-pf-back.onrender.com/api/home?populate=deep`)
    const homeData = await res.json()
    return homeData.data.attributes
}