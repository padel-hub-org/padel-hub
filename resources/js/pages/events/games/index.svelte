<script lang="ts" module>
    import App from "@/layouts/app.svelte";
    import EventLayout from "@/layouts/event-layout.svelte";
    export const layout = [App, EventLayout];
</script>

<script lang="ts">
    import GameCard from "@/components/games/GameCard.svelte";
    import type { Event } from "@/types/Event";
    import type { Game } from "@/types/Game";
    import { Button } from "@/lib/components/ui/button";
    import { store } from "@/routes/events/games";

    interface GamesByRound {
        [key: string]: Game[];
    }

    interface Props {
        gamesByRound: GamesByRound;
        event: Event;
        title: string;
    }

    const { gamesByRound, event }: Props = $props();
</script>

<svelte:head>
    <title>Games | Padel Hub</title>
</svelte:head>
<div class="page">
    <div class="games">
        {#if Object.keys(gamesByRound).length === 0}
            <p>No games yet</p>
        {/if}

        {#each Object.entries(gamesByRound) as [round, games]}
            <div class="round">
                <h3>Round {parseInt(round) + 1}</h3>
                {#each games as game (game.id)}
                    <GameCard {game} />
                {/each}
            </div>
        {/each}
    </div>

    <Button href={store(event.id)} viewTransition>
        <iconify-icon icon="mdi:plus" width="2rem" height="2rem"></iconify-icon>
        New round
    </Button>
</div>

<style>
    .games {
        display: grid;
        margin-bottom: 2rem;
    }

    h3 {
        text-transform: uppercase;
        font-weight: 500;
        line-height: 2.667;
        letter-spacing: 0.1667;
    }

    .round {
        margin-bottom: 2rem;
    }
</style>
