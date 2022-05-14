<!-- TODO: Refactor and create comments -->
<script>
    import Category from "./components/Category.svelte";
    import Banner from "./components/Banner.svelte";
    import Youtube from "./components/Youtube.svelte";
    import data from "./data/data";

    let currentData;
    // This is just to make it easier to change all category functions at once if need be
    function itemClicked(data) {
        currentData = data;
    }

    function resetItemClicked() {
        currentData = null;
    }
</script>

<main>
    <Banner clickFunction={itemClicked} />

    <div id="overlay-container">
        {#if currentData != null}
            <div
                class="overlay"
                id="player-overlay"
                on:click={resetItemClicked}
            >
                <Youtube videoId={currentData.trailer.id} />
            </div>
        {/if}
    </div>

    <div id="category-list">
        <Category
            numberOfItems={20}
            numberOfRows={2}
            title="Airing This Week"
            list={data.RELEASING}
            func={itemClicked}
        />
        <Category
            numberOfItems={20}
            numberOfRows={2}
            title="Recommended"
            list={data.FINISHED}
            func={itemClicked}
        />
        <Category
            numberOfItems={20}
            numberOfRows={2}
            title="Trending"
            list={data.RELEASING}
            func={itemClicked}
        />
        <Category
            numberOfItems={10}
            numberOfRows={1}
            title="To Come"
            list={data.NOT_YET_RELEASED}
            func={itemClicked}
        />
    </div>
</main>

<style>
    :global(body) {
        margin: 0;
        padding: 0;
        background-color: rgb(0, 0, 60);
    }

    #overlay-container {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        /* Guarantee that the overlay is at the top */
        z-index: 1000;

        pointer-events: none;
    }

    .overlay {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        pointer-events: all;
    }

    #player-overlay {
        display: flex;
        justify-content: center;
        align-items: center;

        background: rgba(0, 0, 0, 0.5);
    }

    #category-list {
        width: 90vw;
        margin: auto;
    }
</style>
