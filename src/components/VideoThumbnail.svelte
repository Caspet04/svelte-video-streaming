<!-- TODO: Refactor and create comments -->
<script>
    import { onMount } from "svelte";

    export let data;
    export let func;

    const STATUS_TEXT = {
        RELEASING: "Releasing",
        FINISHED: "Finished",
        NOT_YET_RELEASED: "Not Yet Released",
    };

    let container;
    let right;

    export function resize() {
        let innerWidth =
            window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth;
        right = container.getBoundingClientRect().x > innerWidth - 650;
    }

    onMount(resize);
    window.addEventListener("resize", resize);
</script>

<div class="container" bind:this={container}>
    <div class="cover">
        <img
            src={data.cover_image}
            alt=""
            on:click={() => {
                if (func) {
                    func(data);
                }
            }}
        />
        <div class="play-symbol">
            <!-- TODO: Add a play symbol -->
            <img src="./images/play_button.png" alt="" />
        </div>
    </div>
    <h3 class="cover-title">{data.title}</h3>
    <div class="mouseover-info {right ? 'right' : 'left'}">
        <h2 class="info-title">{data.title}</h2>
        <h5 class="info-episodes">
            Episodes: {data.episodes}
        </h5>
        <p class="info-description">{@html data.description}</p>
        <div class="stats">
            <p class="stats-status">
                Status: <span class="stat">{STATUS_TEXT[data.status]}</span>
            </p>
            <p class="stats-genre">
                Genres: <span class="stat">{data.genres.join(", ")}</span>
            </p>
        </div>
    </div>
</div>

<style>
    :root {
        --thumbnail-width: 200px;
        --thumbnail-height: 300px;
        --mouseover-width: 300px;
        --mouseover-offset: 10px;
    }

    .container {
        position: relative;
        width: min-content;
    }

    .cover {
        position: relative;

        width: var(--thumbnail-width);
        height: var(--thumbnail-height);
        /* NOTE: This is set due to the fact that they are in a grid and grids set
                 automatic mins */
        min-width: var(--thumbnail-width);
        min-height: var(--thumbnail-height);

        overflow: hidden;

        border-radius: 20px;
    }

    .cover:hover > .play-symbol {
        visibility: visible;
    }

    .play-symbol {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        display: flex;
        align-items: center;
        justify-content: center;

        background: rgba(0, 0, 0, 0.4);

        visibility: hidden;
        user-select: none;
        pointer-events: none;
    }

    .play-symbol img {
        width: 50%;
        -webkit-user-drag: none;
    }

    .cover-title {
        margin-top: 0.1em;
        margin-bottom: 0.5em;

        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;

        color: white;
    }

    .container:hover > .mouseover-info {
        visibility: visible;
        transition: 0s visibility;
        transition-delay: 0.25s;
    }

    .mouseover-info {
        position: absolute;
        top: 30px;
        left: calc(var(--thumbnail-width) + var(--mouseover-offset));

        width: var(--mouseover-width);

        border-radius: 15px;
        background: black;
        color: white;

        visibility: hidden;
        z-index: 2;
    }

    .mouseover-info.right {
        left: calc(0px - var(--mouseover-width) - var(--mouseover-offset));
    }

    .info-title {
        padding: 0 10px;

        border-radius: 15px 15px 0 0;
        background: black;

        overflow: hidden;
    }

    .info-episodes {
        background: grey;
        margin: 0;
        padding: 5px 10px;
    }

    .info-description {
        display: -webkit-box;

        margin: 5px 0 15px 0;
        padding: 0px 10px;

        -webkit-line-clamp: 10;
        -webkit-box-orient: vertical;

        background: black;

        overflow: hidden;
    }

    .stats {
        padding: 5px 10px;
        padding-bottom: 10px;
        background: darkblue;
        border-radius: 0 0 15px 15px;
    }

    .stats p {
        margin: 0;
    }

    .stat {
        color: darkgrey;
    }
    .stats-genre .stat {
        color: blueviolet;
    }

    @media only screen and (max-width: 600px) {
        :root {
            --thumbnail-width: 150px;
            --thumbnail-height: 225px;
            --mouseover-width: 225px;
            --mouseover-offset: 7.5px;
        }

        .container:hover > .mouseover-info {
            visibility: hidden;
        }
    }
</style>
