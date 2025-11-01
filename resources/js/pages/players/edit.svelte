<script lang="ts">
    import { Form } from "@inertiajs/svelte";
    import { update } from "@/actions/App/Http/Controllers/PlayerController";
    import { Button } from "$lib/components/ui/button/index.ts";
    import type { Player } from "@/types/Player";

    interface Props {
        player: Player;
    }

    let { player }: Props = $props();
</script>

{#if player.id}
    <Form action={update(player)}>
        <input value={player.name} type="text" name="name" />
        <Button type="submit">Update Player</Button>
    </Form>
{/if}
