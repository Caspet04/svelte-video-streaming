<!-- TODO: Refactor and create comments, consider making into an image carousel with the content expanding on hover -->
<script>
    import { randomItem, multirun, repeatString } from "../js/utility";
    import VideoThumbnail from "./VideoThumbnail.svelte";

    export let func;
    export let numberOfItems;
    export let numberOfRows;
    export let title = "Category";
    export let list = [];

    let usedItemList = [];

    const MAX_RECURSIVE_DEPTH_RANDOM = 50;
    const MULTIRUN_VERBOSE = false;

    function getRandom() {
        return multirun(
            () => {
                return randomItem(list);
            },
            (item) => {
                return !usedItemList.includes(item.id);
            },
            (item) => {
                usedItemList.push(item.id);
            },
            MAX_RECURSIVE_DEPTH_RANDOM,
            MULTIRUN_VERBOSE
        );
    }
</script>

<div class="category">
    <h2 class="category-title">{title}</h2>
    <div
        class="category-content"
        style="grid-template-rows: {repeatString(
            'min-content',
            numberOfRows,
            ' '
        )};"
    >
        {#each Array(numberOfItems) as i}
            <div class="grid-item">
                <VideoThumbnail
                    data={getRandom()}
                    func={(data) => {
                        if (func) {
                            func(data);
                        }
                    }}
                />
            </div>
        {/each}
    </div>
</div>

<style>
    :root {
        --x: 230px; /* TODO: The name of the variable doesn't describe what it does. */
    }
    .category {
        margin-left: min(50px, 1vw);
        margin-right: min(50px, 1vw);
    }

    .category-title {
        color: white;
        font-size: 2.5em;
    }

    .category-content {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(var(--x), auto));
    }

    .grid-item {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 100%;
        height: 100%;
    }

    @media only screen and (max-width: 600px) {
        :root {
            --x: 160px;
        }
    }
</style>
