<script context="module">
</script>

<script>
    // @ts-nocheck

    export let dropSearch = null;

    $: console.log(dropSearch);
</script>

<div class="m-2">
    <div class="text-center text-xl my-4 font-extrabold uppercase">
        Search Drops
    </div>
    <div class="divider" />

    <div class="text-center">
        <input
            bind:value={dropSearch}
            type="text"
            placeholder="Enter Q-Drop to View..."
            class="input input-bordered w-full max-w-xs"
        />
    </div>
    <div class="flex flex-wrap place-content-center gap-4 my-6">
        {#if dropSearch && dropSearch > 0 && dropSearch < 4954}
            <img
                src="/qdrop-images/{dropSearch}.png"
                alt="drop"
                class="max-w-xs"
            />
        {/if}
    </div>
</div>

<style>
    /* your styles go here */
</style>
