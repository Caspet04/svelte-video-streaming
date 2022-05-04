<!-- TODO: Refactor and create comments -->
<script>
    export let data;
    export let func;
</script>

<div class="container">
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
        </div>
    </div>
    <h3 class="cover-title">{data.title}</h3>
    <div class="mouseover-info">
        <h2 class="info-title">{data.title}</h2>
        <h5 class="info-episodes">
            Episodes: {data.episodes_aired}/{data.episodes_total}
        </h5>
        <p class="info-description">{@html data.description}</p>
        <div class="info-stats">
            <p class="stats-score">{data.score}</p>
            <p class="stats-status">{data.status}</p>
            <p class="stats-genre">{data.genres}</p>
        </div>
    </div>
</div>

<style>
    .container {
        position: relative;
        width: min-content;
    }

    .cover {
        position: relative;

        width: 200px;
        height: 300px;
        /* NOTE: This is set due to the fact that they are in a grid and grids set
                 automatic mins */
        min-width: 200xp;
        min-height: 300px;

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

        background-color: rgba(0, 0, 0, 0.4);

        visibility: hidden;
    }

    .cover-title {
        margin-top: 0.1em;
        margin-bottom: 0.5em;
        color: white;
    }

    .container:hover > .mouseover-info {
        visibility: visible;
    }

    .mouseover-info {
        position: absolute;
        top: 30px;
        left: 210px;

        width: 300px;
        height: 400px;

        padding: 10px 0;

        border-radius: 15px;

        color: white;
        background-color: black;

        visibility: hidden;
        z-index: 2;
    }

    .info-title {
        padding: 0 10px;
    }

    .info-episodes {
        background-color: grey;
        padding: 5px 10px;
    }

    .info-description {
        padding: 0px 10px;
        height: 200px;
        overflow: hidden;
    }

    .info-stats {
        padding: 0 10px;
    }
</style>
