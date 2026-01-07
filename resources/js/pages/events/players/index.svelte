<script lang="ts">
    import { Button } from "@/lib/components/ui/button";
    import type { EventPlayer } from "@/types/EventPlayer";
    import type { Pagination } from "@/types/Pagination";
    import type { Player } from "@/types/Player";
    import { store, destroy } from "@/routes/events/players";
    import { InfiniteScroll } from "@inertiajs/svelte";
    import type { Event } from "@/types/Event";
    import dayjs from "dayjs";
    import { slide } from "svelte/transition";

    interface Props {
        event: Event;
        eventPlayers: EventPlayer[];
        players: Pagination<Player>;
    }

    const { event, eventPlayers, players }: Props = $props();
</script>

<svelte:head>
    <title>Event players | Padel Hub</title>
</svelte:head>

<div class="page">
    <header>
        <h1>Event: {dayjs(event.starts_at).calendar()}</h1>
    </header>

    <h2>Enrolled players</h2>
    <div class="players">
        {#each eventPlayers as player (player.id)}
            <div class="player" transition:slide>
                <p>{player.name}</p>
                <Button
                    preserveScroll
                    variant="destructive"
                    href={destroy([event.id, player.id])}>Remove</Button
                >
            </div>
        {/each}
    </div>

    <h2>Not enrolled players</h2>
    <InfiniteScroll data="events">
        <div class="players">
            {#each players.data as player (player.id)}
                <div class="player" transition:slide={{ duration: 150 }}>
                    <p>{player.name}</p>
                    <Button
                        preserveScroll
                        data={{ player_id: player.id }}
                        href={store(event.id)}>Add</Button
                    >
                </div>
            {/each}
        </div>
    </InfiniteScroll>
</div>

<style>
    .player {
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 1rem;
        background-color: var(--card);
        padding: 1rem;
        border-radius: var(--radius);
        align-items: center;
        margin-bottom: 1rem;
    }

    h1 {
        margin-bottom: 1rem;
        font-size: var(--font-size-heading-1);
        font-weight: bold;
    }

    h2 {
        grid-area: title;
        font-size: var(--font-size-large);
        font-weight: bold;
        margin-bottom: 1rem;
    }

    .players {
        display: grid;
        /* gap: 1rem; */
        margin-bottom: 5rem;
    }
</style>
