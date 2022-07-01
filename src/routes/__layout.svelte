<script>
    import "../app.css";
    import NavbarAuth0 from "$lib/components/NavbarAuth0.svelte";
    import SveltekitAuth0 from "$lib/components/SveltekitAuth0.svelte";
    import { user } from "$lib/auth/authStore";
</script>

<NavbarAuth0>
    <SveltekitAuth0
        hideBtnIcon={false}
        btn_login_text=""
        btn_logout_text=""
        imgSrcLogin="/feather/log-in-white.svg"
        imgSrcLogout="/feather/log-out-white.svg"
        iconSize="w-6"
        _class="btn btn-ghost text-slate-900"
    />
</NavbarAuth0>

<!-- <pre>{JSON.stringify($user, null, 2)}</pre> -->

<slot />
