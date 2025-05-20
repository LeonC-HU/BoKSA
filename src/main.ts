import "./assets/styles/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
// import Aura from "@primeuix/themes/aura";
import Material from "@primeuix/themes/material";

const app = createApp(App);

app.use(PrimeVue, {
    theme: {
        preset: Material,
        options: {
            darkModeSelector: ".p-dark",
        },
    },
    ripple: true,
});

app.mount("#app");
