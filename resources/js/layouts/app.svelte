<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import { index as players } from "@/routes/players";
    import { home } from "@/routes";
    import { logout } from "@/routes";
    import { page, router } from "@inertiajs/svelte";
    import { onDestroy } from "svelte";
    import { parentPath } from "@/lib/utils/url";
    import { index as events } from "@/routes/events";
    import Feedback from "@/components/feedback.svelte";

    let { children } = $props();

    let user = $page.props.user;

    // Set up our MediaQueryList
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");

    // Update the store if OS preference changes
    const updateThemeOnChange = (e: MediaQueryListEvent) => {
        document.body.classList.toggle("dark", e.matches);
    };

    // Initial check
    if (prefersDarkMode.matches) {
        document.body.classList.add("dark");
    }

    prefersDarkMode.addEventListener("change", updateThemeOnChange);

    // Clean up if this component is destroyed
    onDestroy(() =>
        prefersDarkMode.removeEventListener("change", updateThemeOnChange),
    );
</script>

<div class="layout">
    <header class="shadow-xs">
        {#if $page.url !== home().url}
            <Button
                class="backButton"
                variant="ghost"
                size="icon"
                onclick={() =>
                    router.visit(parentPath($page.url), { replace: true })}
            >
                <iconify-icon
                    icon="mdi:chevron-left"
                    width="2.5rem"
                    height="2.5rem"
                >
                </iconify-icon>
            </Button>
        {/if}

        <p class="brand">Padel Hub</p>

        {#if user}
            <Button variant="ghost" onclick={() => router.post(logout())}>
                <iconify-icon icon="mdi:logout" width="1.5rem" height="1.5rem"
                ></iconify-icon>
            </Button>
        {:else}
            <Button variant="ghost" size="icon">
                <iconify-icon icon="mdi:login" width="1.5rem" height="1.5rem"
                ></iconify-icon>
            </Button>
        {/if}
    </header>

    <Feedback />

    <main>
        {@render children()}
    </main>
</div>

<div class="nav">
    <nav class="">
        <Button
            class={{ active: $page.url === home().url }}
            variant="bottomNav"
            size="icon"
            href={home()}
        >
            <iconify-icon icon="mdi:home" width="2.5rem" height="2.5rem"
            ></iconify-icon>
        </Button>

        <Button
            class={{ active: $page.url === events().url }}
            variant="bottomNav"
            size="icon"
            href={events()}
        >
            <iconify-icon icon="mdi:event-note" width="2rem" height="2rem"
            ></iconify-icon>
        </Button>

        <Button
            class={{ active: $page.url === players().url }}
            variant="bottomNav"
            size="icon"
            href={players()}
        >
            <iconify-icon icon="mdi:account-group" width="2rem" height="2rem"
            ></iconify-icon>
        </Button>
    </nav>
</div>

<style>
    .layout {
        display: grid;
        gap: 1rem;
    }

    header {
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 1rem;
        min-height: 3.5rem;
        padding-inline: 1rem 0.5rem;
        align-items: center;
        background-color: var(--nav-background);
        view-transition-name: header;
    }

    .layout :global(header:has(.backButton)) {
        grid-template-columns: auto 1fr auto;
        gap: 0.5rem;
        padding-inline-start: 0.5rem;
    }

    header .brand {
        font-weight: bold;
        font-size: var(--font-size-large);
        letter-spacing: -0.05rem;
        view-transition-name: brand;
        min-height: 1.5rem;
    }

    main {
        padding-inline: 1rem;
        margin-bottom: 5rem;
    }

    .nav {
        display: grid;
        justify-content: center;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        view-transition-name: bottom-nav;

        & nav {
            display: flex;
            gap: 2rem;
            width: 100dvw;
            padding: 0.5rem;
            max-width: 600px;
            background-color: var(--nav-background);
            justify-content: center;
            box-shadow: 0 -1px 2px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.05));
        }

        & :global(.active) {
            color: var(--secondary);
            position: relative;
        }

        & :global(.active)::after {
            content: "";
            display: block;
            position: absolute;
            bottom: -0.25rem;
            view-transition-name: nav-active-indicator;
            width: 100%;
            height: 2px;
            background-color: var(--secondary);
            border-radius: 2px;
        }
    }
</style>
