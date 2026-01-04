<script lang="ts">
    import { redirectToGoogle } from "@/routes";

    import { Button } from "@/lib/components/ui/button";
</script>

<svelte:head>
    <title>Log in | Padel Hub</title>
</svelte:head>

<div>
    <h1>Welcome to the Authentication Page</h1>

    <Button href={redirectToGoogle()}>Log in with Google</Button>
</div>
