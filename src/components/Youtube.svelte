<!--
    TODO: Switch to Vime.js instead as a dependency
    NOTE: It is possible that I don't need to style the iframe
    and can move on to another project
-->
<script>
    export let videoId;

    // var tag = document.createElement("script");
    // tag.src = "https://www.youtube.com/iframe_api";

    // var firstScriptTag = document.getElementsByTagName("script")[0];
    // firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // let player;

    // function onYouTubeIframeAPIReady() {
    //     player = new YT.Player("player", {
    //         videoId: id,
    //         events: {
    //             onReady: onPlayerReady,
    //             onStateChange: onPlayerStateChange,
    //         },
    //     });
    // }
</script>

<iframe
    id="player"
    title="Something"
    width="720"
    height="480"
    src="https://www.youtube.com/embed/{videoId}?controls=0&enablejsapi=1"
    frameborder="0"
/>
