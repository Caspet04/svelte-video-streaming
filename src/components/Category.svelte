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
    <h3 class="category-title">{title}</h3>
    <div class="category-content">
        {#each Array(numberOfItems) as i}
            <VideoThumbnail data={getRandom()} />
        {/each}
    </div>
</div>

<style>
    .category {
        margin-left: 40px;
        margin-right: 40px;
    }

    .category-title {
        color: white;
        font-size: 1.4em;
    }

    .category-content {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(230px, auto));
        grid-auto-rows: min-content;
    }
</style>
