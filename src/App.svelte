<script>
    import Category from "./components/Category.svelte";
    import data from "./data/data";

    const ITEMS_PER_CATEGORY = 20;

    function itemClicked(data) {
        console.log(data);
    }
</script>

<main>
    <div id="navbar" />

    <div id="banner">
        <div><h1>Aniflix</h1></div>
    </div>

    <div id="category-list">
        <Category
            numberOfItems={ITEMS_PER_CATEGORY}
            title="Airing This Week"
            list={data.RELEASING}
            func={itemClicked}
        />
        <Category
            numberOfItems={ITEMS_PER_CATEGORY}
            title="Recommended"
            list={data.FINISHED}
            func={itemClicked}
        />
        <Category
            numberOfItems={ITEMS_PER_CATEGORY}
            title="Trending"
            list={data.RELEASING}
            func={itemClicked}
        />
        <Category
            numberOfItems={ITEMS_PER_CATEGORY}
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

    #banner {
        padding-top: 20px;
        padding-bottom: 20px;
        display: flex;
        width: 100%;
        justify-content: center;
        overflow-x: hidden;
        background-color: rgb(0, 0, 20);
    }

    #banner div h1 {
        color: white;
        margin-bottom: 2em;
        font-size: 3em;
    }

    #banner div {
        display: flex;
        align-items: flex-end;
        justify-content: center;
        width: 1024px;
        height: 576px;
        background-image: url(https://live.staticflickr.com/7450/10612779376_9b93277b9e_b.jpg);
        box-shadow: 0 0 25px 30px rgb(0, 0, 20) inset;
    }
</style>
