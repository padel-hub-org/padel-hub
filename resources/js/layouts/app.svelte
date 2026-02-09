<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import { index as players } from "@/routes/players";
    import { home, redirectToGoogle } from "@/routes";
    import { logout } from "@/routes";
    import { page, router } from "@inertiajs/svelte";
    import { onDestroy } from "svelte";
    import { index as events } from "@/routes/events";
    import Feedback from "@/components/feedback.svelte";

    let { children } = $props();

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
        {#if $page.props.backUrl}
            <Button
                class="backButton"
                variant="ghost"
                size="icon"
                onclick={() =>
                    router.visit($page.props.backUrl, {
                        replace: true,
                        viewTransition: true,
                    })}
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

        {#if $page.props.user}
            <Button variant="ghost" size="icon" href={logout()} viewTransition>
                <iconify-icon icon="mdi:logout" width="1.5rem" height="1.5rem"
                ></iconify-icon>
            </Button>
        {:else}
            <Button variant="ghost" size="icon" href={redirectToGoogle()}>
                <iconify-icon icon="mdi:login" width="1.5rem" height="1.5rem"
                ></iconify-icon>
            </Button>
        {/if}
    </header>

    <main class="content">
        <Feedback />
        {@render children()}
    </main>

    <nav class="nav">
        <Button
            class={{
                active: $page.url === home().url,
                navButton: true,
            }}
            variant="bottomNav"
            size="icon"
            href={home()}
            viewTransition
        >
            <iconify-icon
                icon={$page.url === home().url
                    ? "material-symbols:home-rounded"
                    : "material-symbols:home-outline-rounded"}
                width="1.5rem"
                height="1.5rem"
            ></iconify-icon>
            Home
        </Button>

        <Button
            class={{
                active: $page.url.startsWith(events().url),
                navButton: true,
            }}
            variant="bottomNav"
            size="icon"
            href={events()}
            viewTransition
        >
            <iconify-icon
                icon={$page.url.startsWith(events().url)
                    ? "material-symbols:event-note-rounded"
                    : "material-symbols:event-note-outline"}
                width="1.5rem"
                height="1.5rem"
            ></iconify-icon>
            Events
        </Button>

        <Button
            class={{
                active: $page.url.startsWith(players().url),
                navButton: true,
            }}
            variant="bottomNav"
            size="icon"
            href={players()}
            viewTransition
        >
            <iconify-icon
                icon={$page.url.startsWith(players().url)
                    ? "material-symbols:group-rounded"
                    : "material-symbols:group-outline-rounded"}
                width="1.5rem"
                height="1.5rem"
            ></iconify-icon>
            Players
        </Button>
    </nav>
</div>

<style>
    .layout {
        display: grid;
        min-height: 100dvh;
        grid-template-rows: auto 1fr auto;
    }

    header {
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 1rem;
        min-height: 3.5rem;
        padding-inline: 1rem 0.5rem;
        align-items: center;
        background-color: var(--top-nav-background);
        view-transition-name: header;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 10;
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

    .content {
        margin-block-start: 4rem;
        margin-block-end: 8rem;
        padding-inline: 1rem;
        padding-bottom: 1rem;
    }

    .nav {
        width: 100%;
        view-transition-name: bottom-nav;
        display: flex;
        gap: 2rem;
        width: 100dvw;
        padding: 0.75rem 1rem;
        max-width: 600px;
        background-color: var(--bottom-nav-background);
        justify-content: space-around;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 10;
        & :global(.navButton) {
            flex-direction: column;
            gap: 0.25rem;
            color: var(--muted-foreground);
            width: auto;
            height: auto;
        }

        & :global(.active) {
            color: var(--secondary);
        }
    }
</style>
