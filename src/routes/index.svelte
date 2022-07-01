<script>
    // @ts-nocheck

    import { dropStore } from "$lib/stores/decoderStore";
    import Button from "$lib/components/Button.svelte";
    import Results from "$lib/components/Results.svelte";
    export let name = "";
    export let telegram = "";
    export let twitter = "";
    export let facebook = "";
    export let truthsocial = "";

    export /**
     * @type {any}
     */
    let decode;
    export /**
     * @type {any}
     */
    let lookup;
    export /**
     * @type {any}
     */
    let searchTerm = "";
    export /**
     * @type {boolean}
     */
    let isDecode;
    export /**
     * @type {boolean}
     */
    let isLookup;
    export /**
     * @type {boolean}
     */
    let isSearch;
    export /**
     * @type {boolean}
     */
    let isDecodeBtn;
    export /**
     * @type {boolean}
     */
    let isLookupBtn;
    export /**
     * @type {boolean}
     */
    let isSearchBtn;
    export /**
     * @type {boolean}
     */
    let isDropImageVisible = true;
    export /**
     * @type {boolean}
     */
    let isDropCopied;
    export /**
     * @type {boolean}
     */
    let isSettings;
    export /**
     * @type {{ focus: () => void; }}
     */
    let decodeRef;

    let dropDateFormated = (data) => {
        let today = new Date();
        const date = new Date(
            data.year,
            data.month - 1,
            data.day,
            data.hour,
            data.minute,
            data.seconds
        );
        return date.toLocaleString("en-us", {});
    };
    let timeSince = (data) => {
        let today = new Date();
        const date = new Date(
            data.year,
            data.month - 1,
            data.day,
            data.hour,
            data.minute,
            data.seconds
        );
        let diff = today.getTime() - date.getTime();
        let msInDay = 1000 * 3600 * 24;
        let inDay = diff / msInDay;
        let years = Math.floor(inDay / 365);
        let months = Math.floor((inDay / 365 - years) * 12);
        let days = Math.floor((((inDay / 365 - years) * 12) / 365) * inDay);
        return `${years}y, ${months}m, ${days}d ago`;
    };

    export const move = (type) => {
        lookup;
        if (type === "plus") {
            lookup++;
        }
        if (type === "minus") {
            lookup--;
        }
    };

    const simple = [
        { letter: "a", numValue: 1, text: "one" },
        { letter: "b", numValue: 2, text: "two" },
        { letter: "c", numValue: 3, text: "three" },
        { letter: "d", numValue: 4, text: "four" },
        { letter: "e", numValue: 5, text: "five" },
        { letter: "f", numValue: 6, text: "six" },
        { letter: "g", numValue: 7, text: "seven" },
        { letter: "h", numValue: 8, text: "eight" },
        { letter: "i", numValue: 9, text: "nine" },
        { letter: "j", numValue: 10, text: "ten" },
        { letter: "k", numValue: 11, text: "eleven" },
        { letter: "l", numValue: 12, text: "twelve" },
        { letter: "m", numValue: 13, text: "thirteen" },
        { letter: "n", numValue: 14, text: "fourteen" },
        { letter: "o", numValue: 15, text: "fifteen" },
        { letter: "p", numValue: 16, text: "sixteen" },
        { letter: "q", numValue: 17, text: "seventeen" },
        { letter: "r", numValue: 18, text: "eighteen" },
        { letter: "s", numValue: 19, text: "nineteen" },
        { letter: "t", numValue: 20, text: "twenty" },
        { letter: "u", numValue: 21, text: "twenty one" },
        { letter: "v", numValue: 22, text: "twenty two" },
        { letter: "w", numValue: 23, text: "twenty three" },
        { letter: "x", numValue: 24, text: "twenty four" },
        { letter: "y", numValue: 25, text: "twenty five" },
        { letter: "z", numValue: 26, text: "twenty six" },
    ];

    let formatCompactPhrase = (/** @type {string} */ phrase) => {
        if (phrase || "") {
            let lowercase = phrase.toLowerCase();
            let term = lowercase.replace(/\s/g, "");
            var letters = term.split("");
            return letters;
        }
    };

    let findLetterValue = (
        /** @type {string} */ phraseLetter,
        /** @type {string | any[]} */ gematriaType
    ) => {
        for (let i = 0; i < gematriaType.length; i++) {
            if (phraseLetter === gematriaType[i].letter) {
                return gematriaType[i].numValue;
            }
        }
    };

    let findLetterText = (
        /** @type {string} */ phraseLetter,
        /** @type {string | any[]} */ gematriaType
    ) => {
        for (let i = 0; i < gematriaType.length; i++) {
            if (phraseLetter === gematriaType[i].letter) {
                return gematriaType[i].text;
            }
        }
    };

    // Returns the One Step Gematria Value
    let findOneStep = (
        /** @type {string} */ phrase,
        /** @type {string | any[]} */ gematriaType
    ) => {
        if (phrase || "") {
            const letters = formatCompactPhrase(phrase);
            let phraseValue = 0;
            for (let i = 0; i < letters.length; i++) {
                let letterValue = findLetterValue(letters[i], gematriaType);
                phraseValue = phraseValue + letterValue;
            }

            return phraseValue;
        }
    };

    // Returns the One Step Gematria Value
    const findTwoStep = (
        /** @type {string} */ phrase,
        /** @type {string | any[]} */ gematriaType
    ) => {
        if (phrase || "") {
            const letters = formatCompactPhrase(phrase);
            const letterTextString = [];

            for (let i = 0; i < letters.length; i++) {
                let letterString = findLetterText(letters[i], gematriaType);
                letterTextString.push(letterString);
            }

            const letterString = letterTextString.join("");

            const letterStringValue = findOneStep(letterString, gematriaType);

            return letterStringValue;
        }
    };

    const focusDecode = () => {
        decodeRef.focus();
    };

    let setToDecode = () => {
        isDecode = true;
        isDecodeBtn = true;
        isLookup = false;
        isLookupBtn = false;
        isSearch = false;
        isSearchBtn = false;
        isSettings = false;
    };
    let setToLookup = () => {
        isLookup = true;
        isLookupBtn = true;
        isDecode = false;
        isDecodeBtn = false;
        isSearch = false;
        isSearchBtn = false;
        isSettings = false;
    };
    let setToSearch = () => {
        isSearch = true;
        isSearchBtn = true;
        isDecode = false;
        isDecodeBtn = false;
        isLookup = false;
        isLookupBtn = false;
        isSettings = false;
    };
    let saveSettings = () => {
        isSettings = false;
        isDecode = false;
        isDecodeBtn = false;
        isLookup = false;
        isLookupBtn = false;
        isSearch = false;
        isSearchBtn = false;
    };
    let setSettings = () => {
        if (isSettings) {
            isSettings = false;
        } else {
            isSettings = true;
        }
    };
    let setToCopied = () => {
        isDropCopied = true;
        setTimeout(() => {
            isDropCopied = false;
        }, 2000);
    };

    let openSettingsForm = () => {
        if (isSettings) {
            isSettings = false;
            isDecode = false;
            isLookup = false;
            isSearch = false;
        } else {
            isSettings = true;
            isDecode = false;
            isLookup = false;
            isSearch = false;
        }
    };

    $: oneStepValue = findOneStep(decode, simple);
    $: twoStepValue = findTwoStep(decode, simple);

    $: decodeChars = decode > 0 ? decode.length : 0;
    $: lookupChars = lookup > 0 ? lookup.length : 0;
    $: searchChars = searchTerm > 0 ? searchTerm.length : 0;

    export /**
     * @type {any}
     */
    let drops;

    export let buttonSize = 12;

    // $: filtered = drops.filter((item) => item.message.includes(searchTerm));
</script>

<div class="navbar flex flex-col pb-6 overflow-clip">
    <!-- Heading -->
    <div class="heading mx-4">
        <!-- <span class=""><ShareCard /></span> -->
        <span class="title">DeCoder-Pro</span>
        <span class="version">v 0.0.1</span>
    </div>
    <!-- All Buttons -->
    <div class="buttons">
        <!-- Decode Button -->
        <Button
            boundTo={isDecode}
            on:click={() => {
                setToDecode();
            }}
            btnName="decode-btn"
            btnActiveName="decode-btn-active"
            btnSize={buttonSize}
        />
        <!-- Lookup Decode Button -->
        <Button
            boundTo={isLookup}
            on:click={() => {
                setToLookup();
            }}
            btnName="lookup-btn"
            btnActiveName="lookup-btn-active"
            btnSize={buttonSize}
        />
        <!-- Search Decode Button -->
        <Button
            boundTo={isSearch}
            btnName="search-btn"
            btnActiveName="search-btn-active"
            btnSize={buttonSize}
        />
        <!-- <Button
            boundTo={isSearch}
            on:click={() => {
                setToSearch();
            }}
            btnName="search-btn"
            btnActiveName="search-btn-active"
            btnSize={buttonSize}
        /> -->
        <!-- Drop Image Visibility Toggle -->
        <Button
            boundTo={!isDropImageVisible}
            on:click={() => (isDropImageVisible = !isDropImageVisible)}
            btnName="eye-btn"
            btnActiveName="eye-btn-active"
            btnSize={buttonSize}
        />
        <!-- Copy Drop Screen Toggle -->
        <Button
            boundTo={isDropCopied}
            on:click={() => setToCopied()}
            btnName="copy-btn"
            btnActiveName="copy-btn-active"
            btnSize={buttonSize}
        />

        <!-- Plus Toggle -->
        <Button
            on:click={() => move("plus")}
            btnName="plus-btn"
            btnActiveName="plus-btn-active"
            btnSize={buttonSize}
        />

        <!-- Minus Toggle -->
        <Button
            on:click={() => move("minus")}
            btnName="minus-btn"
            btnActiveName="minus-btn-active"
            btnSize={buttonSize}
        />

        <!-- Settings Toggle -->
        <Button
            boundTo={isSettings}
            btnName="settings-btn"
            btnActiveName="settings-btn-active"
            btnSize={buttonSize}
        />
        <!-- <Button
            boundTo={isSettings}
            on:click={() => openSettingsForm()}
            btnName="settings-btn"
            btnActiveName="settings-btn-active"
            btnSize={buttonSize}
        /> -->
    </div>

    <div class="inputs mx-4">
        {#if isDecode}
            <input
                bind:this={decodeRef}
                bind:value={decode}
                type="text"
                placeholder="Enter text to decode..."
                class="input input-ghost min-w-full bg-dark-background border-slate-700 border-2 "
            />
        {/if}
        {#if isLookup}
            <input
                bind:value={lookup}
                type="number"
                placeholder="Enter number to lookup..."
                class="input input-ghost min-w-full bg-dark-background border-slate-700 border-2"
            />
        {/if}
        {#if isSearch}
            <input
                bind:value={searchTerm}
                type="text"
                placeholder="Enter text to search..."
                class="input input-ghost min-w-full bg-dark-background border-slate-700 border-2"
            />
        {/if}
    </div>
    {#if isSettings}
        <div class="">
            <form class="flex flex-col gap-1.5 max-w-md mx-auto">
                <input
                    id="name"
                    type="text"
                    placeholder="Enter your Name..."
                    class="input input-ghost bg-dark-background border-slate-700 border-2"
                />
                <input
                    id="telegram"
                    type="text"
                    placeholder="Enter your Telegram username..."
                    class="input input-ghost bg-dark-background border-slate-700 border-2"
                />
                <input
                    id="twitter"
                    type="text"
                    placeholder="Enter your Twitter username..."
                    class="input input-ghost bg-dark-background border-slate-700 border-2"
                />
                <input
                    id="facebook"
                    type="text"
                    placeholder="Enter your Facebook username..."
                    class="input input-ghost bg-dark-background border-slate-700 border-2"
                />
                <input
                    id="truthsocial"
                    type="text"
                    placeholder="Enter your Truth Social username..."
                    class="input input-ghost bg-dark-background border-slate-700 border-2"
                />
                <button
                    type="submit"
                    class="button"
                    class:isDecode
                    on:click={() => saveSettings()}>Save</button
                >
            </form>
        </div>
    {/if}
</div>

<div class="flex flex-row place-content-center text-white my-6 overflow-clip">
    {#each drops as drop}
        <div class:hidden={!isDecode}>
            {#if isDecode && oneStepValue === drop.dropnumber}
                <Results
                    {telegram}
                    title={decode}
                    {drop}
                    {dropDateFormated}
                    {timeSince}
                    {isDropImageVisible}
                    dateDecoded={new Date()}
                />
            {/if}
        </div>
        <div class:hidden={!isLookup}>
            {#if isLookup && lookup === drop.dropnumber}
                <Results
                    {telegram}
                    title={lookup}
                    {drop}
                    {dropDateFormated}
                    {timeSince}
                    {isDropImageVisible}
                    dateDecoded={dropDateFormated(new Date().getTime())}
                />
            {/if}
        </div>
        <div class:hidden={!isSearch} class="">
            {#if isSearch && searchTerm == drop.dropnumber}
                <Results
                    {telegram}
                    title={searchTerm}
                    {drop}
                    {dropDateFormated}
                    {timeSince}
                    {isDropImageVisible}
                    dateDecoded={dropDateFormated(new Date().getTime())}
                />
            {/if}
        </div>
    {/each}
</div>

<style>
    .navbar {
        @apply py-2
        w-screen
        h-auto 
        bg-dark-background
        text-dark-text
        mx-auto;

        z-index: 100;
        margin-bottom: 5px;
    }

    .heading {
        @apply flex place-content-between px-3 xl:px-24  lg:px-24 text-2xl mb-2;
    }

    .buttons {
        @apply flex flex-row mx-7 gap-2;
    }

    .inputs {
        @apply px-2 py-1 flex place-content-center;
    }

    .title {
        @apply float-left font-bold text-orange-300 max-w-2xl;
    }

    .version {
        @apply float-right text-xs text-orange-300 max-w-2xl;
    }
</style>
