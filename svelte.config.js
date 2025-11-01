import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

const config = {
    // Note the additional `{ script: true }`
    preprocess: vitePreprocess({ script: true }),
};

export default config;
