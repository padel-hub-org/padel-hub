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
    import { Form, type InertiaFormProps } from "@inertiajs/svelte";
    import { endEvent } from "@/actions/App/Http/Controllers/EventController";

    interface GamesByRound {
        [key: string]: Game[];
    }

    interface Props {
        gamesByRound: GamesByRound;
        event: Event;
        title: string;
    }

    const { gamesByRound, event }: Props = $props();

    const isEventEnded = event.ended_at !== null;
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
                <h3>Round {parseInt(round)}</h3>
                {#each games as game (game.id)}
                    <GameCard {game} {event} />
                {/each}
            </div>
        {/each}
    </div>

    {#if !isEventEnded}
        <div class="actions">
            <Form
                action={endEvent(event.id)}
                options={{ preserveScroll: true }}
            >
                {#snippet children({ processing }: InertiaFormProps<{}>)}
                    <Button
                        type="submit"
                        disabled={processing}
                        variant="outline"
                    >
                        <iconify-icon
                            icon="material-symbols:send-rounded"
                            width="1.5rem"
                            height="1.5rem"
                        ></iconify-icon>
                        End event
                    </Button>
                {/snippet}
            </Form>

            <Form action={store(event.id)} options={{ preserveScroll: true }}>
                {#snippet children({ processing }: InertiaFormProps<{}>)}
                    <Button type="submit" disabled={processing}>
                        <iconify-icon
                            icon="mdi:plus"
                            width="1.5rem"
                            height="1.5rem"
                        ></iconify-icon>
                        New round
                    </Button>
                {/snippet}
            </Form>
        </div>
    {/if}
</div>

<style>
    .actions {
        display: grid;
        grid-template-columns: 1fr auto;
    }
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
