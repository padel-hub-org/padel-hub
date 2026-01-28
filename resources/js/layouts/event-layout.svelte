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

    const tabRoutes: TabRoutes = {
        settings: settings.index(event).url,
        games: games.index(event).url,
        leaderboard: leaderboard.index(event).url,
    };

    const tab = $derived.by(() => {
        switch ($page.url) {
            case tabRoutes.settings:
                return "settings";
            case tabRoutes.games:
                return "games";
            case tabRoutes.leaderboard:
                return "leaderboard";
            default:
                return "settings";
        }
    });

    let currentTab = $state("settings");

    const onChangeTab = (value: string) => {
        // A hack to avoid Tabs.Root updating currentTab before we navigate
        //   which would break view transitions
        currentTab = tab;

        const url = tabRoutes[value as keyof TabRoutes];
        if (url) {
            router.visit(url, { viewTransition: true, replace: true });
        }
    };

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
        <p class="event-date">{dayjs(event.starts_at).calendar()}</p>
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
    header {
        margin-bottom: 2rem;
    }

    h1 {
        font-size: var(--font-size-heading-1);
        font-weight: bold;
    }

    .event-date {
        font-size: var(--font-size-large);
    }

    .tab-list {
        position: fixed;
        display: grid;
        right: 0;
        left: 0;
        bottom: 4.75rem;
        justify-content: center;
        view-transition-name: tab-root;
        view-transition-class: slide-up;
    }

    .tab-text {
        z-index: 1;
        view-transition-class: slide-up;
    }
</style>
