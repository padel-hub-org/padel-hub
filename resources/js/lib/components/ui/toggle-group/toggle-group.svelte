<script lang="ts" module>
    import { getContext, setContext } from "svelte";
    import type { VariantProps } from "tailwind-variants";
    import { toggleVariants } from "$lib/components/ui/toggle/index.js";

    type ToggleVariants = VariantProps<typeof toggleVariants>;

    interface ToggleGroupContext extends ToggleVariants {
        spacing?: number;
        orientation?: "horizontal" | "vertical";
    }

    export function setToggleGroupCtx(props: ToggleGroupContext) {
        setContext("toggleGroup", props);
    }

    export function getToggleGroupCtx() {
        return getContext<Required<ToggleGroupContext>>("toggleGroup");
    }
</script>

<script lang="ts">
    import { ToggleGroup as ToggleGroupPrimitive } from "bits-ui";
    import { cn } from "$lib/utils.js";

    let {
        ref = $bindable(null),
        value = $bindable(),
        class: className,
        size = "default",
        spacing = 0,
        orientation = "horizontal",
        variant = "default",
        ...restProps
    }: ToggleGroupPrimitive.RootProps &
        ToggleVariants & {
            spacing?: number;
            orientation?: "horizontal" | "vertical";
        } = $props();

    setToggleGroupCtx({
        get variant() {
            return variant;
        },
        get size() {
            return size;
        },
        get spacing() {
            return spacing;
        },
        get orientation() {
            return orientation;
        },
    });
</script>

<!--
Discriminated Unions + Destructing (required for bindable) do not
get along, so we shut typescript up by casting `value` to `never`.
-->
<ToggleGroupPrimitive.Root
    bind:value={value as never}
    bind:ref
    {orientation}
    data-slot="toggle-group"
    data-variant={variant}
    data-size={size}
    data-spacing={spacing}
    style={`--gap: ${spacing}`}
    class={cn(
        "rounded-lg data-[size=sm]:rounded-[min(var(--radius-md),10px)] group/toggle-group flex w-fit flex-row items-center gap-[--spacing(var(--gap))] data-vertical:flex-col data-vertical:items-stretch data-[spacing=0]:[&>*:not(:first-child)]:rounded-l-none data-[spacing=0]:[&>*:not(:last-child)]:rounded-r-none data-[spacing=0]:[&>*:not(:first-child)]:border-l-0 data-vertical:data-[spacing=0]:[&>*:not(:first-child)]:rounded-l-lg data-vertical:data-[spacing=0]:[&>*:not(:last-child)]:rounded-r-lg data-vertical:data-[spacing=0]:[&>*:not(:first-child)]:rounded-t-none data-vertical:data-[spacing=0]:[&>*:not(:last-child)]:rounded-b-none data-vertical:data-[spacing=0]:[&>*:not(:first-child)]:border-l-0 data-vertical:data-[spacing=0]:[&>*:not(:first-child)]:border-t-0",
        className,
    )}
    {...restProps}
/>
