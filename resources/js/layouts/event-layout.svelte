<script lang="ts">
    import { page } from "@inertiajs/svelte";
    import { router } from "@inertiajs/svelte";
    import * as Tabs from "@/lib/components/ui/tabs";
    import settings from "@/routes/events/settings/index";
    import type { Event } from "@/types/Event";
    import games from "@/routes/events/games";
    import type { Snippet } from "svelte";

    export interface Props {
        event: Event;
        children: Snippet;
    }
    interface TabRoutes {
        settings: string;
        games: string;
        leaderboard: string;
    }
    let { children, event }: Props = $props();

    const tabRoutes: TabRoutes = {
        settings: settings.index(event).url,
        games: games.index(event).url,
        //TODO: change this when leaderboard gets implemented
        leaderboard: settings.index(event).url,
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

    const onChangeTab = (value: string) => {
        const url = tabRoutes[value as keyof TabRoutes];
        if (url) {
            router.visit(url, { viewTransition: true });
        }
    };
</script>

<div class="event-layout">
    <Tabs.Root value={tab} onValueChange={onChangeTab}>
        <div class="tab-list">
            <Tabs.List>
                <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
                <Tabs.Trigger value="games">Games</Tabs.Trigger>
                <Tabs.Trigger value="leaderboard">Leaderboard</Tabs.Trigger>
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
    .tab-list {
        display: grid;
        view-transition-name: tab-root;
        justify-content: center;
        position: fixed;
        bottom: 3.75rem;
        left: 0;
        right: 0;
    }
</style>
