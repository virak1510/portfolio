<script>
  import Card from "../../lib/component/Card.svelte";
</script>
<section data-theme="light" class="max-w-5xl mx-auto border min-h-screen">
  <header class="p-8 border-b-2 border-black">
    <div class="flex gap-5">
      <img class="w-28 h-28 rounded-full text-center" src="/images/snag.jpg" alt="">
      <div class="">
        <h1 class="text-2xl capitalize">virak nget</h1>
        <h2 class="capitalize leading-6 text-gray-500 text-sm">Junior Web developer</h2>
        <h3 class="text-xs">Passionate of Creating Things</h3>
      </div>
    </div>
  </header>
  <section class="grid grid-cols-2 sm:place-items-center sm:grid-cols-4 py-2 gap-y-2 gap-x-4 sm:gap-x-0 border-b border-black whitespace-nowrap px-6 sm:px-0">
    <div class="flex items-center text-xs gap-1">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
        <p class="">virak.1510@gmail.com</p>
    </div>
    <div class="flex items-center text-xs gap-1">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>      
        <p class="">068835336</p>
    </div>
    <div class="flex items-center text-xs gap-1">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
            
        <p class="">phnom penh, Cambodia </p>
    </div>
    <div class="flex items-center text-xs gap-1">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
      </svg>      
            
        <p class="">15 October, 1998</p>
    </div>
  </section>
  <section class="grid grid-cols-2 p-5 px-8">
    <div class="left">
      <div class="">
        <h2 class="text-2xl font-medium uppercase mb-3">work experience</h2>
        <h3 class="capitalize text-lg font-semibold leading-6">full stack web developer</h3>
        <p class="capitalize"><a class="link-primary" href="https://slashinnovation.com" target="_blank">slashinnovation</a></p>
        <p class="text-gray-500">12/2022 - Present</p>
        <h3 class="capitalize text-lg font-semibold leading-6 mt-2">IT support</h3>
        <p class="capitalize">Phanna computer</p>
        <p class="text-gray-500">11/2019 - 12/2021</p>
      </div>
      <div class="mt-5">
        <h2 class="text-2xl font-medium uppercase mb-3">education</h2>
        <h2 class="text-lg font-medium">Computer Science </h2>
        <h2 class="text-sm font-normal ">Asia Euro University  </h2>
      </div>
    </div>
    <div class="right flex flex-col">
      <div class="">
        <h2 class="text-2xl font-medium uppercase mb-3">skills</h2>
        <div class="max-w-full">
          <div class="m-1 my-2 float-left p-1 px-2 text-gray-200 bg-gray-400 font-semibold rounded-md">Html5</div>
          <div class="m-1 my-2 float-left p-1 px-2 text-gray-200 bg-gray-400 font-semibold rounded-md">CSS3</div>
          <div class="m-1 my-2 float-left p-1 px-2 text-gray-200 bg-gray-400 font-semibold rounded-md">JavaScript</div>
          <div class="m-1 my-2 float-left p-1 px-2 text-gray-200 bg-gray-400 font-semibold rounded-md">Jquery</div>
          <div class="m-1 my-2 float-left p-1 px-2 text-gray-200 bg-gray-400 font-semibold rounded-md">PHP</div>
          <div class="m-1 my-2 float-left p-1 px-2 text-gray-200 bg-gray-400 font-semibold rounded-md">Laravel</div>
          <div class="m-1 my-2 float-left p-1 px-2 text-gray-200 bg-gray-400 font-semibold rounded-md">SQL</div>
          <div class="m-1 my-2 float-left p-1 px-2 text-gray-200 bg-gray-400 font-semibold rounded-md">Vue</div>
          <div class="m-1 my-2 float-left p-1 px-2 text-gray-200 bg-gray-400 font-semibold rounded-md">SvelteKit</div>
          <div class="m-1 my-2 float-left p-1 px-2 text-gray-200 bg-gray-400 font-semibold rounded-md">Tailwindcss</div>
        </div>
      </div>
      <div class="mt-5">
        <h2 class="text-2xl font-medium uppercase mb-3">personal</h2>
        <p class="capitalize">salary project</p>
        <ul class="mx-5">
          <li class="text-gray-500 list-disc ">small project for check salary for employee</li>
        </ul>
      </div>
      <div class="mt-5">
        <h2 class="text-2xl font-medium uppercase mb-3">ACHIEVEMENTS </h2>
        <p class="capitalize">Virgin</p>
        <!-- <ul class="mx-5">
          <li class="text-gray-500 list-disc ">small project for check salary for employee</li>
        </ul> -->
      </div>
      <div class="mt-5">
        <h2 class="text-2xl font-medium uppercase mb-3">LANGUAGES  </h2>
        <div class="grid grid-cols-2">
          <div class="">
            <h5 class="capitalize">khmer</h5>
            <p class="text-gray-500 text-sm font-light">Native or Bilingual Proﬁciency</p>
          </div>
          <div class="">
            <h5 class="capitalize">english </h5>
            <p class="text-gray-500 text-sm font-light">Professional Working Proﬁciency </p>
          </div>
        </div>
      </div>
      <div class="mt-5">
        <h2 class="text-2xl font-medium uppercase mb-3">INTERESTS</h2>
        <div class="max-w-full">
          <div class="m-1 my-2 float-left p-1 px-2 text-gray-600 border-2 border-gray-500 font-semibold rounded-md">Research</div>
          <div class="m-1 my-2 float-left p-1 px-2 text-gray-600 border-2 border-gray-500 font-semibold rounded-md">Learning new framework</div>
          <div class="m-1 my-2 float-left p-1 px-2 text-gray-600 border-2 border-gray-500 font-semibold rounded-md">gaming</div>
          <div class="m-1 my-2 float-left p-1 px-2 text-gray-600 border-2 border-gray-500 font-semibold rounded-md">reading</div>
          <div class="m-1 my-2 float-left p-1 px-2 text-gray-600 border-2 border-gray-500 font-semibold rounded-md">technology news</div>
          
        </div>
      </div>



    </div>
  </section>
</section>