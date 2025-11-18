<script lang="ts">
    import { show } from "@/routes/events";
    import type { Event } from "@/types/Event";
    import { Link } from "@inertiajs/svelte";
    import dayjs from "dayjs";

    interface Props {
        event: Event;
    }

    const { event }: Props = $props();
</script>

<Link href={show(event)}>
    <article class="event">
        <h2>{dayjs(event.starts_at).calendar()}</h2>

        <p class="courts">{event.court_count} courts</p>
        <p class="players">{event.players_count} players</p>

        {#if event.ended_at !== null}
            <p class="ended">
                Ended at {dayjs(event.ended_at).format("LT")}
            </p>
        {:else if dayjs(event.starts_at).isBefore(dayjs())}
            <div class="ended live">
                <div class="live-dot"></div>
                <p>Live</p>
            </div>
        {/if}
    </article>
</Link>

<style>
    .event {
        display: grid;
        grid-template-columns: 1fr auto;
        grid-template-areas:
            "title ended"
            "courts players";
        gap: 1rem;
        background-color: var(--card);
        padding: 1rem;
        border-radius: var(--radius);
    }

    h2 {
        grid-area: title;
        font-size: var(--font-size-large);
        font-weight: bold;
    }

    .courts {
        grid-area: courts;
    }

    .players {
        grid-area: players;
        justify-self: end;
    }

    .ended {
        grid-area: ended;
        align-self: self-start;
        justify-self: end;
    }

    .ended.live {
        display: flex;
        gap: 0.75rem;
        align-items: center;
    }

    .live-dot {
        position: relative;
        width: 0.5rem;
        height: 0.5rem;
        background-color: var(--success);
        border-radius: 50%;
        opacity: 0.8;
        overflow: visible;
    }
</style>
