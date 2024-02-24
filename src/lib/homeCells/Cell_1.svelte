<script lang="ts">
    import {type HomeDataType} from '$lib/types/homeData.type.ts'
    import {api_url} from "$lib/publicConsts.ts";

    export let data: HomeDataType
    const label = data.a_propos.Label
    const titre = data.a_propos.Titre
    const img = api_url+data.a_propos.Image.data.attributes.url
</script>

<div class="cell-1">
    <p class="p-m grey-200">{label}</p>
    <h2 class="h2 grey-50">{titre}</h2>
    <img src={img} alt="image à propos">
</div>