<script>
  import {drawerStat} from "$store"
  import Appnav from "$lib/component/Appnav.svelte";
  /** @type {import('./$types').LayoutData} */
  export let data;
  const role = data.user?.expand?.role?.role
  function handleDrawer() {
    $drawerStat = !$drawerStat;
  }
</script>
<svelte:head>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2638426151951691"
  crossorigin="anonymous"></script>
  <title>app</title>
</svelte:head>

<div data-theme={data.theme} class="relative">
  <div class="navbar bg-base-100 nav border">
    <div class="flex-none">
      <button class="btn btn-square btn-ghost" on:click={handleDrawer}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block w-5 h-5 stroke-current"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          /></svg
        >
      </button>
    </div>
    <div class="flex-1">
      <a href="/app" class="btn border-0 bg-base-100 normal-case text-xl flex gap-3">
        <img class="w-10" src="/logo/legendaryrak.png" alt="">
        <h1>Legendary rak</h1>
      </a>
      <h5 class="text-2xl ml-auto mr-5">{data.user?.username}</h5>
    </div>

    <div class="flex-none">
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="m-1">
            <div class="avatar">
              <div class="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="/logo/legendaryrak.png" />
              </div>
            </div>
          </label>
          <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 z-50">
            <li><a href="/app/profile">Profile</a></li>
            <li>
              <form class="p-0" action="/logout" method="post">
                <button class="w-full text-start p-3" type="submit">sign out</button>
              </form>
              </li>
          </ul>
        </div>
    </div>
  </div>
  <div class="flex h-[calc(100vh-66px)]">
    <div
      class="bg-base-100 hidden border w-[80px]  sm:block border-t-0 py-2 {$drawerStat
        ? 'w-[180px] !block'
        : ''} sticky bottom-0 z-10"
    >
        <Appnav {role}/>
    </div>
    <div class="w-full relative overflow-y-auto"> 
      {#if $drawerStat}
        <div on:click={handleDrawer} class="absolute top-0 left-0 bg-teal-100 opacity-40 w-full h-full z-10">
        </div>
      {/if}
      <slot />
    </div>
  </div>
</div>

<style lang="scss">

</style>