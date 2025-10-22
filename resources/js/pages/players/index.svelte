<script lang="ts">
    import { Form, Link } from "@inertiajs/svelte";
    import { create, destroy, edit } from "@/actions/App/Http/Controllers/PlayerController";
    interface Props {
        players: App.Models.Player[];
    }

    let { players }: Props = $props();
</script>

<div>
    <Link href={create()}>Create Player</Link>
    <ul>
        {#each players as player}
            <li>
                <Link href={edit(player)}>{player.name}</Link>
            </li>
            <Link href={destroy(player)} as="button">Remove Player</Link>
        {/each}
    </ul>
</div>
