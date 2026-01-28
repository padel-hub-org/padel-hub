<script lang="ts">
    import { Form, type InertiaFormProps } from "@inertiajs/svelte";
    import { store } from "@/routes/players";
    import { Field } from "@/lib/components/ui/field";
    import { Label } from "@/lib/components/ui/label";
    import { Input } from "@/lib/components/ui/input";
    import { Button } from "@/lib/components/ui/button";
</script>

<svelte:head>
    <title>Create player | Padel Hub</title>
</svelte:head>

<h1 class="mb-4">Create Player</h1>

<Form action={store()} options={{ viewTransition: true }}>
    {#snippet children({ errors }: InertiaFormProps<{}>)}
        <Field class="mb-2">
            <Label for="name">Name</Label>
            <Input type="text" name="name" id="name" required />
        </Field>

        {#if errors.name}
            <p class="text-destructive text-sm mt-1">{errors.name}</p>
        {/if}

        <Button type="submit" class="mt-4">Create Player</Button>
    {/snippet}
</Form>
