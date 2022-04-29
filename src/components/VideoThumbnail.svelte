<script>
    import { onMount } from "svelte";

    export let data;
    export let func;
    let mouseover = false;
    let container;
    let right;

    export function resize() {
        let innerWidth =
            window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth;
        right = container.getBoundingClientRect().x > innerWidth - 650;
    }

    function truncate(str, length) {
        if (str.length < length) {
            return str;
        }
        const substr = str.substr(0, length - 1);
        return str.substr(0, substr.lastIndexOf(" ")) + "&hellip;";
    }

    onMount(resize);
    window.addEventListener("resize", resize);
</script>

<div
    bind:this={container}
    class="container {right ? 'right' : 'left'} {mouseover ? 'mouseover' : ''}"
>
    <img
        src={data.cover_image}
        alt=""
        on:mouseenter={() => {
            mouseover = true;
        }}
        on:mouseleave={() => {
            mouseover = false;
        }}
        on:click={() => {
            if (func) {
                func(data);
            }
        }}
    />
    <div class="mouseover-info">
        <h2>{data.title}</h2>
        <p>{@html truncate(data.description, 200)}</p>
    </div>
</div>

<style>
    :root {
        --image-margin: 10px;
        --image-width: 200px;
        --image-height: 300px;
        --border-thickness: 4px;
        --total-width: calc(
            var(--image-width) + 2 * var(--image-margin) + 2 *
                var(--border-thickness)
        );
        --info-width: 400px;
    }

    .container {
        display: flex;

        min-width: var(--total-width);
        width: var(--total-width);

        box-sizing: border-box;
        margin: 10px 5px;

        border-radius: 10px;
        border: solid var(--border-thickness) rgb(0, 0, 60);

        overflow: hidden;

        background-color: darkblue;
    }

    .right.container {
        flex-direction: row-reverse;
    }

    .container.mouseover {
        box-sizing: border-box;
        z-index: 2;
        width: calc(var(--info-width) + var(--total-width));
        border: solid var(--border-thickness) white;
    }

    .left.container.mouseover {
        margin-right: calc(0px - var(--info-width) - var(--total-width));
    }

    .right.container.mouseover {
        /* HACK: The 5px is needed for some reason*/
        margin-left: calc(5px - var(--info-width));
    }

    .container img {
        width: var(--image-width);
        min-width: var(--image-width);
        height: var(--image-height);
        min-height: var(--image-height);

        padding: var(--image-margin);

        object-fit: cover;
        overflow: hidden;

        border-radius: 10px;
    }

    .mouseover-info {
        width: var(--info-width);
        height: var(--image-height);
        overflow: hidden;

        color: white;
    }

    .container p {
        position: relative;
        font-size: 1.4em;
        line-height: 1.4em;
    }
</style>
