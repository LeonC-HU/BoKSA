<script setup lang="ts">
import { provide, ref } from "vue";
import AppTopbar from "./components/AppTopbar.vue";
import MasonryGrid from "./components/MasonryGrid.vue";

// Provide global variable to set for using boilerplate content for testing when actual content is unavailable
const boilerplateContent = ref(true);
provide("boilerplateContent", boilerplateContent);

// Provide global variable to set testing conditions
const testing = ref(true);
provide("testing", testing);

defineExpose({
  boilerplateContent,
  testing,
});

</script>

<template>
  <AppTopbar />
  <MasonryGrid />
</template>
