const url = document.location.href;
localStorage.setItem("url", url);
console.log(url);

import "./assets/styles/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import { useThemeState } from "./composables/useThemeConfig";

const { defaultConfig, initializeConfig } = useThemeState();

const app = createApp(App);
app.use(PrimeVue, defaultConfig);

// Pass $primevue instance to be able to set properties like Ripple from composable in AppConfig configurator
initializeConfig(app.config.globalProperties.$primevue);

app.mount("#app");
