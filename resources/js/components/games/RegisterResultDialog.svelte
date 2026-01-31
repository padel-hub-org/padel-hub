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

    let selectedPoints: number | null = $state(null);

    $effect(() => {
        if (isOpen) {
            selectedPoints = null;
        }
    });

    const registerScore = (players: GamePlayer[]) => {
        if (selectedPoints === null) return;

        router.put(
            update({ event: eventId, game: gameId }),
            {
                points: selectedPoints,
                players: players.map((player) => player.id),
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
</script>

<Dialog.Root open={isOpen} onOpenChange={(e) => (isOpen = e)}>
    <Dialog.Content>
        <Dialog.Header>
            <Dialog.Title>Register score</Dialog.Title>
        </Dialog.Header>

        <div class="register-score">
            {#if selectedPoints === null}
                <div class="point-list" transition:slide={{ duration: 100 }}>
                    {#each { length: maxPoints + 1 }, points}
                        <Button
                            variant="outline"
                            onclick={() => (selectedPoints = points)}
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
                                onclick={() => registerScore(team)}
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
