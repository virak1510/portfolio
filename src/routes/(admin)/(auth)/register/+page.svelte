<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="text-center lg:text-left">
      <h1 class="text-5xl font-bold whitespace-nowrap">Login now!</h1>
      <p class="py-6">hello kon papa</p>
    </div>
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
        <form action="?/register" method="post">
            <div class="form-control">
              <label class="label">
                <span class="label-text">username</span>
              </label>
              <input
                type="text"
                placeholder="username"
                class="input input-bordered"
                name="username"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                class="input input-bordered"
                name="password"
              />
              <label class="label">
                <span class="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                class="input input-bordered"
                name="passwordConfirm"
              />
              <label class="label flex justify-between mt-2">
                <a href="/login" class="label-text-alt link link-hover">Login</a>
              </label>
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-primary">Sign up</button>
            </div>      
        </form>
      </div>
    </div>
  </div>
</div>
