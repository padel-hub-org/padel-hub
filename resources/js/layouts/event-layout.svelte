<script lang="ts">
    import { page } from "@inertiajs/svelte";
    import { router } from "@inertiajs/svelte";
    import * as Tabs from "@/lib/components/ui/tabs";
    import settings from "@/routes/events/settings/index";
    import type { Event } from "@/types/Event";
    import games from "@/routes/events/games";
    import type { Snippet } from "svelte";
    import leaderboard from "@/routes/events/leaderboard";
    import dayjs from "dayjs";

    export interface Props {
        event: Event;
        title: string;
        children: Snippet;
    }
    interface TabRoutes {
        settings: string;
        games: string;
        leaderboard: string;
    }
    let { children, event, title }: Props = $props();

    const tabRoutes: TabRoutes = $derived.by(() => ({
        settings: settings.index(event).url,
        games: games.index(event).url,
        leaderboard: leaderboard.index(event).url,
    }));

    const tab = $derived.by(() => {
        if ($page.url.startsWith(tabRoutes.settings)) {
            return "settings";
        } else if ($page.url.startsWith(tabRoutes.games)) {
            return "games";
        } else if ($page.url.startsWith(tabRoutes.leaderboard)) {
            return "leaderboard";
        } else {
            return "settings";
        }
    });

    let currentTab = $state("settings");

    const onChangeTab = (value: string) => {
        console.log("Changing tab to", value);
        // A hack to avoid Tabs.Root updating currentTab before we navigate
        //   which would break view transitions
        currentTab = tab;

        const url = tabRoutes[value as keyof TabRoutes];
        if (url) {
            router.visit(url, { viewTransition: true, replace: true });
        }
    };

    const isEventEnded = $derived(event.ended_at !== null);

    const endDate = $derived.by(() =>
        dayjs(event.ended_at).calendar(null, {
            sameDay: "[Today]", // The same day ( Today at 2:30 AM )
            nextDay: "[Tomorrow]", // The next day ( Tomorrow at 2:30 AM )
            nextWeek: "dddd", // The next week ( Sunday at 2:30 AM )
            lastDay: "[Yesterday]", // The day before ( Yesterday at 2:30 AM )
            lastWeek: "dddd", // Last week ( Last Monday at 2:30 AM )
            sameElse: "DD/MM/YYYY", // Everything else ( 7/10/2011 )
        }),
    );

    // Keep currentTab in sync with tab
    $effect(() => {
        if (currentTab !== tab) {
            currentTab = tab;
        }
    });
</script>

<div class="event-layout">
    <header>
        <h1>{title}</h1>
        <div class="start">
            <iconify-icon
                icon="material-symbols:calendar-clock"
                width="1.5rem"
                height="1.5rem"
            ></iconify-icon>
            <p class="event-date">{dayjs(event.starts_at).calendar()}</p>
        </div>
        {#if isEventEnded}
            <div class="end">
                <iconify-icon
                    icon="material-symbols:event-available-rounded"
                    width="1.5rem"
                    height="1.5rem"
                ></iconify-icon>
                <p class="event-date">Ended {endDate}</p>
            </div>
        {/if}
    </header>

    <Tabs.Root bind:value={currentTab} onValueChange={onChangeTab}>
        <div class="tab-list">
            <Tabs.List>
                <Tabs.Trigger value="settings"
                    ><p
                        class="tab-text"
                        style="view-transition-name: shad-tab-trigger-settings;"
                    >
                        Settings
                    </p></Tabs.Trigger
                >
                <Tabs.Trigger value="games"
                    ><p
                        class="tab-text"
                        style="view-transition-name: shad-tab-trigger-games;"
                    >
                        Games
                    </p></Tabs.Trigger
                >
                <Tabs.Trigger value="leaderboard"
                    ><p
                        class="tab-text"
                        style="view-transition-name: shad-tab-trigger-leaderboard; "
                    >
                        Leaderboard
                    </p></Tabs.Trigger
                >
            </Tabs.List>
        </div>

        <Tabs.Content value="settings">
            {@render children()}
        </Tabs.Content>
        <Tabs.Content value="games">
            {@render children()}
        </Tabs.Content>
        <Tabs.Content value="leaderboard">
            {@render children()}
        </Tabs.Content>
    </Tabs.Root>
</div>

<style>
    .event-layout {
        margin-bottom: 4rem;
    }

    header {
        display: grid;
        margin-bottom: 2rem;
        grid-template-columns: 1fr auto;
        grid-template-areas:
            "header ."
            "start end";
        view-transition-name: event-header;
    }

    h1 {
        grid-area: header;
        font-size: var(--font-size-heading-1);
        font-weight: bold;
    }

    .event-date {
        font-size: var(--font-size-large);
    }

    .start {
        grid-area: start;
        display: flex;
        gap: 0.5rem;
    }

    .end {
        grid-area: end;
        display: flex;
        gap: 0.5rem;
    }

    .tab-list {
        position: fixed;
        display: grid;
        right: 0;
        left: 0;
        bottom: 4.75rem;
        z-index: 5;
        justify-content: center;
        view-transition-name: tab-root;
        view-transition-class: slide-up;
    }

    .tab-text {
        z-index: 1;
        view-transition-class: slide-up;
    }
</style>
