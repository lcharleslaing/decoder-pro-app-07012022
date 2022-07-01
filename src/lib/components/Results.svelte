<script>
    // @ts-nocheck

    import ShareCard from "./ShareCard.svelte";

    export /**
     * @type {{ dropnumber: any; message: any; }}
     */
    let drop;
    export /**
     * @type {(arg0: { dropnumber: any; message: any; }) => any}
     */
    let dropDateFormated;
    export /**
     * @type {(arg0: { dropnumber: any; message: any; }) => any}
     */
    let timeSince;
    export /**
     * @type {any}
     */
    let isDropImageVisible;
    export /**
     * @type {any}
     */
    let title;
    export /**
     * @type {any}
     */
    let dateDecoded;
    export /**
     * @type {any}
     */
    let telegram;
</script>

<div class="flex flex-col gap-6 max-w-sm mx-6 overflow-hidden">
    <div
        class="text-4xl text-center font-bold text-site-color bg-gold pb-2 rounded"
    >
        Drop {drop.dropnumber}
    </div>
    <div class="text-xl text-center font-normal">
        {dropDateFormated(drop)}
    </div>
    <div class="text-xl text-center font-thin italic">
        {timeSince(drop)}
    </div>
    <div class="text-lg text-justify whitespace-pre-wrap">
        {drop.message || ""}
    </div>
    {#if !isDropImageVisible || !drop.message}
        <img
            src="/qdrop-images/{drop.dropnumber}.png"
            alt=""
            class="text-center max-w-md"
        />
    {/if}
</div>
