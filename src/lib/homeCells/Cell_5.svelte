<script lang="ts">
    import {type HomeDataType} from '$lib/types/homeData.type.ts'
    import {api_url} from "$lib/publicConsts.ts";

    export let data: HomeDataType
    const img_url = api_url + data.Photo_bloc_1.data.attributes.url
</script>

<div class="cell-5">
    <img src={img_url} alt="">
</div>