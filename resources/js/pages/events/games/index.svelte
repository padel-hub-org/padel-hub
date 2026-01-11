<script lang="ts" module>
    import App from "@/layouts/app.svelte";
    import EventLayout from "@/layouts/event-layout.svelte";
    export const layout = [App, EventLayout];
</script>

<script lang="ts">
    import GameCard from "@/components/games/GameCard.svelte";
    import type { Event } from "@/types/Event";
    import type { Game } from "@/types/Game";

    interface GamesByRound {
        [key: string]: Game[];
    }

    interface Props {
        gamesByRound: GamesByRound;
        event: Event;
        title: string;
    }

    const { gamesByRound }: Props = $props();
</script>

<svelte:head>
    <title>Games | Padel Hub</title>
</svelte:head>
<div class="page">
    <div class="games">
        {#each Object.entries(gamesByRound) as [round, games]}
            <div class="round">
                <h3>Round {parseInt(round) + 1}</h3>
                {#each games as game (game.id)}
                    <GameCard {game} />
                {/each}
            </div>
        {/each}
    </div>
</div>

<style>
    .games {
        display: grid;
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
