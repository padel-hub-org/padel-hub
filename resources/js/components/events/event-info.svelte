<script lang="ts">
    import { Field, Label } from "@/lib/components/ui/field";
    import Input from "@/lib/components/ui/input/input.svelte";
    import { Button } from "@/lib/components/ui/button";
    import { update } from "@/routes/events";
    import { update as updateCourt } from "@/routes/courts";
    import type { Event } from "@/types/Event";
    import { Form, router, type InertiaFormProps } from "@inertiajs/svelte";
    import EventPointsEdit from "./event-points-edit.svelte";

    interface Props {
        event: Event;
    }

    type FormFields = {
        name: string | null;
    };

    const { event }: Props = $props();

    let isEditingPoints = $state(false);
    let editedPoints = $state(event.game_points);

    const changeCourts = (newCount: number) => {
        router.patch(update(event), {
            court_count: newCount,
        });
    };

    const savePoints = () => {
        router.patch(
            update(event),
            {
                game_points: editedPoints,
            },
            {
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
    <div>
        {#each event.courts as court, index}
            <Form action={updateCourt(court)}>
                {#snippet children({ submit }: InertiaFormProps<FormFields>)}
                    <div>
                        <Field>
                            <Label>Court {index + 1}</Label>

                            <Input
                                type="text"
                                name="name"
                                bind:value={court.name}
                                onchange={() => submit()}
                            />
                        </Field>
                    </div>
                {/snippet}
            </Form>
        {/each}
    </div>
    <div class="event-points">
        {#if isEditingPoints}
            <EventPointsEdit error={undefined} bind:gamePoints={editedPoints}
            ></EventPointsEdit>
            <Button class="save-button" onclick={() => savePoints()}>
                <iconify-icon icon="material-symbols:save-rounded"
                ></iconify-icon>
                Save
            </Button>
        {:else}
            <p>{event.game_points ?? "NA"} points per game</p>
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
        margin-bottom: 2rem;
        background-color: var(--card);
        padding: 1rem;
        border-radius: var(--radius);
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
