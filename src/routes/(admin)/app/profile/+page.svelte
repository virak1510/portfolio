<script>
  /** @type {import('./$types').PageData} */
  export let data;
  // console.log("🚀 - data", data);
  const avatar = `http://api.legendaryrak.site/api/files/users/${data.user?.id}/${data.user?.avatar}`;
  let a =0;

  const showPreview = (event) => {
    const target = event.target;
    const files = target.files;
    if (files.length > 0) {
      const src = URL.createObjectURL(files[0]);
      const preview = document.getElementById("avatar-preview");
      preview.src = src;
    }
  };
</script>

<div class="card bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title justify-center text-xs">{data.user?.id}</h2>
    <img
      src={data.user?.avatar != ""
        ? avatar
        : "https://placeimg.com/192/192/people"}
      alt="profile"
      class="w-44 mx-auto"
      id="avatar-preview"
    />
    <form
      action="/app/profile?/update"
      method="post"
      enctype="multipart/form-data"
    >
      <div class="flex flex-col gap-2">
        <input
          class="file-input input-primary"
          type="file"
          name="avatar"
          id=""
          accept="image/*"
          value=""
          on:change={showPreview}
        />
        <input
          class="input input-primary"
          type="text"
          name="username"
          id=""
          placeholder="username"
          bind:value={data.user.username}
        />
        <input
          class="input input-primary"
          type="password"
          name="oldPassword"
          id=""
          placeholder="Old Password"
        />
        <input
          class="input input-primary"
          type="password"
          name="password"
          id=""
          placeholder="password"
        />
        <input
          class="input input-primary"
          type="password"
          name="passwordConfirm"
          id=""
          placeholder="confirm password"
        />
        <button type="submit" class="btn btn-primary">update</button>
      </div>
    </form>
  </div>
</div>
