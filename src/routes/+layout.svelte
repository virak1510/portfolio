<script>
  import "../app.postcss";
  export let data;
</script>

<main data-theme={data.theme} class="scroll-smooth">
  <slot />
</main>

