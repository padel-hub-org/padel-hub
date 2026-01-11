<script lang="ts" module>
    import App from "@/layouts/app.svelte";
    import EventLayout from "@/layouts/event-layout.svelte";
    export const layout = [App, EventLayout];
</script>

<script lang="ts">
    import type { Event } from "@/types/Event";
    import type { EventLeaderboardPlayer } from "@/types/EventLeaderboardPlayer";
    import PlayerLeaderboardCard from "@/components/leaderboard/player-leaderboard-card.svelte";

    interface Props {
        event: Event;
        title: string;
        players: EventLeaderboardPlayer[];
        anyTied: boolean;
    }

    const { players, anyTied }: Props = $props();
</script>

<svelte:head>
    <title>Leaderboard | Padel Hub</title>
</svelte:head>

<div class="page">
    {#if players.length === 0}
        <p>No players in the leaderboard yet.</p>
    {:else}
        <div class={["leaderboard", anyTied ? "with-ties" : ""]}>
            <div class="player header">
                <p class="rank"></p>
                <p class="name"></p>
                <p class="rating">Today's rating</p>
                <p class="games-won">Won</p>
                <p class="games-lost">Lost</p>
                {#if anyTied}
                    <p class="games-tied">Tied</p>
                {/if}
            </div>
            {#each players as player, index}
                <PlayerLeaderboardCard {player} {index} {anyTied} />
            {/each}
        </div>
    {/if}
</div>

<style>
    .leaderboard {
        display: grid;
        grid-template-columns: max-content 1fr max-content max-content max-content;
        margin-top: 1rem;
    }

    .leaderboard.with-ties {
        grid-template-columns: max-content 1fr max-content max-content max-content max-content;
    }

    .page :global(.player) {
        display: grid;
        grid-template-columns: subgrid;
        grid-column: 1/-1;
        gap: 1rem;
        padding: 0.5rem 1rem;
        align-items: center;
    }
</style>
