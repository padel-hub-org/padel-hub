import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { defineConfig } from "vite";
import { wayfinder } from "@laravel/vite-plugin-wayfinder";
import laravel from "laravel-vite-plugin";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
    resolve: {
        alias: {
            $lib: path.resolve("./resources/js/lib"),
        },
    },
    plugins: [
        tailwindcss(),
        laravel({
            input: ["resources/css/app.css", "resources/js/app.ts"],
            refresh: true,
        }),
        svelte(),
        wayfinder(),
    ],
});
