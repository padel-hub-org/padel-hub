<script lang="ts" module>
    import App from "@/layouts/app.svelte";
    import EventLayout from "@/layouts/event-layout.svelte";

    export const layout = [App, EventLayout];
</script>

<script lang="ts">
    import EventDeleteDialog from "@/components/events/event-delete-dialog.svelte";
    import EventInfo from "@/components/events/event-info.svelte";
    import EventPlayers from "@/components/events/event-players.svelte";
    import type { Event } from "@/types/Event";
    import dayjs from "dayjs";

    interface Props {
        event: Event;
        title: string;
    }

    const { event }: Props = $props();
</script>

<svelte:head>
    <title>{dayjs(event.starts_at).calendar()} | Padel Hub</title>
</svelte:head>

<div>
    <EventInfo {event}></EventInfo>

    <EventPlayers {event}></EventPlayers>

    <EventDeleteDialog {event}></EventDeleteDialog>
</div>
