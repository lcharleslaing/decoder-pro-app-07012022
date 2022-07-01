<script>
    import "../app.css";
    import NavbarAuth0 from "../lib/components/NavbarAuth0.svelte";
    import SveltekitAuth0 from "../lib/components/SveltekitAuth0.svelte";
    import { user } from "../lib/auth/authStore";
</script>

<NavbarAuth0>
    <SveltekitAuth0
        hideBtnIcon={false}
        btn_login_text=""
        btn_logout_text=""
        imgSrcLogin="/feather/log-in.svg"
        imgSrcLogout="/feather/log-out.svg"
        iconSize="w-8"
        _class="m-2 btn btn-ghost text-slate-900"
    />
</NavbarAuth0>

<!-- <pre>{JSON.stringify($user, null, 2)}</pre> -->

<slot />
