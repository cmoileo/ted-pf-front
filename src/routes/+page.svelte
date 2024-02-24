<style lang="scss">
  @import "../style/main.scss";
</style>

<script lang="ts">
    import Cell_1 from "$lib/homeCells/Cell_1.svelte";
    import Cell_2 from "$lib/homeCells/Cell_2.svelte";
    import Cell_3 from "$lib/homeCells/Cell_3.svelte";
    import Cell_4 from "$lib/homeCells/Cell_4.svelte";
    import Cell_5 from "$lib/homeCells/Cell_5.svelte";
    import Cell_6 from "$lib/homeCells/Cell_6.svelte";
    import Cell_7 from "$lib/homeCells/Cell_7.svelte";
    import Cell_8 from "$lib/homeCells/Cell_8.svelte";
    import { type HomeDataType } from "$lib/types/homeData.type.js";
    export let data: HomeDataType;
</script>

<div>
    <p class="p-s grey-50">Bienvenue sur le portfolio de</p>
    <h1 class="grey-50 h1">Théo Houyoux</h1>
    <div class="home-grid-c">
        <Cell_1 {data}/>
        <Cell_2 {data}/>
        <Cell_3 {data}/>
        <Cell_4 {data}/>
        <Cell_5 {data}/>
        <Cell_6 {data}/>
        <Cell_7 {data}/>
        <Cell_8 {data}/>
    </div>
</div>