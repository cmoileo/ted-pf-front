<script lang="ts">
    import {type HomeDataType} from '$lib/types/homeData.type.ts'
    import {slugify} from '$lib/utils.ts'
    import {deslugify} from "$lib/utils.ts";
    export let data: HomeDataType
    const projet = data.projet[1]
    const projectSlug = slugify(projet.Titre)
</script>

<div class="cell-11">
    <a href="/projets/{projectSlug}" class="txt-c">
        <p class="p-s grey-200">{projet.Label}</p>
        <h2 class="h2-grey-50">{projet.Titre}</h2>
    </a>
    <img src="{projet.Mockup.data.attributes.url}" alt="">
</div>