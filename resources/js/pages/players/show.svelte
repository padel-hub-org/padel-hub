<script lang="ts">
    import { Form } from "@inertiajs/svelte";
    import { update } from "@/routes/players";
    import { Button } from "$lib/components/ui/button/index.ts";
    import type { Player } from "@/types/Player";

    interface Props {
        player: Player;
    }

    let { player }: Props = $props();
</script>

<svelte:head>
    <title>{player.name} | Padel Hub</title>
</svelte:head>

{#if player.id}
    <Form action={update(player)}>
        <input value={player.name} type="text" name="name" />
        <Button type="submit">Update Player</Button>
    </Form>
{/if}
