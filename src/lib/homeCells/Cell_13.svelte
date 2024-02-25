<script lang="ts">
    import {type HomeDataType} from '$lib/types/homeData.type.ts'
    export let data: HomeDataType
</script>

<div class="cell-13 main-radius main-bg-gradiant txt-section-padding">
    <p class="p-s-grey-200">tedui.design@gmail.com</p>
    <h2 class="h2 grey-50">Bonjour 👋,</h2>
    <form action="submit">
        <label for="prenom"></label>
        <input id="prenom" name="prenom" type="text" placeholder="Prénom" autocomplete="given-name" required>
        <label for="nom"></label>
        <input id="nom" name="nom" type="text" placeholder="Nom" autocomplete="family-name" required>
        <label for="email"></label>
        <input id="email" name="email" type="email" placeholder="Adresse mail" autocomplete="email" required>
        <label for="message"></label>
        <textarea id="message" name="message" placeholder="Expliquez-moi votre projet..." required></textarea>
        <button type="submit">
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.77867 10.8741L2.08176 10.2207C1.31484 10.1459 1.14583 9.10185 1.84998 8.7889L18.1241 1.55596C18.9609 1.18404 19.816 2.0391 19.444 2.87591L12.2111 19.15C11.8981 19.8542 10.8541 19.6852 10.7793 18.9182L10.1259 12.2213C10.0563 11.5081 9.49193 10.9437 8.77867 10.8741Z" stroke="#F6F6F6" stroke-width="2" stroke-linejoin="round"/>
            </svg>
        </button>
    </form>
</div>