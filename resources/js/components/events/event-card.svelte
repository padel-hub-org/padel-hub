<script lang="ts">
    import { show } from "@/routes/events";
    import type { Event } from "@/types/Event";
    import { Link } from "@inertiajs/svelte";
    import dayjs from "dayjs";

    interface Props {
        event: Event;
    }

    const { event }: Props = $props();

    const endDate = $derived(
        dayjs(event.ended_at).calendar(null, {
            sameDay: "[Today]", // The same day ( Today at 2:30 AM )
            nextDay: "[Tomorrow]", // The next day ( Tomorrow at 2:30 AM )
            nextWeek: "dddd", // The next week ( Sunday at 2:30 AM )
            lastDay: "[Yesterday]", // The day before ( Yesterday at 2:30 AM )
            lastWeek: "dddd", // Last week ( Last Monday at 2:30 AM )
            sameElse: "DD/MM/YYYY", // Everything else ( 7/10/2011 )
        }),
    );
</script>

<Link href={show(event)} viewTransition>
    <article class="event">
        <div class="start">
            <iconify-icon
                icon="material-symbols:calendar-clock"
                width="1.5rem"
                height="1.5rem"
            ></iconify-icon>
            <h2>{dayjs(event.starts_at).calendar()}</h2>
        </div>

        <p class="courts">{event.court_count} courts</p>
        <p class="players">{event.players_count} players</p>

        {#if event.ended_at !== null}
            <div class="end">
                <iconify-icon
                    icon="material-symbols:event-available-rounded"
                    width="1.5rem"
                    height="1.5rem"
                ></iconify-icon>
                <p>
                    Ended {endDate}
                </p>
            </div>
        {:else if dayjs(event.starts_at).isBefore(dayjs())}
            <div class="end live">
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
            "title end"
            "courts players";
        gap: 1rem;
        background-color: var(--card);
        padding: 1rem;
        border-radius: var(--radius);
    }

    h2 {
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

    .end {
        grid-area: end;
        align-self: self-start;
        justify-self: end;
        display: flex;
        gap: 0.75rem;
        align-items: center;
    }

    .start {
        grid-area: title;
        display: flex;
        gap: 0.75rem;
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
