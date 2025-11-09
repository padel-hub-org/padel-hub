<script lang="ts">
    import EventDeleteDialog from "@/components/events/event-delete-dialog.svelte";
    import EventInfo from "@/components/events/event-info.svelte";
    import type { Event } from "@/types/Event";
    import dayjs from "dayjs";

    interface Props {
        event: Event;
    }

    const { event }: Props = $props();
</script>

<svelte:head>
    <title>{dayjs(event.starts_at).calendar()} | Padel Hub</title>
</svelte:head>

<div class="event">
    <h1>{dayjs(event.starts_at).calendar()}</h1>

    <EventInfo {event}></EventInfo>

    <EventDeleteDialog {event}></EventDeleteDialog>
</div>

<style>
    h1 {
        margin-bottom: 1rem;
    }
</style>
