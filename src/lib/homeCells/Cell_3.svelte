<script lang="ts">
    import {type HomeDataType} from '$lib/types/homeData.type.ts'
    import {api_url} from "$lib/publicConsts.ts";

    export let data: HomeDataType
    const reseaux_sociaux = data.Reseau_sociaux
</script>

<div class="cell-3 main-radius">
    {#each reseaux_sociaux as reseau_social}
        <li class="relative">
            <a class="abs-center" href={reseau_social.Lien} target="_blank"><img src={api_url+reseau_social.Image.data.attributes.url} alt=""></a>
        </li>
    {/each}
</div>