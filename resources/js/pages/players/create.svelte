<script lang="ts">
    import { Form } from "@inertiajs/svelte";
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
    <Field class="mb-2">
        <Label for="name">Name</Label>
        <Input type="text" name="name" id="name" required />
    </Field>

    <Button type="submit" class="mt-4">Create Player</Button>
</Form>
