<!-- TODO: Refactor and create comments -->
<script>
    import { slide } from "svelte/transition";

    import { randomItem, multirun } from "../js/utility";
    import data from "../data/data";

    export let clickFunction;

    let bannerData = [];
    let bannerIndex = -1; // This is set to 0 since it's incremented immediatly
    let currentBanner;

    // Populate bannerData with unique random anime that is releasing
    for (let i = 0; i < 5; i++) {
        bannerData.push(
            multirun(
                () => {
                    return randomItem(data.RELEASING);
                },
                (item) => {
                    return !bannerData.includes(item);
                },
                null,
                10,
                false
            )
        );
    }

    function changeBanner() {
        bannerIndex = (bannerIndex + 1) % 5;
        currentBanner = bannerData[bannerIndex];
    }

    // Set first banner
    changeBanner();
    // Set move interval
    setInterval(changeBanner, 7000);
</script>

<div id="banner">
    <div
        id="banner-image-container"
        on:click={() => {
            clickFunction(currentBanner);
        }}
    >
        {#key bannerIndex}
            <img
                transition:slide
                id="banner-image"
                src={currentBanner.banner_image}
                alt="BANNER"
            />
        {/key}
    </div>
    <div id="banner-sub-container">
        <h1 id="banner-site-name">ANIFLIX</h1>
        <div id="banner-information">
            <h3 id="banner-title">{@html currentBanner.title}</h3>
            {#each currentBanner.banner_highlight.split("<br>") as descPart}
                <p class="banner-description">
                    {@html descPart}
                </p>
            {/each}
        </div>
    </div>
</div>

<style>
    #banner {
        display: flex;
        justify-content: center;

        position: relative;

        width: 100%;
        height: 400px;

        overflow-x: hidden;

        background-color: rgb(0, 0, 20);
    }

    #banner-sub-container {
        display: flex;

        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        height: 120px;

        overflow: hidden;

        background-color: rgba(0, 0, 0, 0.5);
    }

    #banner-site-name {
        color: white;
        font-size: 4em;
        padding: 0;
        margin: 0;
        margin-top: auto;
        margin-bottom: auto;
        margin-left: 0.5em;
    }

    #banner-information {
        width: 100%;
        margin-left: 3em;
        margin-right: 3em;
    }

    .banner-description {
        width: 40vw;
        min-width: 500px;

        margin-top: 0;
        margin-bottom: 0.25em;

        color: white;
    }

    #banner-title {
        margin-top: 0.5em;
        margin-bottom: 0.5em;

        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: white;
    }

    #banner-image-container {
        position: absolute;
        top: 0;
        display: flex;
        align-items: flex-end;
        justify-content: center;
    }

    #banner-image {
        opacity: 0.4;
        height: 400px;
        box-shadow: 0 0 25px 30px rgb(0, 0, 20) inset;
        transition: opacity 1s ease-in;
    }
</style>
