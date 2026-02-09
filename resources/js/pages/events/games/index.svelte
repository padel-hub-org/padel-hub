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
    import { index, store } from "@/routes/events/games";
    import { Form, type InertiaFormProps } from "@inertiajs/svelte";
    import { endEvent } from "@/actions/App/Http/Controllers/EventController";
    import type { Player } from "@/types/Player";

    interface Props {
        games: Game[];
        playersSittingOut: Player[];
        event: Event;
        title: string;
        round: number;
        maxRound: number;
    }

    const { games, playersSittingOut, event, round, maxRound }: Props =
        $props();

    const isEventEnded = $derived(event.ended_at !== null);
</script>

<svelte:head>
    <title>Games | Padel Hub</title>
</svelte:head>
<div class="page">
    {#if games.length > 0}
        <div class="rounds">
            {#key round}
                <Button
                    variant="outline"
                    disabled={round <= 1}
                    replace
                    href={index(event, {
                        query: {
                            round: round - 1,
                        },
                    })}
                    viewTransition
                >
                    <iconify-icon
                        icon="material-symbols:chevron-left-rounded"
                        width="1.5rem"
                        height="1.5rem"
                    ></iconify-icon>
                </Button>
            {/key}

            <h3>
                <iconify-icon
                    icon="material-symbols:padel"
                    width="1.5rem"
                    height="1.5rem"
                ></iconify-icon>
                Round {round}
            </h3>

            {#key round}
                <Button
                    variant="outline"
                    disabled={round >= maxRound}
                    replace
                    href={index(event, {
                        query: {
                            round: round + 1,
                        },
                    })}
                    viewTransition
                >
                    <iconify-icon
                        icon="material-symbols:chevron-right-rounded"
                        width="1.5rem"
                        height="1.5rem"
                    ></iconify-icon>
                </Button>
            {/key}
        </div>
    {/if}

    <div class="games">
        {#if games.length === 0}
            <p>No games yet</p>
        {/if}

        {#each games as game (game.id)}
            <GameCard {game} {event} />
        {/each}
    </div>

    {#if playersSittingOut.length > 0 && games.length > 0}
        <div class="sitting-out">
            <iconify-icon
                class="icon"
                icon="fa6-solid:hourglass-half"
                width="1.5rem"
                height="1.5rem"
            ></iconify-icon>

            <div class="players">
                {#each playersSittingOut as player (player.id)}
                    <p>{player.name}</p>
                {/each}
            </div>
        </div>
    {/if}

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
                    <Button
                        type="submit"
                        disabled={processing}
                        viewTransition
                        replace
                    >
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
    .rounds {
        display: grid;
        grid-template-columns: auto auto auto;
        justify-content: space-between;

        margin-bottom: 1.5rem;
        view-transition-name: games-rounds;
    }

    .actions {
        display: grid;
        grid-template-columns: 1fr auto;
        view-transition-name: games-actions;
    }

    .games {
        display: grid;
        gap: 1rem;
        margin-bottom: 2rem;
    }

    .page:has(.sitting-out) .games {
        margin-bottom: 1rem;
    }

    .sitting-out {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 0.5rem;
        align-items: center;
        padding-inline: 1rem;
        margin-bottom: 2rem;
        color: var(--muted-foreground);

        & .icon {
            align-self: center;
        }

        & .players {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
        }
    }

    .players p:not(:last-child)::after {
        content: ",";
    }

    h3 {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        font-weight: bold;
    }
</style>
