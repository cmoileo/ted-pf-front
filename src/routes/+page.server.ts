import { env } from '$env/dynamic/private'
import type { Actions, PageServerLoad } from './$types'
import { fail, redirect } from '@sveltejs/kit'
export async function load({fetch}) {
    const res = await fetch(`${env.API_URL}/api/home?populate=*`);
    const data = await res.json();
    console.log(data)
    return {
        data: data
    }
}