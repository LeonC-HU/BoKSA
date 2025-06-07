<script setup lang="ts">
import { inject, getCurrentInstance, onMounted, ref, Ref } from "vue";
import { useScriptTag } from "@vueuse/core";
import { VueMasonryPlugin } from "vue-masonry";
import Lorem from "vue-lorem-ipsum";

const cards = ref([
  { id: 1, title: "Card 1", subtitle: "This is card 1." },
  { id: 2, title: "Card 2", subtitle: "This is card 2." },
  { id: 3, title: "Card 3", subtitle: "This is card 3." },
  { id: 4, title: "Card 4", subtitle: "This is card 4." },
  { id: 5, title: "Card 5", subtitle: "This is card 5." },
  { id: 6, title: "Card 6", subtitle: "This is card 6." },
  { id: 7, title: "Card 7", subtitle: "This is card 7." },
  { id: 8, title: "Card 8", subtitle: "This is card 8." },
  { id: 9, title: "Card 9", subtitle: "This is card 9." },
  { id: 10, title: "Card 10", subtitle: "This is card 10." },
]);

const useBoilerplateContent = inject<Ref<boolean>>(
  "useBoilerplateContent",
  ref(false)
);

if (useBoilerplateContent.value) {
  useScriptTag("./src/holder.min.js");
}

const instance = getCurrentInstance();
if (instance) {
  instance.appContext.app.use(VueMasonryPlugin);
}

onMounted(() => {
  if (instance) {
    setTimeout(() => {
      instance.appContext.app.config.globalProperties.$redrawVueMasonry();
    }, 500);
  }
});

</script>

<template>
  <div
    class="py-2 mx-4 md:mr-0"
    v-masonry
    item-selector=".item"
    transition-duration="0.25s">
    <div
      class="item md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5"
      v-masonry-tile
      v-for="card in cards"
      :key="card.id">
      <Card class="mx-0 my-2 md:mr-4 rounded">
        <template
          #header
          class="m-0">
          <img
            class="object-cover"
            data-src="holder.js/100px200?random=yes&outline=yes" />
        </template>
        <template #title>
          {{ card.title }}
        </template>
        <template #subtitle>
          {{ card.subtitle }}
        </template>
        <template #content>
          <p class="mt-2">
            <Lorem
              v-if="useBoilerplateContent"
              add="4s" />
          </p>
        </template>
      </Card>
    </div>
  </div>
  <ScrollTop />
</template>
