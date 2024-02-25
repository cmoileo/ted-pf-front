<script lang="ts">
    import {type HomeDataType} from '$lib/types/homeData.type.ts'
    import {api_url} from "$lib/publicConsts.ts";

    export let data: HomeDataType
    const images = data.Images_films.data
</script>

<div class="cell-7 main-radius">
    <div class="images-c">
        {#each images as image}
            <img src={api_url + image.attributes.url} alt="" class="image"/>
        {/each}
    </div>
    <div class="txt-c">
        <p class="p-s grey-200">Passion</p>
        <h2 class="h2 grey-50">Film</h2>
    </div>
</div>