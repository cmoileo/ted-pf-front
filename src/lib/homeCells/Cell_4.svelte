<script lang="ts">
    import {type HomeDataType} from '$lib/types/homeData.type.ts'
    import {api_url} from "$lib/publicConsts.ts";

    export let data: HomeDataType
    const label = data.Label_projets
    const titre = data.Titre_projets
</script>

<div class="cell-4 main-radius main-bg-gradiant">
    <div class="txt-section-padding">
        <p class="p-s grey-400">{label}</p>
        <h2 class="h2 grey-50">{titre}</h2>
    </div>
    <a href="/projets" class="btn p-s-extrabold grey-50 secondary-radius btn-primary">
        Voir mes projets
        <video autoplay muted loop class="abs-center cover behind secondary-radius">
            <source src="/Fond%20Espace%20Etoilé%201920x1080%20(1).mp4" />
        </video>
    </a>
</div>