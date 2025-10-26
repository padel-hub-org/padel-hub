<script lang="ts">
    import { redirectToGoogle } from "@/actions/App/Http/Controllers/AuthController";

    import { Button } from "@/lib/components/ui/button";
</script>

<div>
    <h1>Welcome to the Authentication Page</h1>

    <Button href={redirectToGoogle().url}>Log in with Google</Button>
</div>
