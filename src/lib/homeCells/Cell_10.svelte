<script lang="ts">
    import {type HomeDataType} from '$lib/types/homeData.type.ts'
    import {api_url} from "$lib/publicConsts.ts";
    export let data: HomeDataType
    const img_url = api_url + data.Photo_bloc_4.data.attributes.url
</script>

<div class="cell-10 overflow-hidden zoom-img-bg main-radius linear-bg-cell relative has-link-arrow">
    <svg class="link-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 16.5L18 7.5C18 6.67157 17.3284 6 16.5 6L7.49997 6" stroke="#D1D1D1" stroke-width="2" stroke-linecap="round"/>
        <path d="M17.5 6.5L6 18" stroke="#D1D1D1" stroke-width="2" stroke-linecap="round" stroke-linejoin="bevel"/>
    </svg>
    <img id="img-bg" class="w-full cover main-radius" src={img_url} alt="">
</div>