<script>
    export let data;
    let mouseOver = false;
</script>

<div class="container">
    <img src="{data.coverImage.large}" alt="" on:mouseenter="{() => {mouseOver = true;}}" on:mouseleave="{() => {mouseOver = false;}}" />
    <div class="hover-info" style="display: {mouseOver ? 'block' : 'none'};">
    </div>
</div>

<style>
    .container {
        display: flex;
        margin: 5px;
        border-radius: 10px;
        overflow: hidden;
        min-width: min-content;
        box-sizing: border-box;
    }

    .hover-info {
        position: relative;
        width: 100px;
        height: 100px;
        background-color: red;
    }
</style>