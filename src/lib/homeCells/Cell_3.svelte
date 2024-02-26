<script lang="ts">
    import {type HomeDataType} from '$lib/types/homeData.type.ts'
    import {api_url} from "$lib/publicConsts.ts";

    export let data: HomeDataType
    const reseaux_sociaux = data.Reseau_sociaux
</script>

<div class="cell-3 main-radius">
    <li class="relative main-radius">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <img src="/Noise%20effect.png" class="noise abs-center w-full" alt="">
        <a class="abs-center" href={reseaux_sociaux[0].Lien} target="_blank"><img src={api_url+reseaux_sociaux[0].Image.data.attributes.url} alt=""></a>
    </li>
    <li class="relativen main-radius">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <a class="abs-center" href={reseaux_sociaux[1].Lien} target="_blank"><img src={api_url+reseaux_sociaux[1].Image.data.attributes.url} alt=""></a>
    </li>
    <li class="relative main-radius">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <a class="abs-center" href={reseaux_sociaux[2].Lien} target="_blank"><img src={api_url+reseaux_sociaux[2].Image.data.attributes.url} alt=""></a>
    </li>
    <li class="relative main-radius">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <a class="abs-center" href={reseaux_sociaux[3].Lien} target="_blank"><img src={api_url+reseaux_sociaux[3].Image.data.attributes.url} alt=""></a>
    </li>
</div>