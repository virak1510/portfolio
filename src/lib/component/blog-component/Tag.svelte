<script>
  export let tag;
  export let closeTag = false;
</script>

<code>
  {#if closeTag}
  &lt;/<span class="text-[#60e281]">{tag}</span>&gt;
  {:else}
  &lt;<span class="text-[#60e281]">{tag}</span>&gt;
  {/if}
</code>
