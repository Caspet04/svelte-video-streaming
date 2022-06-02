<!-- TODO: Refactor and create comments -->
<script>
    import Category from "./components/Category.svelte";
    import Banner from "./components/Banner.svelte";
    import Youtube from "./components/Youtube.svelte";
    import ShowInfo from "./components/ShowInfo.svelte";
    import data from "./data/data";

    let currentData;
    // This is just to make it easier to change all category functions at once if need be
    function itemClicked(data) {
        currentData = data;
    }

    function resetItemClicked() {
        currentData = null;
        showShow = false;
    }

    let innerWidth;

    const CATEGORIES = [
        {
            title: "Airing This Week",
            items: 20,
            rows: 2,
            list: data.RELEASING,
        },
        {
            title: "Recommended",
            items: 20,
            rows: 2,
            list: data.FINISHED,
        },
        {
            title: "Trending",
            items: 20,
            rows: 2,
            list: data.RELEASING,
        },
        {
            title: "To Come",
            items: 10,
            rows: 1,
            list: data.NOT_YET_RELEASED,
        },
    ];

    let selectedCategory = 0;
    let showShow = false;

    let scrollable = true;
    const wheel = (node, options) => {
        let { scrollable } = options;

        const handler = (e) => {
            if (!scrollable) e.preventDefault();
        };

        node.addEventListener("wheel", handler, { passive: false });
        node.addEventListener("touchmove", handler, { passive: false });

        return {
            update(options) {
                scrollable = options.scrollable;
            },
            destroy() {
                node.removeEventListener("wheel", handler, { passive: false });
                node.removeEventListener("touchmove", handler, {
                    passive: false,
                });
            },
        };
    };

    $: {
        scrollable = currentData == null;
    }
</script>

<svelte:window bind:innerWidth use:wheel={{ scrollable }} />

<main>
    {#if innerWidth > 600}
        <Banner clickFunction={itemClicked} />
    {:else}
        <h1 id="site-title">ANIFLIX</h1>
    {/if}

    <div id="overlay-container">
        {#if currentData != null && (showShow || innerWidth > 600)}
            <div
                class="overlay"
                id="player-overlay"
                on:click={resetItemClicked}
            >
                <Youtube videoId={currentData.trailer.id} />
            </div>
        {:else if currentData != null}
            <div
                class="overlay"
                id="show-info-overlay"
                on:click={resetItemClicked}
            >
                <ShowInfo
                    data={currentData}
                    func={() => {
                        showShow = true;
                    }}
                />
            </div>
        {/if}
    </div>

    {#if innerWidth <= 600}
        <div id="category-selection">
            {#each Array.from(Array(CATEGORIES.length).keys()) as i}
                <div
                    class="category-selector {selectedCategory == i
                        ? ' active'
                        : ''}"
                    on:click={() => {
                        if (selectedCategory == i) return; // Return early to avoid rerendering unnecessarily.
                        selectedCategory = i;
                    }}
                >
                    {CATEGORIES[i].title}
                </div>
            {/each}
        </div>
    {/if}

    <div id="category-list">
        {#each Array.from(Array(CATEGORIES.length).keys()) as i}
            {#if innerWidth > 600 || selectedCategory == i}
                <Category
                    numberOfItems={CATEGORIES[i].items}
                    numberOfRows={CATEGORIES[i].rows}
                    title={CATEGORIES[i].title}
                    list={CATEGORIES[i].list}
                    func={itemClicked}
                />
            {/if}
        {/each}
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

    #show-info-overlay {
        display: flex;
        justify-content: center;
        align-items: center;

        background: rgba(0, 0, 0, 0.5);
    }

    #category-list {
        width: 90vw;
        margin: auto;
    }

    #category-selection {
        display: flex;
        flex-direction: column;

        width: 100%;

        border-top: 5px solid black;
        border-bottom: 5px solid black;
    }

    .category-selector {
        width: 100%;

        background: darkblue;

        font-size: 1.25em;
        color: white;
        text-align: center;
    }

    .category-selector.active {
        background: rgb(75, 75, 75);
    }

    #site-title {
        margin: auto;

        text-align: center;
        font-size: 4em;
        color: white;
    }
</style>
