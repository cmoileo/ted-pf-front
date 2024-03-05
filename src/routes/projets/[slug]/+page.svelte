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
            <h2 class="h2 grey-50" itemprop="title">{data.Titre}</h2>
        </section>
        <section itemprop="" class="details">
            <aside>
                {#each data.Images.data as image}
                    <img itemprop="thumbnailUrl" src={api_url+image.attributes.url} alt={data.Titre} />
                {/each}
            </aside>
            <section class="content">
                <div class="article-infos">
                    <h1 class="h1 grey-50" itemprop="title">{data.Titre_projet}</h1>
                    <p class="h3 grey-800">{data.Sous_titre_projet}</p>
                    <p itemprop="dateCreated" class="p-s" style="color: #1ABCFE">{data.Date}</p>
                </div>
                <div itemprop="articleBody" class="article-body">
                    {#each data.Block as block}

                        <p class="p-l grey-100">{block.Description}</p>
                    {/each}
                </div>
            </section>
        </section>
    </article>
</main>