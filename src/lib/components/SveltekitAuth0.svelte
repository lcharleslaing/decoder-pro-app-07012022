<!-- --------------------------------------------- -->
<script context="module">
</script>

<script>
    import auth from "../auth/auth0_service";
    import { user, isAuthenticated } from "../auth/authStore";
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";

    export /**
     * @type {any}
     */
    let hideBtnIcon;

    export /**
     * @type {any}
     */
    let _class;
    export /**
     * @type {any}
     */
    let btn_login_text;
    export /**
     * @type {any}
     */
    let btn_logout_text;
    export /**
     * @type {string | null | undefined}
     */
    let imgSrcLogin;
    export /**
     * @type {string | null | undefined}
     */
    let imgSrcLogout;
    export /**
     * @type {any}
     */
    let iconSize;

    /**
     * @type {import("@auth0/auth0-spa-js").Auth0Client}
     */
    let auth0Client;

    onMount(async () => {
        auth0Client = await auth.createClient();

        isAuthenticated.set(await auth0Client.isAuthenticated());
        // @ts-ignore
        user.set(await auth0Client.getUser());
    });

    function login() {
        // @ts-ignore
        auth.loginWithPopup(auth0Client);
        goto(import.meta.env.VITE_LOGIN_REDIRECT_URL);
    }

    function logout() {
        auth.logout(auth0Client);
        goto(import.meta.env.VITE_LOGOUT_REDIRECT_URL);
    }
</script>

<!-- --------------------------------------------- -->
<!-- -----Auth0 Login/Logout Button Component----- -->

<!-- ICON & TEXT BUTTONS -->
<div class="">
    {#if $isAuthenticated}
        <button on:click={logout} class="btn {_class} flex place-items-center">
            <span> {btn_logout_text}</span>
            <span class="p-1" class:hidden={hideBtnIcon}
                ><img
                    src={imgSrcLogout}
                    alt="logout"
                    class="p-0.5 {iconSize} m-1 uppercase"
                /></span
            >
        </button>
    {/if}
    {#if !$isAuthenticated}
        <button on:click={login} class="btn {_class} flex place-items-center">
            <span> {btn_login_text}</span>
            <span class="p-1" class:hidden={hideBtnIcon}
                ><img
                    src={imgSrcLogin}
                    alt="login"
                    class="p-0.5 {iconSize} m-0.5 uppercase"
                /></span
            >
        </button>
    {/if}
</div>

<slot />

<!-- --------------------------------------------- -->
<style>
</style>
