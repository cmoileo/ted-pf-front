<script>
    import GoBackButton from "$lib/components/GoBackButton.svelte";
    import {api_url} from "$lib/publicConsts.ts";

    export let data
</script>

<main class="single-project archive-projects">
    <GoBackButton />
    <article>
        <section class="project-header">
            <p class="p-s grey-50" itemprop="headline">Projets</p>
            <h2 class="h1 grey-50" itemprop="title">Mes aventures 😍</h2>
        </section>
    </article>
    <section class="cells-c grid-gap flex fd-column">
        <div class="container grid-gap flex">
            <div class="container flex">
                <article class="cell-1 has-link-arrow zoom-img-bg">
                    <svg class="link-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 16.5L18 7.5C18 6.67157 17.3284 6 16.5 6L7.49997 6" stroke="#D1D1D1" stroke-width="2" stroke-linecap="round"/>
                        <path d="M17.5 6.5L6 18" stroke="#D1D1D1" stroke-width="2" stroke-linecap="round" stroke-linejoin="bevel"/>
                    </svg>
                    <a href="/projets/{data.homeData.data[0].attributes.slug}">
                        <div class="txt-section-padding">
                            <p class="p-m grey-200">{data.homeData.data[0].attributes.Subtitle}</p>
                            <h2 class="h2 grey-50">{data.homeData.data[0].attributes.Titre}</h2>
                        </div>
                        <img id="img-bg" src="{api_url + data.homeData.data[0].attributes.Images.data[0].attributes.url}" alt="">
                    </a>
                </article>
            </div>
            <div class="container grid-gap-s flex fd-column">
                <article class="cell-2 has-link-arrow zoom-img-bg">
                    <svg class="link-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 16.5L18 7.5C18 6.67157 17.3284 6 16.5 6L7.49997 6" stroke="#D1D1D1" stroke-width="2" stroke-linecap="round"/>
                        <path d="M17.5 6.5L6 18" stroke="#D1D1D1" stroke-width="2" stroke-linecap="round" stroke-linejoin="bevel"/>
                    </svg>
                    <a href="/projets/{data.homeData.data[1].attributes.slug}">
                        <div class="txt-section-padding">
                            <p class="p-m grey-200">{data.homeData.data[1].attributes.Subtitle}</p>
                            <h2 class="h2 grey-50">{data.homeData.data[1].attributes.Titre}</h2>
                        </div>
                        <img id="img-bg" src="{api_url + data.homeData.data[1].attributes.Images.data[0].attributes.url}" alt="">
                    </a>
                </article>
                <article class="cell-3 has-link-arrow zoom-img-bg">
                    <svg class="link-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 16.5L18 7.5C18 6.67157 17.3284 6 16.5 6L7.49997 6" stroke="#D1D1D1" stroke-width="2" stroke-linecap="round"/>
                        <path d="M17.5 6.5L6 18" stroke="#D1D1D1" stroke-width="2" stroke-linecap="round" stroke-linejoin="bevel"/>
                    </svg>
                    <a href="/projets/{data.homeData.data[2].attributes.slug}">
                        <div class="txt-section-padding">
                            <p class="p-m grey-200">{data.homeData.data[2].attributes.Subtitle}</p>
                            <h2 class="h2 grey-50">{data.homeData.data[2].attributes.Titre}</h2>
                        </div>
                        <img id="img-bg" src="{api_url + data.homeData.data[2].attributes.Images.data[0].attributes.url}" alt="">
                    </a>
                </article>
                <article class="cell-4 has-link-arrow zoom-img-bg">
                    <svg class="link-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 16.5L18 7.5C18 6.67157 17.3284 6 16.5 6L7.49997 6" stroke="#D1D1D1" stroke-width="2" stroke-linecap="round"/>
                        <path d="M17.5 6.5L6 18" stroke="#D1D1D1" stroke-width="2" stroke-linecap="round" stroke-linejoin="bevel"/>
                    </svg>
                    <a href="/projets/{data.homeData.data[3].attributes.slug}">
                        <div class="txt-section-padding">
                            <p class="p-m grey-200">{data.homeData.data[3].attributes.Subtitle}</p>
                            <h2 class="h2 grey-50">{data.homeData.data[3].attributes.Titre}</h2>
                        </div>
                        <img id="img-bg" src="{api_url + data.homeData.data[3].attributes.Images.data[0].attributes.url}" alt="">
                    </a>
                </article>
            </div>
            <div class="container grid-gap-s flex fd-column">
                <article class="cell-5 has-link-arrow zoom-img-bg">
                    <svg class="link-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 16.5L18 7.5C18 6.67157 17.3284 6 16.5 6L7.49997 6" stroke="#D1D1D1" stroke-width="2" stroke-linecap="round"/>
                        <path d="M17.5 6.5L6 18" stroke="#D1D1D1" stroke-width="2" stroke-linecap="round" stroke-linejoin="bevel"/>
                    </svg>
                    <a href="/projets/{data.homeData.data[4].attributes.slug}">
                        <div class="txt-section-padding">
                            <p class="p-m grey-200">{data.homeData.data[4].attributes.Subtitle}</p>
                            <h2 class="h2 grey-50">{data.homeData.data[4].attributes.Titre}</h2>
                        </div>
                        <img id="img-bg" src="{api_url + data.homeData.data[4].attributes.Images.data[0].attributes.url}" alt="">
                    </a>
                </article>
                <article class="cell-6 has-link-arrow zoom-img-bg">
                    <svg class="link-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 16.5L18 7.5C18 6.67157 17.3284 6 16.5 6L7.49997 6" stroke="#D1D1D1" stroke-width="2" stroke-linecap="round"/>
                        <path d="M17.5 6.5L6 18" stroke="#D1D1D1" stroke-width="2" stroke-linecap="round" stroke-linejoin="bevel"/>
                    </svg>
                    <a href="/projets/{data.homeData.data[5].attributes.slug}">
                        <div class="txt-section-padding">
                            <p class="p-m grey-200">{data.homeData.data[5].attributes.Subtitle}</p>
                            <h2 class="h2 grey-50">{data.homeData.data[5].attributes.Titre}</h2>
                        </div>
                        <img id="img-bg" src="{api_url + data.homeData.data[5].attributes.Images.data[0].attributes.url}" alt="">
                    </a>
                </article>
            </div>
        </div>
        <div class="container grid-gap flex">
            <div class="container grid-gap flex fd-column">
                <article class="cell-7 zoom-img-bg has-link-arrow">
                    <svg class="link-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 16.5L18 7.5C18 6.67157 17.3284 6 16.5 6L7.49997 6" stroke="#D1D1D1" stroke-width="2" stroke-linecap="round"/>
                        <path d="M17.5 6.5L6 18" stroke="#D1D1D1" stroke-width="2" stroke-linecap="round" stroke-linejoin="bevel"/>
                    </svg>
                    <a href="/projets/{data.homeData.data[6].attributes.slug}">
                        <div class="txt-section-padding">
                            <p class="p-m grey-200">{data.homeData.data[6].attributes.Subtitle}</p>
                            <h2 class="h2 grey-50">{data.homeData.data[6].attributes.Titre}</h2>
                        </div>
                        <img id="img-bg" src="{api_url + data.homeData.data[6].attributes.Images.data[0].attributes.url}" alt="">
                    </a>
                </article>
                <article class="cell-8 zoom-img-bg has-link-arrow">
                    <svg class="link-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 16.5L18 7.5C18 6.67157 17.3284 6 16.5 6L7.49997 6" stroke="#D1D1D1" stroke-width="2" stroke-linecap="round"/>
                        <path d="M17.5 6.5L6 18" stroke="#D1D1D1" stroke-width="2" stroke-linecap="round" stroke-linejoin="bevel"/>
                    </svg>
                    <a href="/projets/{data.homeData.data[7].attributes.slug}">
                        <div class="txt-section-padding">
                            <p class="p-m grey-200">{data.homeData.data[7].attributes.Subtitle}</p>
                            <h2 class="h2 grey-50">{data.homeData.data[7].attributes.Titre}</h2>
                        </div>
                        <img id="img-bg" src="{api_url + data.homeData.data[7].attributes.Images.data[0].attributes.url}" alt="">
                    </a>
                </article>
                <article class="cell-9 zoom-img-bg has-link-arrow">
                    <svg class="link-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 16.5L18 7.5C18 6.67157 17.3284 6 16.5 6L7.49997 6" stroke="#D1D1D1" stroke-width="2" stroke-linecap="round"/>
                        <path d="M17.5 6.5L6 18" stroke="#D1D1D1" stroke-width="2" stroke-linecap="round" stroke-linejoin="bevel"/>
                    </svg>
                    <a href="/projets/{data.homeData.data[8].attributes.slug}">
                        <div class="txt-section-padding">
                            <p class="p-m grey-200">{data.homeData.data[8].attributes.Subtitle}</p>
                            <h2 class="h2 grey-50">{data.homeData.data[8].attributes.Titre}</h2>
                        </div>
                        <img id="img-bg" src="{api_url + data.homeData.data[8].attributes.Images.data[0].attributes.url}" alt="">
                    </a>
                </article>
            </div>
            <div class="container grid-gap flex fd-column">
                <article class="cell-10 zoom-img-bg has-link-arrow">
                    <svg class="link-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 16.5L18 7.5C18 6.67157 17.3284 6 16.5 6L7.49997 6" stroke="#D1D1D1" stroke-width="2" stroke-linecap="round"/>
                        <path d="M17.5 6.5L6 18" stroke="#D1D1D1" stroke-width="2" stroke-linecap="round" stroke-linejoin="bevel"/>
                    </svg>
                    <a href="/projets/{data.homeData.data[9].attributes.slug}">
                        <div class="txt-section-padding">
                            <p class="p-m grey-200">{data.homeData.data[9].attributes.Subtitle}</p>
                            <h2 class="h2 grey-50">{data.homeData.data[9].attributes.Titre}</h2>
                        </div>
                        <img id="img-bg" src="{api_url + data.homeData.data[9].attributes.Images.data[0].attributes.url}" alt="">
                    </a>
                </article>
                <article class="cell-11 zoom-img-bg has-link-arrow">
                    <svg class="link-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 16.5L18 7.5C18 6.67157 17.3284 6 16.5 6L7.49997 6" stroke="#D1D1D1" stroke-width="2" stroke-linecap="round"/>
                        <path d="M17.5 6.5L6 18" stroke="#D1D1D1" stroke-width="2" stroke-linecap="round" stroke-linejoin="bevel"/>
                    </svg>
                    <a href="/projets/{data.homeData.data[10].attributes.slug}">
                        <div class="txt-section-padding">
                            <p class="p-m grey-200">{data.homeData.data[10].attributes.Subtitle}</p>
                            <h2 class="h2 grey-50">{data.homeData.data[10].attributes.Titre}</h2>
                        </div>
                        <img id="img-bg" src="{api_url + data.homeData.data[10].attributes.Images.data[0].attributes.url}" alt="">
                    </a>
                </article>
            </div>
        </div>
    </section>
</main>