<script lang="ts">
    import { Form } from "@inertiajs/svelte";
    import { store } from "@/routes/players";
</script>

<svelte:head>
    <title>Create player | Padel Hub</title>
</svelte:head>

<Form action={store()}>
    <input type="text" name="name" />
    <button type="submit">Create Player</button>
</Form>
