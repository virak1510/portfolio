<script>
  /** @type {import('./$types').LayoutData} */
  import { page } from "$app/stores";
  import { enhance } from "$app/forms";
  // import {themes}
  // export let data;
  const themes = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
  ];
  const formThemeEnhance = ({ action }) => {
    const theme = action.searchParams.get("theme");
    if (theme) {
      // colorTheme = theme;
      // let dataTheme = document.querySelector('[data-theme]')
      // dataTheme.attributes = theme
    }
  };
</script>

<div data-theme="dark">
  <div class="navbar bg-base-100 glass">
    <div class="flex-1">
      <a href="/blog" class="btn btn-ghost normal-case text-xl">Virak</a>
    </div>
    <div class="flex-none gap-2">
      <div class="form-control">
        <input type="text" placeholder="Search" class="input input-bordered" />
      </div>
      <div title="Change Theme" class="dropdown dropdown-end ">
        <div tabindex="0" class="btn gap-1 normal-case btn-ghost">
          <svg
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block h-5 w-5 stroke-current md:h-6 md:w-6"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
            /></svg
          > <span class="hidden md:inline">Theme</span>
          <svg
            width="12px"
            height="12px"
            class="ml-1 hidden h-3 w-3 fill-current opacity-60 sm:inline-block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2048 2048"
            ><path
              d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"
            /></svg
          >
        </div>
        <div
          class="dropdown-content bg-base-200 text-base-content rounded-t-box rounded-b-box top-px max-h-96 h-[70vh] w-52 overflow-y-auto shadow-2xl mt-16"
        >
          {#each themes as theme}
          <div class="grid grid-cols-1 p-2">
            <form method="post" use:enhance={formThemeEnhance}>
              <button class="w-full border-b" formaction="/blog?/setTheme&theme={theme}">{theme}</button>
            </form>
          </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
  <div class="min-h-[calc(100vh-66px)] p-5 bg-base-300">
    <slot />
  </div>
</div>


