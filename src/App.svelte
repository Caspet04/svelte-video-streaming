<!-- TODO: Refactor and create comments -->
<script>
    import Category from "./components/Category.svelte";
    import Banner from "./components/Banner.svelte";
    import data from "./data/data";

    let clickedData;

    // This is just to make it easier to change all category functions at once if need be
    function itemClicked(data) {
        clickedData = data;
    }
</script>

<main>
    <div id="overlays">
        {#if clickedData != null}
            <div
                id="item-information-overlay"
                on:click={() => {
                    clickedData = null;
                }}
            >
                <div id="item-information-content">
                    <h1 id="item-title">{clickedData.title}</h1>
                    <p id="item-description">{@html clickedData.description}</p>
                    <img
                        id="item-cover-image"
                        src={clickedData.cover_image}
                        alt=""
                    />
                </div>
            </div>
        {/if}
    </div>

    <div id="navbar" />

    <Banner clickFunction={itemClicked} />

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

    #navbar {
        position: sticky;
        top: 0;
        left: 0;
        right: 0;
        height: 50px;
        background: darkblue;
    }

    #overlays div {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        z-index: 100;
    }

    #item-information-overlay {
        background-color: rgba(0, 0, 0, 0.5);
    }

    #item-information-content {
        margin: auto;
        border-radius: 40px;
        background-color: white;
        width: 50vw;
        height: 50vh;
    }
</style>
