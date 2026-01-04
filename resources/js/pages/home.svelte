<script lang="ts">
    import { redirectToGoogle } from "@/routes";

    import { Button } from "@/lib/components/ui/button";
    import { logout } from "@/routes";
    import type { User } from "@/types/User";

    interface Props {
        user?: User;
    }

    let { user }: Props = $props();
</script>

<svelte:head>
    <title>Padel Hub</title>
</svelte:head>

<div>
    <h1 class="mb-4">Welcome {user?.name ?? "Guest"}</h1>

    {#if user}
        <Button href="/players" viewTransition>Go to Players</Button>
        <Button href={logout()} viewTransition>Log out</Button>
    {:else}
        <Button href={redirectToGoogle()}>Log in with Google</Button>
    {/if}
</div>
