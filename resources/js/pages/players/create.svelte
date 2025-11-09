<script lang="ts">
    import { Form } from "@inertiajs/svelte";
    import { store } from "@/routes/players";
</script>

<Form action={store()}>
    <input type="text" name="name" />
    <button type="submit">Create Player</button>
</Form>
