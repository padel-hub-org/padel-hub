<script lang="ts">
    import { redirectToGoogle } from "@/actions/App/Http/Controllers/AuthController";

    import { Button } from "@/lib/components/ui/button";
    import { logout } from "@/routes";
    import type { User } from "@/types/User";
    import { router } from "@inertiajs/svelte";

    interface Props {
        user?: User;
    }

    let { user }: Props = $props();
</script>

<div>
    <h1>Hello {user?.name ?? "Guest"} from Svelte + Inertia!</h1>

    {#if user}
        <Button href="/players">Go to Players</Button>
        <Button onclick={() => router.post(logout())}>Log out</Button>
    {:else}
        <Button href={redirectToGoogle().url}>Log in with Google</Button>
    {/if}
</div>
