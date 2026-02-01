import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
import Components from "unplugin-vue-components/vite";
import { PrimeVueResolver } from "@primevue/auto-import-resolver";

// https://vitejs.dev/config/
export default defineConfig({
    base: './',
    plugins: [
        vue(),
        vueDevTools({
          launchEditor: 'code',
        }),
        Components({
            resolvers: [PrimeVueResolver()],
        }),
        tailwindcss(),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    server: {
      allowedHosts: ['C1415152.local']
    },
});
