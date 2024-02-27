<script lang="ts">
    import {type HomeDataType} from '$lib/types/homeData.type.ts'
    import {api_url} from "$lib/publicConsts.ts";

    export let data: HomeDataType
    const spotify = data.spotify
    const musiques = spotify.musiques
    const lien_playlist = spotify.lien_playlist
</script>

<div class="cell-8 main-radius main-bg-gradiant relative has-link-arrow">
    <svg class="link-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 16.5L18 7.5C18 6.67157 17.3284 6 16.5 6L7.49997 6" stroke="#D1D1D1" stroke-width="2" stroke-linecap="round"/>
        <path d="M17.5 6.5L6 18" stroke="#D1D1D1" stroke-width="2" stroke-linecap="round" stroke-linejoin="bevel"/>
    </svg>
    <span class="circle"></span>
    <span class="circle"></span>
    <span class="circle"></span>
    <span class="circle"></span>
    <div class="txt-section-padding">
        <a target="_blank" href={lien_playlist} class="txt-c">
            <p class="p-s grey-200">Passion</p>
            <h2 class="h2 grey-50">Musique</h2>
        </a>
    </div>
    <div class="musiques-c">
        {#each musiques as musique}
            <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/{musique.id_musique}?utm_source=generator" allowtransparency="true" width="100%" height="60" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        {/each}
    </div>
</div>