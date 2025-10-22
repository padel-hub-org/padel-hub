<script lang="ts">
    import { Form } from "@inertiajs/svelte";
    import { update } from "@/actions/App/Http/Controllers/PlayerController";

    interface Props {
            player: App.Models.Player;
        }

    let {player}: Props = $props();

</script>

<Form action={update(player)}>
    <input value={player.name} type="text" name="name" />
    <button type="submit">Update Player</button>
</Form>
