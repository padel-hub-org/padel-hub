<script lang="ts">
    import * as Alert from "@/lib/components/ui/alert";
    import { page } from "@inertiajs/svelte";

    const getIconForType = (type: string) => {
        switch (type) {
            case "success":
                return "mdi:success-circle";
            case "warning":
                return "mdi:warning";
            case "error":
                return "mdi:error";
            case "info":
            default:
                return "mdi:information";
        }
    };
</script>

{#if $page.flash?.toast}
    <Alert.Root>
        <Alert.Description class="flex items-center gap-2">
            <iconify-icon
                icon={getIconForType($page.flash.toast.type)}
                class={`icon-${$page.flash.toast.type}`}
                width="1.5rem"
                height="1.5rem"
            ></iconify-icon>
            {$page.flash?.toast?.message}
        </Alert.Description>
    </Alert.Root>
{/if}

<style>
    .icon-success {
        color: var(--success);
    }
    .icon-warning {
        color: var(--secondary);
    }
    .icon-error {
        color: var(--destructive);
    }
    .icon-info {
        color: var(--primary);
    }
</style>
