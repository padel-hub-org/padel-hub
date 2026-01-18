<script lang="ts">
    import Button from "@/lib/components/ui/button/button.svelte";
    import { disabled } from "@/routes/events/players";
    import { index as eventPlayers } from "@/routes/events/players";
    import type { Event } from "@/types/Event";

    interface Props {
        event: Event;
    }

    const { event }: Props = $props();

    let players = $derived(event.players);
</script>

<div class="header">
    <h3>Players</h3>
    <Button href={eventPlayers(event.id)} viewTransition>Edit players</Button>
</div>

<div class="players">
    {#each players as player}
        <div class="player">
            <p>{player.name}</p>
            {#if player.pivot.disabled_at !== null}
                <Button
                    preserveScroll
                    data={{ should_disable: false }}
                    href={disabled([event, player])}
                >
                    Enable
                </Button>
            {:else}
                <Button
                    preserveScroll
                    data={{ should_disable: true }}
                    href={disabled([event, player])}
                    variant="destructive"
                >
                    Disable
                </Button>
            {/if}
        </div>
    {/each}

    {#if players?.length == 0}
        <p>No players have been added to this event yet.</p>
    {/if}
</div>

<style>
    h3 {
        font-size: var(--font-size-large);
        font-weight: bold;
    }

    .header {
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: end;
        margin-bottom: 1rem;
        margin-top: 4rem;
    }

    .player {
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 1rem;
        background-color: var(--card);
        padding: 1rem;
        border-radius: var(--radius);
        align-items: center;
    }

    .players {
        display: grid;
        gap: 1rem;
        margin-bottom: 5rem;
    }
</style>
