<script>
    export /**
     * @type {boolean}
     */
    let isDecode;
    export /**
     * @type {boolean}
     */
    let isDropLookup;
    export /**
     * @type {boolean}
     */
    let isDropSearch;
    export /**
     * @type {boolean}
     */
    let isDropImageVisible;
    export /**
     * @type {boolean}
     */
    let isDropCopied;
    export /**
     * @type {boolean}
     */
    let isTelegramSettings;

    $: setToDecode = () => {
        isDecode = true;
        isDropLookup = false;
        isDropSearch = false;
        isTelegramSettings = false;
    };
    $: setToLookup = () => {
        isDecode = false;
        isDropLookup = true;
        isDropSearch = false;
        isTelegramSettings = false;
    };
    $: setToSearch = () => {
        isDecode = false;
        isDropLookup = false;
        isDropSearch = true;
        isTelegramSettings = false;
    };
    $: saveTelegramUsername = () => {
        isDecode = false;
        isDropLookup = false;
        isDropSearch = false;
        isTelegramSettings = false;
    };
    $: setTelegramSettings = () => {
        if (isTelegramSettings) {
            isTelegramSettings = false;
            isDecode = false;
            isDropLookup = false;
            isDropSearch = false;
        } else {
            isTelegramSettings = true;
            isDecode = false;
            isDropLookup = false;
            isDropSearch = false;
        }
    };
    $: setToCopied = () => {
        isDropCopied = true;
        setTimeout(() => {
            isDropCopied = false;
        }, 1000);
    };
</script>

<div class="navbar flex flex-col">
    <!-- Heading -->
    <div class="heading">
        <span class="title">DeCoder-Pro</span>
        <span class="version">v 0.0.1</span>
    </div>
    <!-- All Buttons -->
    <div class="buttons">
        <!-- Decode Button -->
        <button class="button" class:isDecode on:click={() => setToDecode()}
            >Decode</button
        >
        <!-- Lookup Decode Button -->
        <button class="button" class:isDropLookup on:click={() => setToLookup()}
            >Lookup</button
        >
        <!-- Search Decode Button -->
        <button class="button" class:isDropSearch on:click={() => setToSearch()}
            >Search</button
        >
        <!-- Drop Image Visibility Toggle -->
        <button
            class="button"
            class:isDropImageVisible
            on:click={() => (isDropImageVisible = !isDropImageVisible)}
        >
            {#if isDropImageVisible}
                <img src="/feather/eye-white.svg" alt="" class="" />
            {/if}
            {#if !isDropImageVisible}
                <img src="/feather/eye-off-white.svg" alt="" class="" />
            {/if}
        </button>
        <!-- Copy Drop Screen Toggle -->
        <button
            class="button"
            class:isDropCopied
            on:click={() => setToCopied()}
        >
            {#if isDropCopied}
                <img src="/feather/copy-white.svg" alt="" class="" />
            {/if}
            {#if !isDropCopied}
                <img src="/feather/copy-white.svg" alt="" class="" />
            {/if}
        </button>
        <!-- Telegram Settings Toggle -->
        <button
            class="button"
            class:isTelegramSettings
            on:click={() => setTelegramSettings()}
        >
            {#if isTelegramSettings}
                <img
                    src="telegram-icon-black.png"
                    alt=""
                    class="w-7 bg-transparent"
                />
            {/if}
            {#if !isTelegramSettings}
                <img
                    src="telegram-icon-blue.png"
                    alt=""
                    class="w-7 bg-transparent"
                />
            {/if}
        </button>
    </div>

    <div class="inputs">
        {#if isDecode}
            <input
                type="text"
                placeholder="Enter text to decode..."
                class="input input-ghost min-w-full bg-dark-background border-slate-700 border-2 "
            />
        {/if}
        {#if isDropLookup}
            <input
                type="text"
                placeholder="Enter number to lookup..."
                class="input input-ghost min-w-full bg-dark-background border-slate-700 border-2"
            />
        {/if}
        {#if isDropSearch}
            <input
                type="text"
                placeholder="Enter text to search..."
                class="input input-ghost min-w-full bg-dark-background border-slate-700 border-2"
            />
        {/if}
        {#if isTelegramSettings}
            <div class="flex flex-1 min-w-max place-content-evenly">
                <input
                    type="text"
                    placeholder="Enter your Telegram username..."
                    class="input input-ghost w-96 bg-dark-background border-slate-700 border-2"
                />
                <button
                    class="button"
                    class:isDecode
                    on:click={() => saveTelegramUsername()}>Save</button
                >
            </div>
        {/if}
    </div>
</div>
<slot />

<style>
    .navbar {
        @apply py-2
        absolute 
        top-0 
        left-0 
        w-screen
        h-auto 
        bg-dark-background
        text-dark-text
        mx-auto;
    }

    .heading {
        @apply flex place-content-between px-3 xl:px-24  lg:px-24 text-2xl mb-2;
    }

    .buttons {
        @apply flex flex-row gap-1 px-2 h-12 xl:px-24  lg:px-24;
        lg: px-24;
    }

    .inputs {
        @apply px-2 py-1 flex place-content-center xl:px-24  lg:px-24;
        lg: px-24;
    }

    .button {
        @apply p-2 w-auto bg-dark-background border-2 border-gray-700
        hover:bg-gray-700;
    }

    .title {
        @apply float-left font-bold text-orange-300 max-w-2xl;
    }

    .version {
        @apply float-right text-xs text-orange-300 max-w-2xl;
    }

    .isDecode,
    .isDropLookup,
    .isDropSearch {
        @apply bg-slate-700 text-orange-300 font-bold border-2 border-slate-400;
    }

    .isDropImageVisible,
    .isTelegramSettings {
        @apply bg-green-700  border-2 border-slate-400;
    }

    .isDropCopied {
        @apply bg-green-500;
    }
</style>
