<script context="module">
</script>

<script>
    // @ts-nocheck
    import { goto } from "$app/navigation";
    import { user, isAuthenticated } from "$lib/auth/authStore";
    export let leftIsClosed = true;
    export let rightIsClosed = true;

    const left_menu = [
        { name: "Home", url: "/" },
        { name: "About US", url: "/about" },
        { name: "Contact US", url: "/contact" },
        { name: "Support US", url: "/support" },
    ];

    const right_menu = [
        { name: "Something", url: "/" },
        { name: "Something Else", url: "/" },
    ];

    const closeDrawers = () => {
        leftIsClosed = true;
        rightIsClosed = true;
    };
</script>

<div class="navbar bg-base-100 sticky shadow">
    <div class="flex-none">
        <button
            on:click={() => {
                leftIsClosed = false;
                rightIsClosed = true;
            }}
            class="btn btn-square btn-ghost"
        >
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
        <a href="/" class="btn btn-ghost normal-case text-xl">
            <span class="">
                <img src="/big2tiny-logo.svg" alt="" class="w-12" />
            </span>
            <span class="mx-2 text-2xl">DeCoder-Pro</span>
        </a>
    </div>

    <slot />
    {#if $isAuthenticated}
        <div class="dropdown dropdown-end">
            <label for="" tabindex="0" class="btn btn-ghost btn-circle avatar">
                <div class="w-10 rounded-full">
                    <img src={$user.picture} alt="profile" />
                </div>
            </label>
            <ul
                tabindex="0"
                class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
                <li>
                    <a href="/" class="justify-between">
                        Profile
                        <span class="badge">New</span>
                    </a>
                </li>
                <li><a href="/">Settings</a></li>
            </ul>
        </div>
    {/if}
    <div class="flex-none">
        <button
            on:click={() => {
                rightIsClosed = false;
                leftIsClosed = true;
            }}
            class="btn btn-square btn-ghost"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-5 h-5 stroke-current"
                ><path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                /></svg
            >
        </button>
    </div>
</div>

<div
    on:click={closeDrawers}
    class:hidden={leftIsClosed}
    class="fixed left-0 top-0 bg-gray-300 w-screen h-screen opacity-60 -z-10"
/>
<div
    class:hidden={leftIsClosed}
    class="fixed my-0 w-60 h-screen bg-white shadow mt-0.5 -z-0"
>
    <div class="text-center font-bold pt-4">Left Menu</div>
    <ul class="ml-6">
        {#each left_menu as item}
            <li class="my-2">
                <a
                    on:click={() => {
                        goto(item.url);
                        closeDrawers();
                    }}
                    href={item.url}>{item.name}</a
                >
            </li>
        {/each}
    </ul>
</div>

<div
    on:click={closeDrawers}
    class:hidden={rightIsClosed}
    class="fixed left-0 top-0 bg-gray-300 w-screen h-screen opacity-60 -z-10"
/>

<div
    class:hidden={rightIsClosed}
    class="fixed right-0 my-0 w-60 h-screen bg-white shadow mt-0.5 -z-0"
>
    <div class="text-center font-bold pt-4">Right Menu</div>
    <ul class="ml-6">
        {#each right_menu as item}
            <li class="my-2">
                <a
                    on:click={() => {
                        goto(item.url);
                        closeDrawers();
                    }}
                    href={item.url}>{item.name}</a
                >
            </li>
        {/each}
    </ul>
</div>
