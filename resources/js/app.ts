import { createInertiaApp } from "@inertiajs/svelte";
import { mount } from "svelte";
import "../css/app.css";
import Layout from "./layouts/app.svelte";
import "iconify-icon";
import dayjs from "dayjs";
import calendar from "dayjs/plugin/calendar";
import localizedFormat from "dayjs/plugin/localizedFormat";
import updateLocale from "dayjs/plugin/updateLocale";
import "dayjs/locale/nb";
import "dayjs/locale/en-gb";

dayjs.extend(calendar);
dayjs.extend(localizedFormat);
dayjs.extend(updateLocale);

dayjs.updateLocale("nb", {
    calendar: {
        lastDay: "[Yesterday at] LT",
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        lastWeek: "[last] dddd [at] LT",
        nextWeek: "dddd [at] LT",
        sameElse: "L",
    },
    weekdays: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ],
    weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    weekdaysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
});

dayjs.updateLocale("en-gb", {
    calendar: {
        lastDay: "[Yesterday at] LT",
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        lastWeek: "[last] dddd [at] LT",
        nextWeek: "dddd [at] LT",
        sameElse: "L",
    },
});

const supportedLocales: Record<string, string> = {
    nb: "nb",
    en: "en-gb",
};

function setDayjsLocaleFromBrowser() {
    const browserLocale = navigator.language || "en";

    let localeCode = supportedLocales[browserLocale];

    if (!localeCode) {
        const baseLocale = browserLocale.split("-")[0] ?? "en";
        localeCode = supportedLocales[baseLocale] || "en";
    }

    dayjs.locale(localeCode);
}

setDayjsLocaleFromBrowser();

createInertiaApp({
    resolve: (name: string) => {
        const pages = import.meta.glob("./pages/**/*.svelte", { eager: true });
        let page: any = pages[`./pages/${name}.svelte`];
        return { default: page.default, layout: page.layout || Layout };
    },
    setup({ el, App, props }: { el: Element; App: any; props: any }) {
        if (!el) throw new Error("Inertia app target element not found");

        mount(App, { target: el, props });
    },
});
