<script context="module">
</script>

<script>
    // @ts-nocheck
    import { left_menu, right_menu } from "../utils/navbar";
    import { goto } from "$app/navigation";
    import { user, isAuthenticated } from "$lib/auth/authStore";

    export let leftIsClosed = true;
    export let rightIsClosed = true;

    const closeDrawers = () => {
        leftIsClosed = true;
        rightIsClosed = true;
    };
</script>

<div
    class="flex place-items-center bg-site-color px-4 h-16 sticky shadow z-20 text-dark-text"
>
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
        <a
            href="/"
            class="btn btn-ghost normal-case text-xl mx-4 text-dark-text"
        >
            <span class="ml-2 font-bold">I</span>
            <span class="ml-2 font-extrabold">AM</span>
            <span class="font-bold">BIG2TINY</span>
        </a>
    </div>

    <slot />
    {#if $user}
        <div class="dropdown dropdown-end">
            <label for="" tabindex="0" class="">
                <div class="w-10 rounded-full mr-2">
                    <img
                        src={$user.picture}
                        alt="profile"
                        class="rounded-full"
                    />
                </div>
            </label>
            <!-- <ul
				tabindex="0"
				class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-slate-900"
			>
				<li class="text-center underline underline-offset-2 uppercase">
					{$user.nickname}
				</li>
				<li>
					<a href="/" class="justify-between">
						Profile
						<span class="badge">New</span>
					</a>
				</li>
				<li><a href="/">Settings</a></li>
			</ul> -->
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
    class="fixed left-0 top-0 bg-gray-300 w-screen h-screen opacity-60 z-10"
/>
<div
    class:hidden={leftIsClosed}
    class="fixed left-0 my-0 w-60 h-screen bg-site-color  shadow mt-0.5 z-10 text-dark-text"
>
    <div class="text-center font-bold pt-4">Menu</div>
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
            </li>{/each}
    </ul>
</div>

<div
    on:click={closeDrawers}
    class:hidden={rightIsClosed}
    class="fixed right-0 top-0 bg-gray-300 w-screen h-screen opacity-60 -z-10"
/>

<div
    class:hidden={rightIsClosed}
    class="fixed right-0 my-0 w-60 h-screen  bg-site-color shadow mt-0.5 -z-0 text-dark-text"
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

<style>
    .big2tiny-logo {
        @apply w-8 fill-current fill-dark-background;
    }
</style>
