<script>
  import VideoThumbnail from "./components/VideoThumbnail.svelte";
  import data from "./data/data";
  import { randomItem } from "./js/utility";

  const ITEMS_PER_CATEGORY = 20;
  const MAX_RECURSIVE_DEPTH_RANDOM = 10;

  let justAired = [];
  let recommended = [];
  let trending = [];
  let toCome = [];

  function getRandomJustAired(i = 0) {
    let item = randomItem(data.RELEASING);
    if (i >= MAX_RECURSIVE_DEPTH_RANDOM) {
      console.log("getRandomJustAired(): max recursive depth reached");
      return item;
    }

    if (item.title.english in justAired) {
      item = getRandomJustAired(i + 1);
    }

    justAired.push(item.title.english);
    return item;
  }

  function getRandomRecommended(i = 0) {
    let item = randomItem(data.FINISHED);
    if (i >= MAX_RECURSIVE_DEPTH_RANDOM) {
      console.log("getRandomJustAired(): max recursive depth reached");
      return item;
    }

    if (item.title.english in recommended) {
      item = getRandomJustAired(i + 1);
    }

    recommended.push(item.title.english);
    return item;
  }

  function getRandomTrending(i = 0) {
    let item = randomItem(data.RELEASING);
    if (i >= MAX_RECURSIVE_DEPTH_RANDOM) {
      console.log("getRandomJustAired(): max recursive depth reached");
      return item;
    }

    if (item.title.english in trending) {
      item = getRandomJustAired(i + 1);
    }

    trending.push(item.title.english);
    return item;
  }

  function getRandomToCome(i = 0) {
    let item = randomItem(data.NOT_YET_RELEASED);
    if (i >= MAX_RECURSIVE_DEPTH_RANDOM) {
      console.log("getRandomJustAired(): max recursive depth reached");
      return item;
    }

    if (item.title.english in toCome) {
      item = getRandomJustAired(i + 1);
    }

    toCome.push(item.title.english);
    return item;
  }
</script>

<main>
  <div id="navbar" />

  <div id="banner">
    <div><h1>Aniflix</h1></div>
  </div>

  <div id="category-list">
    <div class="category" id="just-aired">
      <h3 class="category-title">Just Aired</h3>
      <div class="category-content">
        {#each Array(ITEMS_PER_CATEGORY) as i}
          <VideoThumbnail data={getRandomJustAired()} />
        {/each}
      </div>
    </div>
    <div class="category" id="recommended">
      <h3 class="category-title">Recommended</h3>
      <div class="category-content">
        {#each Array(ITEMS_PER_CATEGORY) as i}
          <VideoThumbnail data={getRandomRecommended()} />
        {/each}
      </div>
    </div>
    <div class="category" id="trending">
      <h3 class="category-title">Trending</h3>
      <div class="category-content">
        {#each Array(ITEMS_PER_CATEGORY) as i}
          <VideoThumbnail data={getRandomTrending()} />
        {/each}
      </div>
    </div>

    <div class="category" id="to-come">
      <h3 class="category-title">To Come</h3>
      <div class="category-content">
        {#each Array(ITEMS_PER_CATEGORY) as i}
          <VideoThumbnail data={getRandomToCome()} />
        {/each}
      </div>
    </div>
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
    box-shadow: 0 0 40px 40px rgb(0, 0, 20) inset;
  }

  .category {
    margin-left: 40px;
    margin-right: 40px;
  }

  .category-title {
    color: white;
    font-size: 1.4em;
  }

  .category-content {
    display: flex;
    overflow-x: scroll;
    align-items: center;
  }
</style>
