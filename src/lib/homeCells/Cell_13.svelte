<script lang="ts">
    import {type HomeDataType} from '$lib/types/homeData.type.ts'
    export let data: HomeDataType
    let isMailSent = false
    
    const onSubmit = async (e: SubmitEvent) => {
        e.preventDefault()
        if (e) {
            isMailSent = true
            const target = {
                Prénom: e.target.prenom.value,
                Nom: e.target.nom.value,
                Email: e.target.email.value,
                Message: e.target.message.value,
            }
            const res = await fetch("/api/sendmail/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }, body: JSON.stringify(target)
            })
            const data = await res.json()
            if (data.success === "success") {
                let isMailSent = true
            }
        }
    }
</script>

<div class="cell-13 main-radius main-bg-gradiant txt-section-padding">
    <div class="txt-c">
        <p class="p-s grey-200">tedui.design@gmail.com</p>
        <h2 class="h2 grey-50">Bonjour 👋,</h2>
    </div>
    {#if !isMailSent}
    <form on:submit={(e) => onSubmit(e)} action="submit relative">
        <div class="flex">
            <input class="p-s grey-100" id="prenom" name="prenom" type="text" placeholder="Prénom" autocomplete="given-name" required>
            <input class="p-s grey-100" id="nom" name="nom" type="text" placeholder="Nom" autocomplete="family-name" required>
        </div>
        <label for="email"></label>
        <input class="p-s grey-100" id="email" name="email" type="email" placeholder="Adresse mail" autocomplete="on" required>
        <label for="message"></label>
        <textarea class="p-s grey-100" id="message" name="message" placeholder="Expliquez-moi votre projet..." required></textarea>
        <button class="send-btn" type="submit">
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.77867 10.8741L2.08176 10.2207C1.31484 10.1459 1.14583 9.10185 1.84998 8.7889L18.1241 1.55596C18.9609 1.18404 19.816 2.0391 19.444 2.87591L12.2111 19.15C11.8981 19.8542 10.8541 19.6852 10.7793 18.9182L10.1259 12.2213C10.0563 11.5081 9.49193 10.9437 8.77867 10.8741Z" stroke="#F6F6F6" stroke-width="2" stroke-linejoin="round"/>
            </svg>
        </button>
    </form>
    {/if}
    {#if isMailSent}
        <p class="p-l success-msg grey-100">Votre message a été envoyé avec succès !</p>
    {/if}
</div>