<script>
    const handleClick = () => {
        window.history.back()
    }
</script>

<button on:click={handleClick} class="go-back">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 4.5L4.56066 10.9393C3.97487 11.5251 3.97487 12.4749 4.56066 13.0607L11 19.5" stroke="#D1D1D1" stroke-linecap="round"/>
        <path d="M4.5 12L20.5 12" stroke="#D1D1D1" stroke-linecap="round" stroke-linejoin="bevel"/>
    </svg>
    <p class="p-xs grey-200">retour</p>
</button>