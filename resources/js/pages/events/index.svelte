<script lang="ts">
    import EventCard from "@/components/events/event-card.svelte";
    import { Button } from "@/lib/components/ui/button";
    import { Spinner } from "@/lib/components/ui/spinner";
    import { create } from "@/routes/events";
    import type { Event } from "@/types/Event";
    import type { Pagination } from "@/types/Pagination";
    import { InfiniteScroll } from "@inertiajs/svelte";

    interface Props {
        events: Pagination<Event>;
    }

    const { events }: Props = $props();
</script>

<svelte:head>
    <title>Events | Padel Hub</title>
</svelte:head>

<div class="page">
    <header>
        <h1>Events</h1>

        <Button class="create-event" href={create()} viewTransition>
            <iconify-icon
                icon="material-symbols:calendar-add-on-rounded"
                width="1.25rem"
                height="1.25rem"
            ></iconify-icon>
            New event
        </Button>
    </header>

    <InfiniteScroll data="events" only={["events"]}>
        <div class="events">
            {#each events.data as event}
                <EventCard {event}></EventCard>
            {/each}
        </div>

        <div slot="loading" class="loading">
            <Spinner class="size-6" />
        </div>
    </InfiniteScroll>
</div>

<style>
    header {
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        margin-bottom: 1rem;
    }

    .events {
        display: grid;
        gap: 1rem;
    }

    .loading {
        display: grid;
        justify-items: center;
    }
</style>
