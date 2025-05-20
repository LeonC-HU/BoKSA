<script setup lang="ts">
import { ref } from 'vue'
import { useLayout } from "./composables/useLayout";
import AppConfig from "./components/AppConfig.vue";

import Card from 'primevue/card'
import Button from 'primevue/button'

import Lorem from 'vue-lorem-ipsum'

const { isDarkMode, toggleDarkMode } = useLayout();

const cards = ref([
  { id: 1, title: 'Card 1', subtitle: 'This is card 1.' },
  { id: 2, title: 'Card 2', subtitle: 'This is card 2.' },
  { id: 3, title: 'Card 3', subtitle: 'This is card 3.' },
  { id: 4, title: 'Card 4', subtitle: 'This is card 4.' },
  { id: 5, title: 'Card 5', subtitle: 'This is card 5.' },
  { id: 6, title: 'Card 6', subtitle: 'This is card 6.' },
  { id: 7, title: 'Card 7', subtitle: 'This is card 7.' },
  { id: 8, title: 'Card 8', subtitle: 'This is card 8.' },
])

</script>
<template>
  <nav class="card">
    <Toolbar class="m-4 rounded-lg">
      <template #start>
        <MainLogo />
      </template>
      <template #end>
        <Button @click="toggleDarkMode" severity="primary" text>
          <i :class="['pi ', 'pi ', { 'pi-moon': isDarkMode, 'pi-sun': !isDarkMode }]" />
        </Button>
        <div class="mr-4">
          <Button v-styleclass="{
            selector: '@next',
            enterFromClass: 'hidden',
            enterActiveClass: 'animate-scalein',
            leaveToClass: 'hidden',
            leaveActiveClass: 'animate-fadeout',
            hideOnOutsideClick: true,
          }" icon="pi pi-cog" text aria-label="Settings" />
          <AppConfig />
        </div>
        <IconField>
          <InputIcon>
            <i class="pi pi-search" />
          </InputIcon>
          <InputText placeholder="Search" />
        </IconField>
      </template>
    </Toolbar>
  </nav>
  <main class="container gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto px-4 py-4">
    <div v-for="card in cards" :key="card.id" class="mb-6">
      <Card class="p-4">
        <template #header class="m-0">
          <img class="object-cover" alt="user header" data-src="holder.js/100px200?auto=yes&outline=yes" />
        </template>
        <template #title>
          {{ card.title }}
        </template>
        <template #subtitle>
          {{ card.subtitle }}
        </template>
        <template #content>
          <p class="mt-2">
            <Lorem add="3s"></Lorem>
          </p>
        </template>
      </Card>
    </div>
  </main>
</template>