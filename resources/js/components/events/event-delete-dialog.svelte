<script lang="ts">
    import * as AlertDialog from "$lib/components/ui/alert-dialog/index.js";
    import { buttonVariants } from "@/lib/components/ui/button";
    import { destroy } from "@/routes/events";
    import type { Event } from "@/types/Event";
    import { router } from "@inertiajs/svelte";

    interface Props {
        event: Event;
    }

    const { event }: Props = $props();

    const confirmDelete = () => {
        router.delete(destroy(event), { viewTransition: true });
    };
</script>

<AlertDialog.Root>
    <AlertDialog.Trigger class={buttonVariants({ variant: "destructive" })}>
        <iconify-icon icon="mdi:delete"></iconify-icon>
        Delete event
    </AlertDialog.Trigger>
    <AlertDialog.Content>
        <AlertDialog.Header>
            <AlertDialog.Title>Are you sure?</AlertDialog.Title>
            <AlertDialog.Description>
                This will delete the event and all games. ratings updated during
                event will NOT be rolled back.
            </AlertDialog.Description>
        </AlertDialog.Header>
        <AlertDialog.Footer>
            <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
            <AlertDialog.Action
                onclick={confirmDelete}
                class={buttonVariants({ variant: "destructive" })}
            >
                Delete
            </AlertDialog.Action>
        </AlertDialog.Footer>
    </AlertDialog.Content>
</AlertDialog.Root>
