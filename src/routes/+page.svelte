<script>
  // import { dark, theme } from "../store";
  // import anime from 'animejs/lib/anime.es.js';
  // import { afterUpdate, onMount } from "svelte";
  // import { fade } from 'svelte/transition';
  import {IconBrandGithub, IconBrandFacebook} from "@tabler/icons-svelte"
</script>

<svelte:head>
  <meta
    name="description"
    content="Virak's portfolio - A 24-year-old full-stack web developer with a passion for the SvelteKit framework and a love for gaming and creating projects."
  />
  <meta
    name="keywords"
    content="full-stack web developer, SvelteKit, gaming, projects, portfolio"
  />
  <meta name="robots" content="index, follow" />
</svelte:head>

<div class="anime" />
<div class="dark:bg-[#020d18] relative ">
  <div
    class="bg-white px-4 dark:bg-[#020d18] mx-auto max-w-5xl md:px-20 lg:px-40"
  >
    <div class="min-h-screen">
      <nav class="py-10 mb-8 flex justify-between dark:text-white">
        <h1 class="text-xl sm:text-3xl font-medium font-rubik logo">
          legendaryrak
        </h1>
        <ul class="flex items-center gap-2 transition duration-500">
          <li class="flex">
            <a
              class="ani-btn p-2 sm:px-4 sm:py-2 bg-gradient-to-r from-cyan-500 to-teal-500 font-medium rounded-2xl text-white dark:text-black text-lg hover:bg-none hover:bg-base-100 hover:text-secondary"
              href="/app">app</a
            >
          </li>
          <li>
            <a
              href="/resume"
              class="p-2 sm:px-4 sm:py-2 bg-gradient-to-r from-cyan-500 to-teal-500 font-medium rounded-md text-white dark:text-black text-lg"
              >Resume</a
            >
          </li>
        </ul>
      </nav>
      <div class="text-center p-10">
        <h2 class="text-5xl py-2 text-teal-500 font-medium md:text-6xl md:py-4">
          Nget Virak
        </h2>
        <h3 class="text-2xl py-2 dark:text-zinc-100 md:text-3xl">
          Full Stack Developer
        </h3>
        <p
          class="text-md leading-8 py-5 text-gray-800 dark:text-zinc-100/80 md:text-lg max-w-xl mx-auto"
        >
          Passionate full-stack web developer with a focus on the SvelteKit
          framework and creating projects. Skilled, detail-oriented, and
          dedicated to delivering high-quality results.
        </p>
        <div class="text-5xl flex justify-center gap-16 py-3 text-gray-600">
          <a href="#"
            ><svg width="1em" height="1em" viewBox="0 0 20 20"
              ><path
                fill="currentColor"
                d="M10 2.3C.172 2.3 0 3.174 0 10s.172 7.7 10 7.7s10-.874 10-7.7s-.172-7.7-10-7.7zm3.205 8.034l-4.49 2.096c-.393.182-.715-.022-.715-.456V8.026c0-.433.322-.638.715-.456l4.49 2.096c.393.184.393.484 0 .668z"
              /></svg
            ></a
          >
          <a href="https://www.facebook.com/master.yii.zz" target="_blank"
            ><svg width="1em" height="1em" viewBox="0 0 20 20"
              ><path
                fill="currentColor"
                d="M17 1H3c-1.1 0-2 .9-2 2v14c0 1.101.9 2 2 2h7v-7H8V9.525h2v-2.05c0-2.164 1.212-3.684 3.766-3.684l1.803.002v2.605h-1.197c-.994 0-1.372.746-1.372 1.438v1.69h2.568L15 12h-2v7h4c1.1 0 2-.899 2-2V3c0-1.1-.9-2-2-2z"
              /></svg
            ></a
          >
          <a href="#"
            ><svg width="1em" height="1em" viewBox="0 0 20 20"
              ><path
                fill="currentColor"
                d="M17.316 6.246c.008.162.011.326.011.488c0 4.99-3.797 10.742-10.74 10.742c-2.133 0-4.116-.625-5.787-1.697a7.577 7.577 0 0 0 5.588-1.562a3.779 3.779 0 0 1-3.526-2.621a3.858 3.858 0 0 0 1.705-.065a3.779 3.779 0 0 1-3.028-3.703v-.047a3.766 3.766 0 0 0 1.71.473a3.775 3.775 0 0 1-1.168-5.041a10.716 10.716 0 0 0 7.781 3.945a3.813 3.813 0 0 1-.097-.861a3.773 3.773 0 0 1 3.774-3.773a3.77 3.77 0 0 1 2.756 1.191a7.602 7.602 0 0 0 2.397-.916a3.789 3.789 0 0 1-1.66 2.088a7.55 7.55 0 0 0 2.168-.594a7.623 7.623 0 0 1-1.884 1.953z"
              /></svg
            ></a
          >
        </div>
        <div class="flex justify-center items-center mb-5">
          <img
            class="w-64 h-64 mt-8 rounded-full sm:rounded-lg"
            src="/images/snag.jpg"
            alt="me"
          />
        </div>
      </div>
      <section>
        <div class="dark:text-white">
          <h3 class="text-3xl py-2 ">About Me</h3>
          <div class="flex flex-col gap-5">
            <p>
              Hi, my name is Virak and I'm a 24-year-old full-stack web
              developer with a passion for the SvelteKit framework. I have a
              strong background in building and deploying modern web
              applications and I'm always looking for new challenges to tackle.
            </p>
            <p>
              Aside from my technical skills, I'm also a big gaming enthusiast
              and I enjoy creating my own projects in my free time. I believe
              that this combination of technical expertise and creative drive
              makes me an ideal candidate for any web development project.
            </p>
            <p>
              Whether it's developing a new website from scratch or optimizing
              an existing one, I bring a wealth of experience and expertise to
              the table. I'm highly organized and detail-oriented, which allows
              me to deliver high-quality results on time and on budget.
            </p>
            <p>
              If you're looking for a talented full-stack web developer who is
              dedicated to producing top-notch work and who is always up for a
              challenge, then look no further than Virak. With my skills,
              passion, and experience, I'm confident that I can help you achieve
              your web development goals and bring your ideas to life.
            </p>
          </div>
        </div>
        <div>
          <div />
        </div>
      </section>

      <section>
        <footer class="text-white py-8">
          <div class="container mx-auto">
            <p class="text-center text-sm">&copy; 2023 Virak's Portfolio. All rights reserved.</p>
            <div class="flex justify-center mt-4">
              <a href="#" class="text-gray-500 hover:text-white mx-2">
                <IconBrandFacebook/>
              </a>
              <a href="#" class="text-gray-500 hover:text-white mx-2">
                <i class="fab fa-linkedin fa-2x"></i>
              </a>
              <a href="#" class="text-gray-500 hover:text-white mx-2">
                <IconBrandGithub />
              </a>
            </div>
          </div>
        </footer>
        
      </section>
    </div>
  </div>
</div>

<style>
  .ani-btn {
    --border-radius: 15px;
    --border-width: 4px;
    appearance: none;
    position: relative;
    border: 0;
    font-family: "Roboto", Arial, "Segoe UI", sans-serif;
    z-index: 2;
  }

  .ani-btn::after {
    --m-i: linear-gradient(#000, #000);
    --m-o: content-box, padding-box;
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding: var(--border-width);
    border-radius: var(--border-radius);
    background-image: conic-gradient(
      #488cfb,
      #29dbbc,
      #ddf505,
      #ff9f0e,
      #e440bb,
      #655adc,
      #488cfb
    );
    -webkit-mask-image: var(--m-i), var(--m-i);
    mask-image: var(--m-i), var(--m-i);
    -webkit-mask-origin: var(--m-o);
    mask-origin: var(--m-o);
    -webkit-mask-clip: var(--m-o);
    mask-composite: exclude;
    -webkit-mask-composite: destination-out;
    filter: hue-rotate(0);
    animation: rotate-hue linear 500ms infinite;
    animation-play-state: paused;
  }

  .ani-btn:hover::after {
    animation-play-state: running;
  }

  @keyframes rotate-hue {
    to {
      filter: hue-rotate(1turn);
    }
  }

  .ani-btn:active {
    --border-width: 5px;
  }
</style>
