<script>
    // @ts-nocheck

    import ShareCard from "./ShareCard.svelte";

    export /**
     * @type {{ dropnumber: any; message: any; }}
     */
    let drop;
    let isDropImageVisible;
    export /**
     * @type {any}
     */
    let title;
</script>

<div class="flex flex-col gap-6 max-w-sm mx-6 overflow-hidden">
    {#if !isDropImageVisible || !drop.message}
        <img
            src="/qdrop-images/{drop.dropnumber}.png"
            alt=""
            class="text-center max-w-md"
        />
    {/if}
</div>
