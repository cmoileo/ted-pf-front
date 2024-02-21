<script>
    export let data;
    let test = "csr !"
    function handleClick() {
        test = 'dynamic !'
    }
</script>

<h1>{data.data.data.attributes.Label_projets}</h1>
<button on:click={handleClick}>Hello world {test}</button>