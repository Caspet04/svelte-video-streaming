<script>
    export let data;
    export let func;

    const STATUS_TEXT = {
        RELEASING: "Releasing",
        FINISHED: "Finished",
        NOT_YET_RELEASED: "Not Yet Released",
    };
</script>

<div id="container">
    <h2 id="title">{data.title}</h2>
    <h5 id="episodes">
        Episodes: {data.episodes}
    </h5>
    <p id="description">
        {@html data.description}
    </p>
    <div id="stats">
        <p id="stats-status">
            Status: <span class="stat">{STATUS_TEXT[data.status]}</span>
        </p>
        <p id="stats-genre">
            Genres: <span class="stat">{data.genres.join(", ")}</span>
        </p>
    </div>
    <button
        id="play"
        on:click={() => {
            if (func != null) func();
        }}>PLAY</button
    >
</div>

<style>
    #container {
        margin: 20px;
        background: black;
        color: white;
        border-radius: 15px;
    }

    #title {
        padding: 0 10px;

        border-radius: 15px 15px 0 0;
        background: black;

        /* overflow: hidden; */
    }

    #episodes {
        background: grey;
        margin: 0;
        padding: 5px 10px;
    }

    #description {
        display: -webkit-box;

        margin: 5px 0 15px 0;
        padding: 0px 10px;

        -webkit-line-clamp: 10;
        -webkit-box-orient: vertical;

        background: black;

        overflow: hidden;
    }

    #stats {
        padding: 5px 10px;
        padding-bottom: 10px;
        background: darkblue;
    }

    #stats p {
        margin: 0;
    }

    .stat {
        color: darkgrey;
    }

    #stats-genre .stat {
        color: blueviolet;
    }

    #play {
        color: white;
        background: rgb(0, 0, 110);
        width: 100%;
        outline: none;
        border: none;
        border-radius: 0 0 15px 15px;
        margin: 0;
    }
</style>
