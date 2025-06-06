<script setup lang="ts">
import { provide, ref } from "vue";
import AppTopbar from "./components/AppTopbar.vue";
import MasonryGrid from "./components/MasonryGrid.vue";

// Provide global variable to set for using boilerplate content for testing when actual content is unavailable
const useBoilerplateContent = ref(true);
provide("useBoilerplateContent", useBoilerplateContent);
defineExpose({
  useBoilerplateContent,
});
</script>

<template>
  <AppTopbar />
  <MasonryGrid />
</template>
