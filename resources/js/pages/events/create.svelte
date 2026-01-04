<script lang="ts">
    import { Button } from "@/lib/components/ui/button";
    import { Field, Label, Error } from "@/lib/components/ui/field";
    import Input from "@/lib/components/ui/input/input.svelte";
    import { store } from "@/routes/events";
    import { Form, type InertiaFormProps } from "@inertiajs/svelte";
    import type { FormDataType } from "@inertiajs/core";
    import * as ButtonGroup from "@/lib/components/ui/button-group";
    import EventPointsEdit from "@/components/events/event-points-edit.svelte";

    type FormFields = FormDataType<{
        court_count: number;
        game_points: number;
        starts_at_date: string;
        starts_at_time: string;
    }>;

    let courtCount = 3;
    let gamePoints = 16;

    function decrementCourtCount() {
        if (courtCount > 1) {
            courtCount--;
        }
    }

    function incrementCourtCount() {
        courtCount++;
    }
</script>

<svelte:head>
    <title>Create event | Padel Hub</title>
</svelte:head>

<Form action={store()} visitOptions={{ viewTransition: true }}>
    {#snippet children({ errors, processing }: InertiaFormProps<FormFields>)}
        <div class="form">
            <h1>Create event</h1>

            <input
                type="hidden"
                name="timezone"
                value={Intl.DateTimeFormat().resolvedOptions().timeZone}
            />

            <Field>
                <Label>Starts at</Label>

                <div class="flex gap-4">
                    <Input
                        type="date"
                        name="starts_at_date"
                        aria-invalid={!!errors.starts_at_date}
                    />
                    <Input
                        type="time"
                        name="starts_at_time"
                        value="20:30"
                        aria-invalid={!!errors.starts_at_time}
                    />
                </div>

                {#if errors.starts_at_date || errors.starts_at_time}
                    <Error
                        >{errors.starts_at_date} {errors.starts_at_time}</Error
                    >
                {/if}
            </Field>

            <Field>
                <Label>Number of courts</Label>
                <div class="flex gap-4">
                    <Input
                        type="number"
                        step="1"
                        name="court_count"
                        bind:value={courtCount}
                        aria-invalid={!!errors.court_count}
                    />

                    <ButtonGroup.Root>
                        <Button
                            size="icon-lg"
                            variant="outline"
                            onclick={decrementCourtCount}
                            ><iconify-icon
                                icon="mdi:minus"
                                width="2rem"
                                height="2rem"
                            ></iconify-icon></Button
                        >
                        <Button
                            size="icon-lg"
                            variant="outline"
                            onclick={incrementCourtCount}
                            ><iconify-icon
                                icon="mdi:plus"
                                width="2rem"
                                height="2rem"
                            ></iconify-icon></Button
                        >
                    </ButtonGroup.Root>
                </div>

                {#if errors.court_count}
                    <Error>{errors.court_count}</Error>
                {/if}
            </Field>

            <EventPointsEdit error={errors.game_points} {gamePoints}
            ></EventPointsEdit>

            <Button type="submit" disabled={processing}>Create</Button>
        </div>
    {/snippet}
</Form>

<style>
    .form {
        display: grid;
        gap: 1.5rem;
    }
</style>
