<script lang="ts">
    import EventCard from "@/components/events/event-card.svelte";
    import { Button } from "@/lib/components/ui/button";
    import { create } from "@/routes/events";
    import type { Event } from "@/types/Event";
    import type { Pagination } from "@/types/Pagination";
    import { InfiniteScroll } from "@inertiajs/svelte";

    interface Props {
        events: Pagination<Event>;
    }

    const { events }: Props = $props();
</script>

<div class="page">
    <header>
        <h1>Events</h1>

        <Button class="create-event" href={create()}>
            <iconify-icon icon="mdi:plus" width="2rem" height="2rem"
            ></iconify-icon>
            Create event
        </Button>
    </header>

    <InfiniteScroll data="events">
        <div class="events">
            {#each events.data as event}
                <EventCard {event}></EventCard>
            {/each}
        </div>
    </InfiniteScroll>
</div>

<style>
    h1 {
    }

    header {
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        margin-bottom: 1rem;
    }

    .events {
        display: grid;
        gap: 1rem;
        margin-bottom: 5rem;
    }
</style>
