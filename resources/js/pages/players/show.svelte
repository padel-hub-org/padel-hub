<script lang="ts">
    import { Form } from "@inertiajs/svelte";
    import { update } from "@/routes/players";
    import { Button } from "$lib/components/ui/button/index.ts";
    import type { Player } from "@/types/Player";
    import { Field } from "@/lib/components/ui/field";
    import { Label } from "@/lib/components/ui/label";
    import { Input } from "@/lib/components/ui/input";

    interface Props {
        player: Player;
    }

    let { player }: Props = $props();
</script>

<svelte:head>
    <title>{player.name} | Padel Hub</title>
</svelte:head>

<h1 class="mb-4">Update Player</h1>

<Form
    action={update(player)}
    options={{ viewTransition: true, preserveState: true }}
>
    <Field class="mb-2">
        <Label for="name">Name</Label>
        <Input
            type="text"
            name="name"
            id="name"
            required
            value={player.name}
            autocomplete="off"
        />
    </Field>

    <Button type="submit">Update Player</Button>
</Form>
