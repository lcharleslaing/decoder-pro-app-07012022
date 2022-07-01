<script>
    import Button from "./Button.svelte";
    export let isMail = true;
</script>

<div class="footer">
    <p class=" text-gold text-2xl">IAMBIG2TINY</p>
    <p class="text-gold my-1 flex place-content-center gap-2">
        Open for Business! Email me <span
            on:click={() => (isMail = !isMail)}
            class="my-1 px-1 py-0.5 bg-gold rounded"
        >
            <img src="/feather/mail.svg" alt="mail" class=" w-4" />
        </span>
    </p>

    <div class:hidden={isMail} class="my-0.5 grid gap-2 text-center">
        <span>
            <a
                href="mailto:iambig2tiny#developer@telios.io"
                class="px-2 py-1 rounded bg-gold text-site-color font-bold"
                >Your Projects Email</a
            >
        </span>
        <span>
            <a
                href="mailto:iambig2tiny#issues@telios.io"
                class="px-2 py-1 rounded bg-gold text-site-color font-bold"
                >Issues Email</a
            >
        </span>
        <span>
            <a
                href="mailto:iambig2tiny#admin@telios.io"
                class="px-2 py-1 rounded bg-gold text-site-color font-bold"
                >Improvements Email</a
            >
        </span>
    </div>
    <p class="text-xs">
        Copy-Right/Copy-Claim/All-Rights-Reserved :Lee-Charles :Laing:
    </p>
</div>

<style>
    .footer {
        @apply flex
        flex-col
        py-1
        place-content-center
        place-items-center 
        fixed 
        bottom-0 
        left-0 
        w-screen 
        h-auto 
        bg-dark-background
        text-dark-text
        mx-auto;
    }
</style>
