<script lang="ts">
    import {type HomeDataType} from '$lib/types/homeData.type.ts'
    import {slugify} from '$lib/utils.ts'
    import bg from '../../../static/Bg.jpg'
    import {api_url} from "$lib/publicConsts.js";
    export let data: HomeDataType
    const projet = data.projet[0]
    const projectSlug = slugify(projet.Titre)
</script>

<div class="cell-11 main-radius relative">
    <img class="main-radius w-full h-full absolute behind" src="Bg.jpg" alt="">
    <div class="txt-section-padding">
        <a href="/projets/{projectSlug}" class="txt-c">
            <p class="p-s grey-200">{projet.Label}</p>
            <h2 class="h2-grey-50">{projet.Titre}</h2>
        </a>
    </div>
    <img class="absolute mockup" src="{api_url + projet.Mockup.data.attributes.url}" alt="">
</div>