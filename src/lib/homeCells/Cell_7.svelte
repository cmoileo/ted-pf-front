<script lang="ts">
    import { onMount } from 'svelte';

    import { type HomeDataType } from '$lib/types/homeData.type.ts';
    import { api_url } from "$lib/publicConsts.ts";

    export let data: HomeDataType;
    let swiper;

    onMount(() => {
        const mySwiper = new Swiper('.swiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            animation: {
                duration: 1000,
                easing: 'ease-in-out',
                fillMode: 'forwards'
            },
        });
    });

    const images = data.Images_films.data;
</script>

<div class="cell-7 main-radius relative linear-bg-cell">
    <div class="images-c relative swiper">
        <div class="swiper-wrapper">
            {#each images as image}
                <img class="main-radius swiper-slide" src={api_url + image.attributes.url} alt=""/>
                <img class="main-radius swiper-slide" src={api_url + image.attributes.url} alt=""/>
            {/each}
        </div>
    </div>
    <div class="txt-c txt-section-bottom">
        <p class="p-s grey-200">Passion</p>
        <h2 class="h2 grey-50">Film</h2>
    </div>
</div>
