<script>
  import { page } from "$app/stores";
  import { drawerStat } from "$store/index.js";
  let navList = [{path:"/app",name:"home",icon:"carbon:home"},{path:"/app/note",name:"note",icon:"clarity:note-edit-line"},{path:"/app/chat",name:"chat",icon:"ph:chat-circle-dots"} ,{path:"/app/status",name:"stat",icon:"emojione-monotone:newspaper"}];
  export let role
  if (role == "legend") {
    navList = [...navList, ...[{path:"/app/corn",name:"corn",icon:"carbon:corn"}]]
  }
</script>
<svelte:head>
  <script src="https://code.iconify.design/iconify-icon/1.0.2/iconify-icon.min.js"></script>
</svelte:head>

<ul class="menu bg-base-100 ">
  {#each navList as list}
  <li class="flex gap-2 items-center justify-center">
  <a
    href={list.path}
    class="w-full {$page.url.pathname == list.path ? 'active' : ''}"
  >
  <iconify-icon class="text-4xl {!$drawerStat ? 'mx-auto' : ''}" icon={list.icon}></iconify-icon>
    {#if $drawerStat}
      <span class="uppercase">{list.name}</span>
    {/if}
  </a>
</li>
  {/each}
  <!-- <li class="flex gap-2 items-center justify-center">
    <a
      href="/app"
      class="w-full {$page.url.pathname == '/app' ? 'active' : ''}"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 {!$drawerStat ? 'mx-auto' : ''}"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        ><path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        /></svg
      >
      {#if $drawerStat}
        <span class="uppercase">home</span>
      {/if}
    </a>
  </li>
  <li class="flex gap-2 items-center justify-center">
    <a
      href="/app/note"
      class="w-full {$page.url.pathname == '/app/note' ? 'active' : ''}"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6 {!$drawerStat ? 'mx-auto' : ''}"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
        />
      </svg>
      {#if $drawerStat}
        <span class="uppercase">note</span>
      {/if}
    </a>
  </li>
  <li class="flex gap-2 items-center justify-center">
    <a
      href="/app/chat"
      class="w-full {$page.url.pathname == '/app/chat' ? 'active' : ''}"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6 {!$drawerStat ? 'mx-auto' : ''}"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
        />
      </svg>
      {#if $drawerStat}
        <span class="uppercase">chat</span>
      {/if}
    </a>
  </li> -->
</ul>
