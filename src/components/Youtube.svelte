<script>
    export let videoId;
</script>

<iframe
    id="player"
    title="Something"
    src="https://www.youtube.com/embed/{videoId}"
    frameborder="0"
    allow="fullscreen"
/>

<style>
    :root {
        --width: 60vw;
    }
    #player {
        width: var(--width);
        height: calc(var(--width) / calc(16 / 9));
    }

    @media only screen and (max-width: 600px) {
        :root {
            --width: 90vw;
        }
    }
</style>
