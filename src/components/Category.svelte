<script>
    import { randomItem, multirun } from "../js/utility";
    import VideoThumbnail from "./VideoThumbnail.svelte";

    export let numberOfItems = 10;
    export let title = "Category";
    export let list = [];

    let usedItemList = [];

    const MAX_RECURSIVE_DEPTH_RANDOM = 10;
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
    <div class="category-content">
        {#each Array(numberOfItems) as i}
            <VideoThumbnail data={getRandom()} />
        {/each}
    </div>
</div>

<style>
    .category {
        margin-left: 50px;
        margin-right: 50px;
    }

    .category-title {
        color: white;
        font-size: 2.5em;
    }

    .category-content {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(230px, auto));
        grid-template-rows: min-content min-content;
        grid-auto-rows: 0;
    }
</style>
