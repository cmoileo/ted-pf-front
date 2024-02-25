<script lang="ts">
    import {type HomeDataType} from '$lib/types/homeData.type.ts'
    import {slugify} from '$lib/utils.ts'
    import {api_url} from "$lib/publicConsts.ts";
    export let data: HomeDataType
    const projet = data.projet[1]
    const projectSlug = slugify(projet.Titre)
</script>

<div class="cell-12 main-radius relative">
    <img class="main-radius w-full h-full absolute behind" src="Bg.jpg" alt="">
    <div class="txt-section-padding">
        <a href="/projets/{projectSlug}" class="txt-c">
            <p class="p-s grey-200">{projet.Label}</p>
            <h2 class="h2-grey-50">{projet.Titre}</h2>
        </a>
    </div>
    <img class="absolute mockup" src="{api_url + projet.Mockup.data.attributes.url}" alt="">
</div>