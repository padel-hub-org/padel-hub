<script lang="ts">
    import * as Dialog from "$lib/components/ui/dialog/index.js";
    import Button from "@/lib/components/ui/button/button.svelte";
    import { update } from "@/routes/events/games";
    import type { GamePlayer } from "@/types/GamePlayer";
    import { router } from "@inertiajs/svelte";
    import { slide } from "svelte/transition";

    interface Props {
        eventId: number;
        gameId: number;
        isOpen: boolean;
        maxPoints: number;
        teams: GamePlayer[][];
    }

    let {
        isOpen = $bindable(),
        maxPoints,
        teams,
        eventId,
        gameId,
    }: Props = $props();

    let selectedPointsA: number | null = $state(null);
    let selectedPointsB: number | null = $state(null);
    let selectedPoints: number | null = $state(null);

    $effect(() => {
        if (isOpen) {
            selectedPointsA = null;
        }
    });

    const registerScore = () => {
        if (selectedPointsA === null || selectedPointsB === null) return;

        router.put(
            update({ event: eventId, game: gameId }),
            {
                pointsA: selectedPointsA,
                pointsB: selectedPointsB,
                playersA: teams[0]?.map((player) => player.id),
                playersB: teams[1]?.map((player) => player.id),
            },
            {
                preserveState: true,
                preserveScroll: true,
                onSuccess: () => {
                    isOpen = false;
                },
            },
        );
    };

    const registerScoreWithPlayers = (players: GamePlayer[]) => {
        if (selectedPoints === null) return;
        let isTeamA = players.some((player) =>
            teams[0]?.find((playerA) => playerA.id === player.id),
        );

        if (isTeamA) {
            selectedPointsA = selectedPoints;
            selectedPointsB = maxPoints - selectedPointsA;
        } else {
            selectedPointsB = selectedPoints;
            selectedPointsA = maxPoints - selectedPointsB;
        }

        registerScore();
    };
</script>

<Dialog.Root open={isOpen} onOpenChange={(e) => (isOpen = e)}>
    <Dialog.Content>
        {#if maxPoints !== null}
            <Dialog.Header>
                <Dialog.Title>Register score</Dialog.Title>
            </Dialog.Header>
            <div class="register-score">
                {#if selectedPoints === null}
                    <div
                        class="point-list"
                        transition:slide={{ duration: 100 }}
                    >
                        {#each { length: maxPoints + 1 }, points}
                            <Button
                                variant="outline"
                                onclick={() => {
                                    selectedPoints = points;
                                }}
                            >
                                {points}
                            </Button>
                        {/each}
                    </div>
                {:else}
                    <div class="selected" transition:slide={{ duration: 100 }}>
                        <Button
                            class="selected-points"
                            variant="outline"
                            onclick={() => (selectedPoints = null)}
                            >{selectedPoints}</Button
                        >

                        <p class="text-center">Select team</p>
                        <div class="teams">
                            {#each teams as team}
                                <Button
                                    class="team-button"
                                    variant="outline"
                                    onclick={() =>
                                        registerScoreWithPlayers(team)}
                                >
                                    {#each team as player}
                                        <p>{player.name}</p>
                                    {/each}
                                </Button>
                            {/each}
                        </div>
                    </div>
                {/if}
            </div>
        {:else if selectedPointsA === null}
            <Dialog.Header>
                <Dialog.Title
                    >Register score for {teams?.[0]?.[0]?.name} and {teams?.[0]?.[1]
                        ?.name}</Dialog.Title
                >
            </Dialog.Header>
            <div class="point-list" transition:slide={{ duration: 100 }}>
                {#each { length: 16 }, points}
                    <Button
                        variant="outline"
                        onclick={() => (selectedPointsA = points)}
                    >
                        {points}
                    </Button>
                {/each}
            </div>
        {:else}
            <Dialog.Header>
                <Dialog.Title
                    >Register score for {teams?.[1]?.[0]?.name} and {teams?.[1]?.[1]
                        ?.name}</Dialog.Title
                >
            </Dialog.Header>
            <div class="point-list" transition:slide={{ duration: 100 }}>
                {#each { length: 16 }, points}
                    <Button
                        variant="outline"
                        onclick={() => {
                            selectedPointsB = points;
                            registerScore();
                        }}
                    >
                        {points}
                    </Button>
                {/each}
            </div>
        {/if}
    </Dialog.Content>
</Dialog.Root>

<style>
    .register-score {
        padding: 0.5rem 0;
    }

    .point-list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(4rem, 1fr));
        gap: 0.5rem;
    }

    .selected {
        display: grid;
        justify-items: center;
        gap: 1rem;
    }

    .register-score :global(.selected-points) {
        font-size: var(--font-size-heading-1);
        padding-inline: 2rem;
        width: fit-content;
        justify-self: center;
    }

    .teams {
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 100%;
        gap: 1rem;
    }

    .register-score :global(.team-button) {
        display: grid;
        gap: 0.5rem;
    }
</style>
