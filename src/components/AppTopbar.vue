<script setup lang="ts">
import { useThemeState } from "../composables/useThemeConfig";
import AppConfig from "./AppConfig.vue";
import MainLogo from "./MainLogo.vue";

const { themeState } = useThemeState();
</script>

<template>
  <Toolbar class="bg-surface-200 dark:bg-surface-900 p-4 border-b border-x-0 border-t-0 rounded-none sticky top-0 z-50">
    <template #start>
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <!-- Logo -->
          <MainLogo />
          <!-- Title -->
          <span class="hidden sm:flex sm:flex-col sm:ml-2">
            <span class="text-color-700 text-xl font-light leading-none"
              >CMD Utrecht</span
            >
            <div class="text-primary-600 text-sm font-medium leading-tight">
              <span class="md:hidden">BoKSA</span>
              <span class="hidden md:flex"
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
                { 'pi-moon': themeState.darkMode.active, 'pi-sun': !themeState.darkMode.active },
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
        <!-- Search and filter section -->
        <InputGroup class="w-auto max-w-[160px] xs-min-w-full preview xs:max-w-full sm::min-w-xs">
          <IconField>
            <InputIcon class="pi pi-search" />
            <InputText 
              name="search" 
              placeholder="Zoeken">
            </InputText>
          </IconField>
          <InputGroupAddon>
            <Button
              icon="pi pi-filter"
              severity="secondary"
              variant="text"
              class="p-0 h-full rounded-l-none" />
          </InputGroupAddon>
        </InputGroup>
      </div>
    </template>
  </Toolbar>
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

</style>
