<style lang="scss">
  @import "../style/main.scss";
</style>

<script lang="ts">
    import Cell_1 from "$lib/homeCells/Cell_1.svelte";
    import { type HomeDataType } from "$lib/types/homeData.type.js";
    export let data: HomeDataType;
</script>

<div>
    <h1 class="grey-50 h1">Home</h1>
    <Cell_1 {data}/>
</div>