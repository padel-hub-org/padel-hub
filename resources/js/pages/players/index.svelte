<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.ts";
    import {
        create,
        destroy,
        edit,
    } from "@/actions/App/Http/Controllers/PlayerController";
    import type { Player } from "@/types/Player";
    interface Props {
        players: Player[];
    }

    let { players }: Props = $props();
</script>

<div class="page">
    <Button class="button" variant={"outline"} href={create().url}
        >Create player</Button
    >
    <ul>
        {#each players as player}
            <li>
                <Button href={edit(player)}>{player.name}</Button>
                <Button class="cursor-pointer" href={destroy(player)}
                    >Remove player</Button
                >
            </li>
        {/each}
    </ul>
</div>

<style>
    .page :global(.button) {
        margin: 1rem;
    }

    li {
        margin: 1rem;
        display: flex;
        gap: 1rem;
    }
</style>
