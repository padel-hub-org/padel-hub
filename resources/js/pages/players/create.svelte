<script lang="ts">
    import { Form } from "@inertiajs/svelte";
    import { store } from "@/actions/App/Http/Controllers/PlayerController";
</script>

<Form action={store()}>
    <input type="text" name="name" />
    <button type="submit">Create Player</button>
</Form>
