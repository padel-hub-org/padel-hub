<script lang="ts">
    import type { Game } from "@/types/Game";
    import { slide } from "svelte/transition";
    import * as Card from "$lib/components/ui/card/index.js";
    import RegisterResultDialog from "./RegisterResultDialog.svelte";
    import type { Event } from "@/types/Event";

    interface Props {
        game: Game;
        event: Event;
    }

    const { game, event }: Props = $props();

    let dialogOpen = $state(false);

    const team1 = $derived.by(() => {
        const player1 = game.players?.[0];
        const player2 = game.players?.find(
            (player) => player.id === game.players?.[0]?.pivot.partner_id,
        );

        if (!player1 || !player2) {
            throw new Error("One or more players were missing.");
        }

        return [player1, player2];
    });

    const team2 = $derived.by(() => {
        const player1Id = team1[0]?.id;
        const partnerId = team1[1]?.id;

        if (!game.players) {
            throw new Error("One or more players were missing.");
        }

        return game.players.filter(
            (player) => player.id !== player1Id && player.id !== partnerId,
        );
    });
</script>

<div class="game" transition:slide={{ duration: 150 }}>
    <Card.Root onclick={() => (dialogOpen = true)}>
        <Card.Content>
            <div class="game-content">
                {#each team1 as player, i (player.id)}
                    <p class={["team0", `player${i}`]}>{player.name}</p>
                {/each}

                <div class="score">
                    <p>{team1[0]?.pivot.points}</p>
                    <p>-</p>
                    <p>{team2[0]?.pivot.points}</p>
                </div>

                {#each team2 as player, i (player.id)}
                    <p class={["team1", `player${i}`]}>{player.name}</p>
                {/each}
            </div>
        </Card.Content>

        <RegisterResultDialog
            bind:isOpen={dialogOpen}
            maxPoints={event.game_points}
            eventId={event.id}
            gameId={game.id}
            teams={[team1, team2]}
        />
    </Card.Root>
</div>

<style>
    .game {
        margin-bottom: 1rem;
    }

    .game-content {
        display: grid;
        width: 100%;
        grid-template-columns: 1fr auto 1fr;
        grid-template-areas:
            "team0Player0 score team1Player0"
            "team0Player1 score team1Player1";
        gap: 1rem;
        background-color: var(--card);
        border-radius: var(--radius);
    }

    .team0 {
        overflow: hidden;
        width: 100%;
        justify-self: start;
    }

    .team0.player0 {
        grid-area: team0Player0;
    }

    .team0.player1 {
        grid-area: team0Player1;
    }

    .team1 {
        justify-self: end;
        text-align: end;
        overflow: hidden;
        width: 100%;
    }

    .team1.player0 {
        grid-area: team1Player0;
    }

    .team1.player1 {
        grid-area: team1Player1;
    }

    .player1 {
        align-self: end;
    }

    .score {
        grid-area: score;
        display: flex;
        align-self: center;
        gap: 0.5rem;
        font-size: var(--font-size-large);
    }
</style>
