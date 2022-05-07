<!-- TODO: Refactor and create comments -->
<script>
    import Category from "./components/Category.svelte";
    import Banner from "./components/Banner.svelte";
    import data from "./data/data";

    // This is just to make it easier to change all category functions at once if need be
    function itemClicked(data) {}
</script>

<main>
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
</style>
