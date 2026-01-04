<script lang="ts">
    import Button from "@/lib/components/ui/button/button.svelte";
    import { disabled } from "@/routes/events/players";
    import type { Event } from "@/types/Event";

    interface Props {
        event: Event;
    }

    const { event }: Props = $props();

    let players = $derived(event.players);
</script>

<div class="header">
    <h3>Players</h3>
    <Button>Edit players</Button>
</div>

<div class="players">
    {#each players as player}
        <div class="player">
            <p>{player.name}</p>
            {#if player.pivot.disabled_at !== null}
                <Button
                    preserveScroll
                    data={{ shouldDisable: false }}
                    href={disabled([event, player])}
                    variant="secondary"
                >
                    Enable
                </Button>
            {:else}
                <Button
                    preserveScroll
                    data={{ shouldDisable: true }}
                    href={disabled([event, player])}
                    variant="destructive"
                >
                    Disable
                </Button>
            {/if}
        </div>
    {/each}
</div>

<style>
    h3 {
        font-size: var(--font-size-large);
        font-weight: bold;
    }

    .header {
        display: grid;
        grid-template-columns: 1fr auto;
        margin-bottom: 2rem;
        margin-top: 4rem;
    }

    .player {
        display: grid;
        grid-template-columns: 1fr auto;
    }

    .players {
        display: grid;
        gap: 1rem;
    }
</style>
