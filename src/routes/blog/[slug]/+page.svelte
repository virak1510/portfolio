<script>
    /** @type {import('./$types').PageData} */
    export let data;
    import Test from '$lib/component/blog-component/Test.svelte'
    import WhatIsVue from '$lib/component/blog-component/What-is-vue.svelte'
    import VueCheatSheet from '$lib/component/blog-component/VueCheatSheet.svelte'
    const components = {
        'test': Test,
        'what-is-vue': WhatIsVue,
        'vue-cheat-sheet': VueCheatSheet
    }


</script>
<svelte:component this={components[data.slug]} />