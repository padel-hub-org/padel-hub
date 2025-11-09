<script lang="ts">
    import { Button } from "@/lib/components/ui/button";
    import { update } from "@/routes/events";
    import type { Event } from "@/types/Event";
    import { router } from "@inertiajs/svelte";
    import EventPointsEdit from "./event-points-edit.svelte";

    interface Props {
        event: Event;
    }

    const { event }: Props = $props();

    let isEditingPoints = $state(false);
    let editedPoints = $state(event.game_points);

    const changeCourts = (newCount: number) => {
        router.patch(
            update(event),
            {
                court_count: newCount,
            },
            { viewTransition: false }, // Does not work, send issue / PR to inertia to fix
        );
    };

    const savePoints = () => {
        console.log({ editedPoints });
        router.patch(
            update(event),
            {
                game_points: editedPoints,
            },
            {
                viewTransition: false,
                onSuccess: () => (isEditingPoints = false),
            },
        );
    };
</script>

<div class="event-info">
    <div class="event-courts">
        <p>{event.court_count} courts</p>
        <Button
            variant="outline"
            class="event-info-button"
            onclick={() => changeCourts(event.court_count - 1)}
        >
            <iconify-icon icon="mdi-minus"></iconify-icon>
            Remove
        </Button>
        <Button
            variant="outline"
            class="event-info-button"
            onclick={() => changeCourts(event.court_count + 1)}
        >
            <iconify-icon icon="mdi-plus"></iconify-icon>
            Add
        </Button>
    </div>
    <div class="event-points">
        {#if isEditingPoints}
            <EventPointsEdit error={undefined} bind:gamePoints={editedPoints}
            ></EventPointsEdit>
            <Button class="save-button" onclick={() => savePoints()}>
                <iconify-icon icon="mdi:content-save"></iconify-icon>
                Save
            </Button>
        {:else}
            <p>{event.game_points} points per game</p>
            <Button
                variant="outline"
                class="event-info-button"
                onclick={() => (isEditingPoints = true)}
            >
                <iconify-icon icon="mdi:edit"></iconify-icon>
                Edit
            </Button>
        {/if}
    </div>
</div>

<style>
    p {
        margin-bottom: 0.5rem;
    }

    .event-info {
        display: grid;
        gap: 1rem;
        container-type: inline;
        margin-bottom: 1rem;
    }

    .event-courts {
        display: grid;
        grid-template-columns: 1fr auto auto;
        gap: 1rem;
        align-items: center;
    }

    .event-points {
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 1rem;
        align-items: center;
    }

    .event-points :global(.save-button) {
        align-self: end;
    }
</style>
