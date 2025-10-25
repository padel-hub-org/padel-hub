<script lang="ts">
    import { Form } from "@inertiajs/svelte";
    import { update } from "@/actions/App/Http/Controllers/PlayerController";
    import { Button } from "$lib/components/ui/button/index.ts";

    interface Props {
        player: App.Models.Player;
    }

    let { player }: Props = $props();
</script>

<Form action={update(player)}>
    <input value={player.name} type="text" name="name" />
    <Button type="submit">Update Player</Button>
</Form>
