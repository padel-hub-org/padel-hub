<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.ts";
    import PlayerCard from "@/components/players/player-card.svelte";
    import { Field } from "@/lib/components/ui/field";
    import Input from "@/lib/components/ui/input/input.svelte";
    import { Spinner } from "@/lib/components/ui/spinner";
    import { create } from "@/routes/players";
    import type { Pagination } from "@/types/Pagination";
    import type { Player } from "@/types/Player";
    import { Form, InfiniteScroll } from "@inertiajs/svelte";

    interface Props {
        players: Pagination<Player>;
        search: string;
    }

    let { players, search }: Props = $props();

    let formRef: Form;
    let debounceTimer: ReturnType<typeof setTimeout>;

    function handleInput() {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => formRef.submit(), 300);
    }
</script>

<svelte:head>
    <title>Players | Padel Hub</title>
</svelte:head>

<div class="page">
    <div class="header">
        <h1>Players</h1>

        <Button class="button" href={create()} viewTransition>
            <iconify-icon
                icon="material-symbols:person-add-rounded"
                width="1.25rem"
                height="1.25rem"
            >
            </iconify-icon>
            Add player
        </Button>
    </div>

    <Form
        class="mb-4"
        bind:this={formRef}
        options={{ preserveState: true, replace: true }}
    >
        <Field>
            <Input
                oninput={handleInput}
                type="text"
                name="search"
                id="search"
                value={search}
                placeholder="Search by name..."
            />
        </Field>
    </Form>

    <InfiniteScroll data="players" only={["players"]}>
        <ul class="players">
            {#each players.data as player (player.id)}
                <PlayerCard {player} />
            {/each}

            {#if players.data.length === 0}
                <p>No players found.</p>
            {/if}
        </ul>

        <div slot="loading" class="loading">
            <Spinner class="size-6" />
        </div>
    </InfiniteScroll>
</div>

<style>
    .header {
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        margin-bottom: 1rem;
    }

    .players {
        display: grid;
        gap: 1rem;
    }

    .loading {
        display: grid;
        justify-items: center;
    }
</style>
