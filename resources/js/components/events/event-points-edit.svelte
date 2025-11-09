<script lang="ts">
    import { Button } from "@/lib/components/ui/button";
    import * as ButtonGroup from "@/lib/components/ui/button-group";
    import { Error, Field, Label } from "@/lib/components/ui/field";
    import { Input } from "@/lib/components/ui/input";

    interface Props {
        gamePoints: number;
        error?: string | undefined;
    }

    let { gamePoints = $bindable(), error }: Props = $props();
</script>

<Field>
    <Label>Points per game</Label>
    <div class="flex gap-4">
        <Input
            type="number"
            step="1"
            name="game_points"
            bind:value={gamePoints}
            aria-invalid={!!error}
        />

        <ButtonGroup.Root>
            <Button variant="outline" onclick={() => (gamePoints = 16)}
                >16</Button
            >
            <Button variant="outline" onclick={() => (gamePoints = 21)}
                >21</Button
            >
        </ButtonGroup.Root>
    </div>

    {#if error}
        <Error>{error}</Error>
    {/if}
</Field>
