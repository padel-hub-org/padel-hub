<script lang="ts">
    import { Tabs as TabsPrimitive } from "bits-ui";
    import { cn } from "$lib/utils.js";

    let {
        ref = $bindable(null),
        class: className,
        ...restProps
    }: TabsPrimitive.TriggerProps = $props();
</script>

<TabsPrimitive.Trigger
    bind:ref
    data-slot="tabs-trigger"
    class={cn(
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
        "shad-tab-trigger",
    )}
    {...restProps}
/>

<style>
    :global(.shad-tab-trigger) {
        cursor: pointer;
        color: var(--foreground);
        view-transition-class: slide-up;
    }
    :global(.shad-tab-trigger[data-state="active"]) {
        position: relative;
        color: oklch(from var(--primary) 0.9 c h);
        font-weight: bold;
        z-index: 0;
    }

    :global(.shad-tab-trigger[data-state="active"])::after {
        position: absolute;
        content: "";
        display: block;
        inset: 0;
        background-color: var(--card);
        border-radius: 0.375rem;
        z-index: -1;
        view-transition-name: shad-tab-trigger-active;
    }
</style>
