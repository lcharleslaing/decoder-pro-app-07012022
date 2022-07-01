<script>
    export /**
     * @type {any}
     */
    let btnName;
    export /**
     * @type {any}
     */
    let btnActiveName;
    export /**
     * @type {any}
     */
    let boundTo;
    export /**
     * @type {any}
     */
    let btnSize;
</script>

<button on:click class="w-{btnSize} h-{btnSize} cursor-pointer">
    {#if boundTo}
        <img
            src="/menu-btns/{btnActiveName}.svg"
            alt=""
            class="w-{btnSize} h-{btnSize}"
        />
    {:else}
        <img
            src="/menu-btns/{btnName}.svg"
            alt=""
            class="w-{btnSize} h-{btnSize}"
        />
    {/if}
</button>

<style>
</style>
