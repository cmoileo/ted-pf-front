<script lang="ts">
    import {type HomeDataType} from '$lib/types/homeData.type.ts'
    import {slugify} from '$lib/utils.ts'
    import {api_url} from "$lib/publicConsts.ts";
    export let data: HomeDataType
    const projet = data.projet[1]
    const projectSlug = slugify(projet.Titre)
</script>

<div class="cell-12 main-radius relative has-link-arrow">
    <svg class="link-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 16.5L18 7.5C18 6.67157 17.3284 6 16.5 6L7.49997 6" stroke="#D1D1D1" stroke-width="2" stroke-linecap="round"/>
        <path d="M17.5 6.5L6 18" stroke="#D1D1D1" stroke-width="2" stroke-linecap="round" stroke-linejoin="bevel"/>
    </svg>
    <img class="main-radius w-full h-full absolute behind" src="Bg.jpg" alt="">
    <div class="txt-section-padding">
        <a href="/projets/{projectSlug}" class="txt-c">
            <p class="p-s grey-200">{projet.Label}</p>
            <h2 class="h2-grey-50">{projet.Titre}</h2>
        </a>
    </div>
    <img class="absolute mockup" src="{api_url + projet.Mockup.data.attributes.url}" alt="">
</div>