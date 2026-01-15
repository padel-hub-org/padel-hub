<script lang="ts">
    import type { EventLeaderboardPlayer } from "@/types/EventLeaderboardPlayer";

    interface Props {
        player: EventLeaderboardPlayer;
        index: number;
        anyTied: boolean;
    }

    const { player, index, anyTied }: Props = $props();

    const cardColor = $derived.by(() => {
        if (index === 0) {
            return "gold-color";
        }

        if (index === 1) {
            return "silver-color";
        }

        if (index === 2) {
            return "bronze-color";
        }

        return "";
    });
</script>

<div class={["player", "card", cardColor]}>
    <p class="rank">{index + 1}</p>
    <p class="name">{player.name}</p>
    <p class="rating">
        {player.pivot.event_rating.toLocaleString()}
    </p>
    <p class="games-result">{player.games_won}</p>
    <p class="games-result">{player.games_lost}</p>
    {#if anyTied}
        <p class="games-result">{player.games_tied}</p>
    {/if}
</div>

<style>
    .card {
        background-color: var(--card);
        padding: 1rem 1.5rem;
        border-radius: var(--radius);
        margin-bottom: 1rem;
    }

    .card.gold-color {
        background-color: var(--gold-color);
    }

    .card.silver-color {
        background-color: var(--silver-color);
    }

    .card.bronze-color {
        background-color: var(--bronze-color);
    }

    .rating {
        font-weight: bold;
        justify-self: end;
    }

    .games-result {
        justify-self: center;
    }

    .rank {
        font-size: var(--font-size-large);
        justify-self: end;
    }
</style>
