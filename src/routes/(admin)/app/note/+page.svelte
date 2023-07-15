<script>
  import { onMount } from "svelte";
  import { flip } from "svelte/animate";
  import { quintOut } from "svelte/easing";
  import { crossfade } from 'svelte/transition';

  /** @type {import('./$types').PageData} */
  export let data;
  let notes = [{ note: "" }];
  function handleDeleteNote(idx) {
    notes.splice(idx, 1);
    notes = notes;
  }
  const [send, receive] = crossfade({
		fallback(node, params) {
			const style = getComputedStyle(node);
			const transform = style.transform === 'none' ? '' : style.transform;

			return {
				duration: 600,
				easing: quintOut,
				css: t => `
					transform: ${transform} scale(${t});
					opacity: ${t}
				`
			};
		}
	});

  onMount(() => {
    document.addEventListener("keypress", (e) => {
      if (e.code == "Enter" && e.ctrlKey) {
        notes = [...notes, { note: "" }];
      }
    });
  });
</script>

<div class="min-h-full p-2 bg-base-100 ">
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
    {#each notes as note, index (index)}
      <div
        class="indicator"
        in:receive="{{key: index}}"
				out:send="{{key: index}}"
        animate:flip
      >
        <span
          class="indicator-item badge badge-primary cursor-pointer select-none"
          on:click={() => handleDeleteNote(index)}>X</span
        >
        <div
          class=" min-w-[350px] textarea textarea-accent p-4 min-h-[400px] text-lg font-poppins tracking-wider bg-secondary"
          bind:innerHTML={note.note}
          contenteditable
        />
      </div>
    {/each}
  </div>
</div>
