<script lang="ts">
    import {type HomeDataType} from '$lib/types/homeData.type.ts'
    import {api_url} from "$lib/publicConsts.ts";
    import { Swipe, SwipeItem } from "svelte-swipe";
    const swipeConfig = {
        autoplay: true,
        autoplayInterval: 5000,
        delay: 2000,
        showIndicators: false,
        transitionDuration: 500,
        defaultIndex: 0,
    };
    export let data: HomeDataType
    const images = data.Images_films.data
</script>

<div class="cell-7 main-radius relative">
    <div class="images-c relative swipe-holder">
        <Swipe {...swipeConfig}>
            {#each images as image}
                <SwipeItem>
                    <img class="main-radius" src={api_url + image.attributes.url} alt=""/>
                </SwipeItem>
            {/each}
        </Swipe>
    </div>
    <div class="txt-c txt-section-bottom">
        <p class="p-s grey-200">Passion</p>
        <h2 class="h2 grey-50">Film</h2>
    </div>
</div>