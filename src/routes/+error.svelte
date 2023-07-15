<script>
  import { page } from "$app/stores";
</script>

<div class="min-h-screen grid place-content-center">
  <center class="-mt-16"
    >
    <img src="images/error.gif" class="w-[600px] p-5" alt="">
    <h2 class="text-5xl font-khmer-noto">បាយដំណើប</h2>
    <h1 class="text-9xl text-red-500">
      {$page.status}: {$page.error.message}
    </h1>
  </center>
</div>
