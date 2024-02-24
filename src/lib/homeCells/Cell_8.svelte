<script lang="ts">
    import {type HomeDataType} from '$lib/types/homeData.type.ts'
    import {api_url} from "$lib/publicConsts.ts";

    export let data: HomeDataType
    const spotify = data.spotify
    const musiques = spotify.musiques
    const lien_playlist = spotify.lien_playlist
    console.log(data)
</script>

<div class="cell-8">
    <a target="_blank" href={lien_playlist} class="txt-c">
        <p class="p-s grey-200">Passion</p>
        <h2 class="h2 grey-50">Musique</h2>
    </a>
    {#each musiques as musique}
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/{musique.id_musique}?utm_source=generator" allowtransparency="true" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    {/each}
</div>