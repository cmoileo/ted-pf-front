<script lang="ts">
    import {type HomeDataType} from '$lib/types/homeData.type.ts'
    import {api_url} from "$lib/publicConsts.ts";

    export let data: HomeDataType
    const label = data.Outils.Label
    const titre = data.Outils.Titre
    const images = data.Outils.Image.data
</script>

<div class="cell-2 main-bg-gradiant main-radius">
    <div class="txt-section-padding">
        <p class="p-s grey-200">{label}</p>
        <h2 class="h2 grey-50">{titre}</h2>
    </div>
    <div class="images-c">
        {#each images as image}
            <div class="img-c">
                <div class="secondary-radius">
                    <img src="Noise%20effect.png" alt="" class="abs-center noise">
                    <img src={api_url + image.attributes.url} alt="" class="blured"/>
                    <img src={api_url + image.attributes.url} alt="" class="img-s abs-center"/>
                </div>
            </div>
        {/each}
    </div>
</div>