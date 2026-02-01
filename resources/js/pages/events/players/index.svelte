<script lang="ts" module>
    import App from "@/layouts/app.svelte";
    import EventLayout from "@/layouts/event-layout.svelte";
    export const layout = [App, EventLayout];
</script>

<script lang="ts">
    import { Button } from "@/lib/components/ui/button";
    import type { EventPlayer } from "@/types/EventPlayer";
    import type { Pagination } from "@/types/Pagination";
    import type { Player } from "@/types/Player";
    import { store, destroy } from "@/routes/events/players";
    import { Form, InfiniteScroll, router } from "@inertiajs/svelte";
    import type { Event } from "@/types/Event";
    import { fade } from "svelte/transition";
    import { Spinner } from "@/lib/components/ui/spinner";
    import { Field } from "@/lib/components/ui/field";
    import { Input } from "@/lib/components/ui/input";

    interface Props {
        event: Event;
        eventPlayers: EventPlayer[];
        players: Pagination<Player>;
        search: string;
    }

    const { event, eventPlayers, players, search }: Props = $props();

    let formRef: Form;
    let debounceTimer: ReturnType<typeof setTimeout>;

    function handleInput() {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => formRef.submit(), 300);
    }

    function addPlayer(playerId: number) {
        router.post(
            store(event.id),
            { player_id: playerId },
            {
                reset: ["players"],
                only: ["players", "eventPlayers"],
                preserveScroll: true,
            },
        );
    }

    function removePlayer(playerId: number) {
        router.delete(destroy([event.id, playerId]), {
            reset: ["players"],
            only: ["players", "eventPlayers"],
            preserveScroll: true,
        });
    }
</script>

<svelte:head>
    <title>Event players | Padel Hub</title>
</svelte:head>

<div class="page">
    <h2>Enrolled players</h2>
    <div class="players">
        {#each eventPlayers as player (`enrolled-${player.id}`)}
            <div class="player" transition:fade={{ duration: 150 }}>
                <p>{player.name}</p>
                <Button
                    variant="destructive"
                    onclick={() => removePlayer(player.id)}>Remove</Button
                >
            </div>
        {/each}

        {#if eventPlayers.length === 0}
            <p>No players enrolled yet.</p>
        {/if}
    </div>

    <h2>Not enrolled players</h2>

    <Form
        class="mb-4"
        bind:this={formRef}
        options={{
            preserveState: true,
            preserveScroll: true,
            replace: true,
            reset: ["players", "search"],
        }}
    >
        <Field>
            <Input
                oninput={handleInput}
                type="text"
                name="search"
                id="search"
                value={search}
                placeholder="Search by name..."
            />
        </Field>
    </Form>

    <InfiniteScroll data="players" as="div" class="players">
        {#each players.data as player (`not-enrolled-${player.id}`)}
            <div class="player" transition:fade={{ duration: 150 }}>
                <p>{player.name}</p>
                <Button onclick={() => addPlayer(player.id)}>Add</Button>
            </div>
        {/each}

        {#if players.data.length === 0}
            <p>No players found.</p>
        {/if}

        <div slot="loading" class="loading">
            <Spinner class="size-6" />
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

    h2 {
        grid-area: title;
        font-size: var(--font-size-large);
        font-weight: bold;
        margin-bottom: 1rem;
    }

    .players {
        display: grid;
        margin-bottom: 5rem;
    }

    .loading {
        display: grid;
        justify-items: center;
    }
</style>
