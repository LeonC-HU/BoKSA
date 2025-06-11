<script setup lang="ts">
import { useThemeState } from "../composables/useThemeConfig";
import AppConfig from "./AppConfig.vue";
import MainLogo from "./MainLogo.vue";
import { ref } from "vue";

// Import PrimeVue components (if using individual imports)
import Popover from 'primevue/popover'; // Changed from OverlayPanel
import Select from 'primevue/select';
import DatePicker from 'primevue/datepicker';
import SelectButton from 'primevue/selectbutton';

const { themeState } = useThemeState();

// Optional filter state
const filters = ref({
  category: null,
  date: null,
  status: null
});

const filterButton = ref();
const toggleSearchFilters = (event: MouseEvent) => {
  try {
    filterButton.value.toggle(event);
  } catch (error) {
    console.error("An error occurred while toggling search filters:", error);
  }
}

</script>

<template>
  <div class="sticky top-0 z-50">
    <Toolbar class="bg-surface-200 dark:bg-surface-900 pb-0 border-0 rounded-none">
      <template #start>
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <!-- Logo -->
            <MainLogo />
            <!-- Title -->
            <span class="ml-4 xs:flex xs:flex-col sm:ml-2">
              <span class="text-color-700 text-xl font-light leading-none"
                >CMD Utrecht</span
              >
              <div class="text-primary-600 text-sm font-medium leading-tight">
                <span class="sm:hidden">BoKSA</span>
                <span class="hidden sm:flex"
                  >Body of Knowledge Skills and Attitudes</span
                >
              </div>
            </span>
          </div>
        </div>
      </template>
      <!-- <template #center>
        No center section yet
      </template> -->
      <template #end>
        <!-- Theme settings -->
        <div class="flex items-center">
          <!-- Dark mode toggle -->
          <div class="relative">
            <Button
              v-if="themeState.darkMode.visible"
              class="text-surface"
              size="small"
              @click="themeState.darkMode.active = !themeState.darkMode.active"
              text
              rounded
              name="Toggle dark mode"
              aria-label="Toggle dark mode"
              icon="pi pi-sun">
              <i 
                :class="[
                  'pi',
                  'pi',
                  { 'pi-sun': themeState.darkMode.active, 'pi-moon': !themeState.darkMode.active },
                ]"/>
            </Button>
          </div>
          <!-- Theme configuration panel -->
          <div class="relative mr-1">
            <Button
              size="small"
              v-styleclass="{
                selector: '@next',
                enterFromClass: 'hidden',
                enterActiveClass: 'animate-scalein',
                leaveToClass: 'hidden',
                leaveActiveClass: 'animate-fadeout',
                hideOnOutsideClick: true,
              }"
              icon="pi pi-cog"
              text
              rounded
              name="Theme settings"
              aria-label="Theme settings" />
            <AppConfig />
          </div>
        </div>
      </template>
    </Toolbar>
    <div class="p-4 bg-surface-200 dark:bg-surface-900 ">
      <!-- Search and filter section -->
      <InputGroup class="w-auto">
        <IconField>
          <InputIcon class="ml-0.5 pi pi-search" />
          <InputText 
            name="search" 
            placeholder="Zoeken">
          </InputText>
        </IconField>
        <InputGroupAddon>
          <Button
            @click="toggleSearchFilters"
            icon="pi pi-filter"
            severity="secondary"
            variant="text"
            class="p-0 h-full rounded-l-none"
            aria-haspopup="true" 
            aria-controls="filter-panel" />
        </InputGroupAddon>
      </InputGroup>
      
      <!-- Filter Panel using Popover -->
      <Popover ref="filterButton" class="filter-panel">
        <div class="p-2 w-80">
          <h3 class="text-lg font-medium mb-3">Filter opties</h3>
          
          <!-- Filter options using PrimeVue components -->
          <div class="mb-3">
            <label for="category" class="block text-sm mb-1">Categorie</label>
            <Select 
              id="category" 
              v-model="filters.category" 
              :options="['Optie 1', 'Optie 2', 'Optie 3']"
              placeholder="Selecteer categorie" 
              class="w-full" />
          </div>
          
          <div class="mb-3">
            <label for="date-filter" class="block text-sm mb-1">Datum</label>
            <DatePicker 
              id="date-filter" 
              v-model="filters.date" 
              dateFormat="dd/mm/yy"
              placeholder="Selecteer datum" 
              class="w-full" />
          </div>
          
          <div class="mb-3">
            <label for="status" class="block text-sm mb-1">Status</label>
            <SelectButton 
              id="status" 
              v-model="filters.status" 
              :options="['Actief', 'Inactief', 'Alle']" 
              optionLabel=""
              class="w-full" />
          </div>
          
          <div class="flex justify-end gap-2 mt-4">
            <Button 
              label="Reset" 
              severity="secondary" 
              text 
              @click="filters = {category: null, date: null, status: null}" />
            <Button 
              label="Toepassen" 
              severity="primary" />
          </div>
        </div>
      </Popover>
    </div>
  </div>
</template>

<style scoped>
.animate-fadeout {
    animation: fadeout 0.15s linear;
}

.animate-scalein {
    animation: scalein 0.15s linear;
}

@keyframes fadeout {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

@keyframes scalein {
    0% {
        opacity: 0;
        transform: scaleY(0.8);
        transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
    }
    100% {
        opacity: 1;
        transform: scaleY(1);
    }
}

/* Styling for the filter panel */
:deep(.filter-panel) {
  max-width: 90vw;
}

@media (min-width: 640px) {
  :deep(.filter-panel) {
    max-width: 400px;
  }
}
</style>
