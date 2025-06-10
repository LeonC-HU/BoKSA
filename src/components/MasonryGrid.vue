<script setup lang="ts">
import { inject, getCurrentInstance, nextTick, onMounted, ref, Ref, watch } from "vue";
import Lorem from "vue-lorem-ipsum";
import { VueMasonryPlugin } from "vue-masonry";
import { useScriptTag } from "@vueuse/core";
import { CardData, audioCards, testCards } from "../data/Cards"

const boilerplateContent: Ref<boolean> = inject<Ref<boolean>>("boilerplateContent", ref(false));
if (boilerplateContent.value) {
  useScriptTag("./src/holder.min.js");
}
watch(() => boilerplateContent.value, () => {
  redrawCards();
})

const testing: Ref<boolean> = inject<Ref<boolean>>("testing", ref(false));
const cards: Ref<CardData[]> = ref(testing.value ? testCards : audioCards);
watch(() => testing.value, (newValue: boolean) => {
  cards.value = newValue ? testCards : audioCards;
  redrawCards();
})

const currentInstance = getCurrentInstance();
if (currentInstance) {
  currentInstance.appContext.app.use(VueMasonryPlugin);
}

async function redrawCards(instance = currentInstance, delay = 500): Promise<void> {
  await nextTick();
  
  if (window.Holder) {
    await window.Holder.run();
  }

  if (instance) {
    await new Promise(resolve => setTimeout(() => {
      instance.appContext.app.config.globalProperties.$redrawVueMasonry();
      resolve(undefined);
    }, delay));
  }
}

onMounted(() => {
  redrawCards();
});

declare global {
  interface Window {
    Holder: {
      run: () => void;
    }
  }
}
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
      <a
        :href="card.href"
        :title="card.title"
        target="_parent"
        rel="noopener noreferrer"
        class="block no-underline text-inherit">
          <Card
          class="dark:bg-surface-800 mx-0 my-2 md:mr-4 rounded-lg transition-all duration-250 hover:scale-[1.025] transform hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)] dark:hover:shadow-[0px_0px_4px_4px_rgba(255,255,255,0.2)]"
        >
          <template
            #header
            class="m-0">
            <img
              v-if="boilerplateContent"
              class="object-cover px-6 pt-6"
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
                v-if="boilerplateContent"
                :key="`lorem-${card.id}`"
                add="4s" />
            </p>
          </template>
          <template #footer>
          </template>
        </Card>
      </a>  
    </div>
  </div>
  <ScrollTop />
</template>
