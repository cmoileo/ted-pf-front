<script lang="ts">
    import {type HomeDataType} from '$lib/types/homeData.type.ts'
    import {api_url} from "$lib/publicConsts.ts";
    export let data: HomeDataType
    const img_url = api_url + data.Photo_bloc_3.data[0].attributes.url
</script>

<div class="cell-9 main-radius">
    <img class="w-full cover main-radius" src={img_url} alt="">
</div>