<script lang="ts">
    import { inertia } from "@inertiajs/svelte";
    import { Button } from "$lib/components/ui/button";
    import { index } from "@/actions/App/Http/Controllers/PlayerController";

    let { children } = $props();
</script>

<div class="app">
    <main>
        {@render children()}
    </main>
    <nav>
        <Button href="/">Home</Button>
        <Button href={index().url}>Players</Button>
    </nav>
</div>

<style>
    nav {
        position: fixed;
        display: flex;
        gap: 1rem;
        justify-content: center;
        bottom: 0;
        left: 0;
        right: 0;
    }
    .app {
        max-width: 600px;
    }
    /* your styles go here */
</style>
