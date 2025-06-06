<script setup lang="ts">
import { useThemeState } from "../composables/useThemeConfig";

const {
  themeState,
  availableThemes,
  primaryColors,
  surfaceColors,
  setPrimaryColor,
  setSurfaceColor,
} = useThemeState();

</script>

<template>
  <div
    class="absolute top-12 w-64 xs:-right-28 p-4 bg-surface-0 dark:bg-surface-900 rounded-md shadow-lg border border-surface-200 dark:border-surface-700 origin-top z-50 hidden">
    <div class="flex flex-col gap-2">
      <!-- Primary Color Selection -->
      <div>
        <span class="text-sm text-surface-600 dark:text-surface-400 font-medium">Primaire kleur</span>
        <div class="pt-2 flex gap-2 flex-wrap justify-between">
          <button
            v-for="color of primaryColors"
            :key="color.name"
            type="button"
            :title="color.name"
            :class="[
              'border-0 w-5 h-5 rounded-full p-0 cursor-pointer',
              {'ring-2 ring-offset-2 ring-primary-500 ring-offset-white': (color.name === themeState.colors.primary.name)},
            ]"
            :style="{ backgroundColor: color.palette['500'] }"
            @click="setPrimaryColor(color)" />
        </div>
      </div>
      <!-- Surface Color Selection -->
      <div>
        <span class="text-sm text-surface-600 dark:text-surface-400 font-medium">Onderliggende kleur</span>
        <div class="pt-2 flex gap-2 flex-wrap justify-between">
          <button
            v-for="color of surfaceColors"
            :key="color.name"
            type="button"
            :title="color.name"
            :class="[
              'border-0 w-5 h-5 rounded-full p-0 cursor-pointer',
              {'ring-2 ring-offset-2 ring-primary-500 ring-offset-white': (color.name === themeState.colors.surface.name)},
            ]"
            :style="{ backgroundColor: color.palette['500'] }"
            @click="setSurfaceColor(color)" />
        </div>
      </div>
      <!-- Theme Selection -->
      <div class="flex flex-col gap-2 mt-1">
        <span class="text-sm text-surface-600 dark:text-surface-400 font-medium">Thema</span>
        <SelectButton
          name="Theme selection"
          size="small"
          v-model="themeState.theme"
          :options="availableThemes"
          :allowEmpty="false"
          optionLabel="label" />
      </div>
      <!-- Additional Settings -->
      <div 
        :class="[
          'flex mt-1',
          themeState.ripple.visible && themeState.rtl.visible ? 'justify-between' : 'justify-end'
        ]">
        <!-- Ripple Option -->
        <div
          v-if="themeState.ripple.visible"
          :class="[
            'flex flex-col',
            themeState.rtl.active ? 'ml-auto' : ''
          ]">
          <span class="text-sm text-surface-600 dark:text-surface-400 font-medium">
            Ripple effect
          </span>
          <ToggleSwitch
            v-model="themeState.ripple.active"
            class="mt-1"
            name="Ripple"
            aria-label="Toggle Ripple effect" />
        </div>
        <!-- RTL Option -->
        <div
          v-if="themeState.rtl.visible"
          :class="[
            'flex flex-col',
            themeState.rtl.active ? '' : 'ml-auto'
          ]">
          <span 
            :class="[
              'text-sm text-surface-600 dark:text-surface-400 font-medium',
              themeState.rtl.active ? 'text-left' : 'text-right'
            ]">
            RTL
          </span>
          <ToggleSwitch
            v-model="themeState.rtl.active"
            class="mt-1"
            name="RTL"
            aria-label="Toggle RTL (Right to Left)" />
        </div>
      </div>
    </div>
  </div>
</template>
