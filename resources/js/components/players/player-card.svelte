<script lang="ts">
    import { Button, buttonVariants } from "$lib/components/ui/button/index.ts";
    import * as AlertDialog from "@/lib/components/ui/alert-dialog";
    import { Spinner } from "@/lib/components/ui/spinner";
    import { destroy, show } from "@/routes/players";
    import type { Player } from "@/types/Player";
    import { Form, type InertiaFormProps } from "@inertiajs/svelte";

    interface Props {
        player: Player;
    }
    let { player }: Props = $props();
</script>

<li class="player">
    <p>{player.name}</p>
    <Button
        class="cursor-pointer"
        href={show(player)}
        size="icon"
        variant="secondary"
        viewTransition
        preserveScroll
    >
        <iconify-icon
            icon="material-symbols:person-edit-rounded"
            width="1.5rem"
            height="1.5rem"
        ></iconify-icon>
    </Button>

    <AlertDialog.Root>
        <AlertDialog.Trigger>
            <Button class="cursor-pointer" size="icon" variant="destructive">
                <iconify-icon
                    icon="material-symbols:delete-rounded"
                    width="1.5rem"
                    height="1.5rem"
                ></iconify-icon>
            </Button>
        </AlertDialog.Trigger>

        <AlertDialog.Content>
            <AlertDialog.Header>
                <AlertDialog.Title>Are you sure?</AlertDialog.Title>
                <AlertDialog.Description>
                    Are you sure you want to delete <span class="font-bold"
                        >{player.name}</span
                    >? This action cannot be undone.
                </AlertDialog.Description>
            </AlertDialog.Header>
            <Form
                action={destroy(player)}
                options={{ preserveScroll: true, reset: ["players"] }}
                disableWhileProcessing
            >
                {#snippet children({ processing }: InertiaFormProps<{}>)}
                    <AlertDialog.Footer>
                        <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>

                        <Button
                            type="submit"
                            class={buttonVariants({
                                variant: "destructive",
                            })}
                            disabled={processing}
                        >
                            {#if processing}
                                <Spinner class="size-5" />
                            {/if}
                            Delete
                        </Button>
                    </AlertDialog.Footer>
                {/snippet}
            </Form>
        </AlertDialog.Content>
    </AlertDialog.Root>
</li>

<style>
    .player {
        display: grid;
        grid-template-columns: 1fr auto auto;
        gap: 1rem;
        align-items: center;
        background-color: var(--card);
        padding: 1rem;
        border-radius: var(--radius);
    }
</style>
