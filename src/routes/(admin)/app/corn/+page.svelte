<script>
  /** @type {import('./$types').PageData} */
  // import { Player, Video, DefaultUi } from "@vime/svelte";
  export let data;
</script>

<div>
  {data.slug}
  <div class="w-[50%] h-[50%]">
    <!-- <Player theme="light" style="--vm-player-theme: #e86c8b;" >
      <Video crossOrigin poster="/images/Sololeveling.png">
        <source
          data-src="https://media.vimejs.com/720p.mp4"
          type="video/mp4"
        />
        <track
          default
          kind="subtitles"
          src="https://media.vimejs.com/subs/english.vtt"
          srclang="en"
          label="English"
        />
      </Video>
      <DefaultUi />
    </Player> -->
    
  </div>
</div>

