<style lang="scss">
  @import "../../../style/main.scss";
</style>

<script>
    import GoBackButton from "$lib/components/GoBackButton.svelte";
    import { api_url } from "$lib/publicConsts.ts";
    export let data
    console.log(data)
</script>

<main class="single-project">
    <GoBackButton />
    <article itemscope itemtype="https://schema.org/Article">
        <section class="project-header">
            <p class="p-s grey-50" itemprop="headline">{data.Subtitle}</p>
            <h2 class="h1 grey-50" itemprop="title">{data.Titre}</h2>
        </section>
        <section class="details">
            <aside>
                {#each data.Images.data as image}
                    <div class="has-link-arrow main-radius overflow-hidden relative zoom-img-bg">
                        <svg class="link-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 16.5L18 7.5C18 6.67157 17.3284 6 16.5 6L7.49997 6" stroke="#D1D1D1" stroke-width="2" stroke-linecap="round"/>
                            <path d="M17.5 6.5L6 18" stroke="#D1D1D1" stroke-width="2" stroke-linecap="round" stroke-linejoin="bevel"/>
                        </svg>
                        <img id="img-bg" itemprop="thumbnailUrl" src={api_url+image.attributes.url} alt={data.Titre} />
                    </div>
                {/each}
            </aside>
            <section class="content">
                <div class="article-infos">
                    <h1 class="h1-l grey-50" itemprop="title">{data.Titre_projet}</h1>
                    <p class="h3 grey-800">{data.Sous_titre_projet}</p>
                    <p itemprop="dateCreated" class="p-s" style="color: #1ABCFE">{data.Date}</p>
                </div>
                <div itemprop="articleBody" class="article-body">
                    {#each data.Block as block}
                        {#if block.Sous_titre}
                            <h4 class="h4 grey-100">{block.Sous_titre}</h4>
                        {/if}
                        <p class="p-l grey-100">{block.Description}</p>
                    {/each}
                </div>
            </section>
        </section>
    </article>
</main>