<script lang="ts">
    import {type HomeDataType} from '$lib/types/homeData.type.ts'
    import {api_url} from "$lib/publicConsts.ts";

    export let data: HomeDataType
    const reseaux_sociaux = data.Reseau_sociaux
</script>

<div class="cell-3">
    {#each reseaux_sociaux as reseau_social}
        <li>
            <a href={reseau_social.Lien} target="_blank"><img src={api_url+reseau_social.Image.data.attributes.url} alt=""></a>
        </li>
    {/each}
</div>