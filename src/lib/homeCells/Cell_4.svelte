<script lang="ts">
    import {type HomeDataType} from '$lib/types/homeData.type.ts'
    import {api_url} from "$lib/publicConsts.ts";

    export let data: HomeDataType
    const label = data.Label_projets
    const titre = data.Titre_projets
</script>

<div class="cell-4">
    <p class="p-s grey-400">{label}</p>
    <h2 class="h2 grey-50">{titre}</h2>
    <a href="/projets" class="btn btn-primary">Voir mes projets</a>
</div>