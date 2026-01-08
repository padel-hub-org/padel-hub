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

    interface Toast {
        type: string;
        message: string;
    }

    let currentToast: Toast | null = $state(null);
    let lastUrl = $state($page.url);

    $effect(() => {
        // Clear toast on navigation
        if ($page.url !== lastUrl) {
            currentToast = null;
            lastUrl = $page.url;
        }

        // Set new toast if present
        if ($page.flash?.toast) {
            currentToast = $page.flash.toast;
        }
    });
</script>

{#if currentToast}
    <div class="feedback-alert">
        <Alert.Root>
            <Alert.Description class="flex items-center gap-2">
                <iconify-icon
                    icon={getIconForType(currentToast.type)}
                    class={`icon-${currentToast.type}`}
                    width="1.5rem"
                    height="1.5rem"
                ></iconify-icon>
                {currentToast.message}
            </Alert.Description>
        </Alert.Root>
    </div>
{/if}

<style>
    .feedback-alert {
        position: sticky;
        top: 0.5rem;
        z-index: 50;
        width: auto;
        margin-inline: 0.5rem;
        view-transition-name: feedback-alert;
    }

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
