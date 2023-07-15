<script>
  /** @type {import('./$types').PageData} */
  import Time from "svelte-time";
  import { enhance } from "$app/forms"
  import { onMount, onDestroy, afterUpdate } from "svelte";
  import { PUBLIC_POCKETBASE_URL } from "$env/static/public";
  import PocketBase from "pocketbase";
  export const pb = new PocketBase(PUBLIC_POCKETBASE_URL);
  export let data;
  let unsubscribe;
  // let {messages} = data;
  const screenScroll = (chat)=>{
    
    chat.scrollBy(0,chat.scrollHeight);
  }
  onMount(async () => {
    // let chat = document.querySelector('.chater')
    // screenScroll(chat);
    unsubscribe = await pb.collection("message").subscribe("*", async function ({action,record}) {
      const user = await pb.collection("users").getOne(record.user)
        record.expand = {user}
        data.messages = [...data.messages, record]
    });
  });
  afterUpdate(()=>{
    let chat = document.querySelector('.chater')
    screenScroll(chat);
  })
  onDestroy(() => {
    unsubscribe?.();
  });
</script>

<div class="min-h-[calc(100vh-66px)] flex flex-col relative">
  <div class="h-[calc(100vh-170px)] w-full  overflow-y-auto chater">
    {#each data.messages as item }
      {#if data.user?.id == item.expand.user?.id}
        <div class="chat chat-end">
          <div class="chat-header">
            {item.expand.user.username}
            <Time class="text-xs opacity-50" relative timestamp={item.created} />
          </div>
          <div class="chat-bubble">{item.message}</div>
        </div>
      {:else}
        <div class="chat chat-start">
          <div class="chat-header">
            {item.expand.user.username}
            <Time class="text-xs opacity-50" relative timestamp={item.created} />
          </div>
          <div class="chat chat-bubble m-shadow text-gray-700">
            {item.message}
          </div>
        </div>
      {/if}
    {/each}
  </div>
  <div class=" p-4 bg-base-100 absolute bottom-0 left-0 right-0">
      <form action="/app/chat?/create" method="post" class="w-full flex p-2" use:enhance>
        <input
          type="text"
          placeholder="Say hello"
          name="message"
          class="input input-bordered w-full focus:outline-none morph-input border rounded-r-none"
        />
        <button class="btn px-8 m-shadow border-none rounded-l-none"
          >send</button
        >
      </form>
  </div>
</div>

<style>
  .morph-input {
    padding: 15px;
    box-shadow: 6px 6px 12px #ffffff, -6px -6px 12px #c5c5c5;
    font-size: medium;
    font-weight: bold;
  }

  .morph-input:focus {
    outline-color: white;
    place-content: "Enter your message!";
  }
  .m-shadow {
    box-shadow: 6px 6px 12px #ffffff, -6px -6px 12px #c5c5c5;
  }
</style>
