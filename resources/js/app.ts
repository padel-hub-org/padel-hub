import { createInertiaApp } from "@inertiajs/svelte";
import { mount } from "svelte";
import "../css/app.css";
import Layout from "./layouts/app.svelte";

createInertiaApp({
    resolve: (name: string) => {
        const pages = import.meta.glob("./pages/**/*.svelte", { eager: true });
        let page: any = pages[`./pages/${name}.svelte`];
        return { default: page.default, layout: page.layout || Layout };
    },
    setup({ el, App, props }) {
        if (!el) throw new Error("Inertia app target element not found");

        mount(App, { target: el, props });
    },
});
