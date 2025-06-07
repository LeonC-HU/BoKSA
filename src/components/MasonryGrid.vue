<script setup lang="ts">
import { inject, getCurrentInstance, onMounted, ref, Ref } from "vue";
import { useScriptTag } from "@vueuse/core";
import { VueMasonryPlugin } from "vue-masonry";
import Lorem from "vue-lorem-ipsum";

const cards = ref([
  // { id: 01, title: "Card 1", subtitle: "This is card 1.", href:"#", tags: [] },
  // { id: 02, title: "Card 2", subtitle: "This is card 2.", href:"#", tags: [] },
  // { id: 03, title: "Card 3", subtitle: "This is card 3.", href:"#", tags: [] },
  // { id: 04, title: "Card 4", subtitle: "This is card 4.", href:"#", tags: [] },
  // { id: 05, title: "Card 5", subtitle: "This is card 5.", href:"#", tags: [] },
  // { id: 06, title: "Card 6", subtitle: "This is card 6.", href:"#", tags: [] },
  // { id: 07, title: "Card 7", subtitle: "This is card 7.", href:"#", tags: [] },
  // { id: 08, title: "Card 8", subtitle: "This is card 8.", href:"#", tags: [] },
  // { id: 09, title: "Card 9", subtitle: "This is card 9.", href:"#", tags: [] },
  // { id: 10, title: "Card 10", subtitle: "This is card 10.", href:"#", tags: [] },
  { id:  1, title: "AD/DA conversie", subtitle: "Subtitel 01.", href:"https://canvas.hu.nl/courses/42152/pages/ad-slash-da-conversie", tags: [] },
  { id:  2, title: "Audition", subtitle: "Subtitel 02.", href:"https://canvas.hu.nl/courses/42152/pages/adobe-audition", tags: [] },
  { id:  3, title: "Akoestiek", subtitle: "Subtitel 03.", href:"https://canvas.hu.nl/courses/42152/pages/akoestiek", tags: [] },
  { id:  4, title: "Akoestiek van de ruimte controleren", subtitle: "Subtitel 04.", href:"https://canvas.hu.nl/courses/42152/pages/akoestiek-van-de-ruimte-controleren", tags: [] },
  { id:  5, title: "Analoge audiosignaal kabels", subtitle: "Subtitel 05.", href:"https://canvas.hu.nl/courses/42152/pages/analoge-audiosignaal-kabels", tags: [] },
  { id:  6, title: "Anatomie van het menselijk oor", subtitle: "Subtitel 06.", href:"https://canvas.hu.nl/courses/42152/pages/anatomie-van-het-menselijk-oor", tags: [] },
  { id:  7, title: "Andere audiobewerking software", subtitle: "Subtitel 07.", href:"https://canvas.hu.nl/courses/42152/pages/andere-audiobewerking-software", tags: [] },
  { id:  8, title: "Audio interfaces", subtitle: "Subtitel 08.", href:"https://canvas.hu.nl/courses/42152/pages/audio-interfaces", tags: [] },
  { id:  9, title: "Audio Software (basics)", subtitle: "Subtitel 09.", href:"https://canvas.hu.nl/courses/42152/pages/audio-software-basics", tags: [] },
  { id: 10, title: "De audio signaalketen", subtitle: "Subtitel 10.", href:"https://canvas.hu.nl/courses/42152/pages/de-audio-signaalketen", tags: [] },
  { id: 11, title: "De Equalizer (EQ)", subtitle: "Subtitel 11.", href:"https://canvas.hu.nl/courses/42152/pages/de-equalizer-eq", tags: [] },
  { id: 12, title: "De-esser", subtitle: "Subtitel 12.", href:"https://canvas.hu.nl/courses/42152/pages/de-esser", tags: [] },
  { id: 13, title: "DI’s (Direct Inputs Boxes)", subtitle: "Subtitel 13.", href:"https://canvas.hu.nl/courses/42152/pages/dis-direct-inputs-boxes", tags: [] },
  { id: 14, title: "Digital Audio Workstation (DAW) programma's", subtitle: "Subtitel 14.", href:"https://canvas.hu.nl/courses/42152/pages/digital-audio-workstation-daw-programmas", tags: [] },
  { id: 15, title: "Digitale signaal kabels", subtitle: "Subtitel 15.", href:"https://canvas.hu.nl/courses/42152/pages/digitale-signaal-kabels", tags: [] },
  { id: 16, title: "Drivers", subtitle: "Subtitel 16.", href:"https://canvas.hu.nl/courses/42152/pages/drivers", tags: [] },
  { id: 17, title: "Echo (Delay)", subtitle: "Subtitel 17.", href:"https://canvas.hu.nl/courses/42152/pages/echo-delay", tags: [] },
  { id: 18, title: "Exciter en SubBass", subtitle: "Subtitel 18.", href:"https://canvas.hu.nl/courses/42152/pages/exciter-en-subbass", tags: [] },
  { id: 19, title: "Expander", subtitle: "Subtitel 19.", href:"https://canvas.hu.nl/courses/42152/pages/expander", tags: [] },
  { id: 20, title: "Fase", subtitle: "Subtitel 20.", href:"https://canvas.hu.nl/courses/42152/pages/fase", tags: [] },
  { id: 21, title: "Fix it in the Mix", subtitle: "Subtitel 21.", href:"https://canvas.hu.nl/courses/42152/pages/fix-it-in-the-mix", tags: [] },
  { id: 22, title: "Flanger", subtitle: "Subtitel 22.", href:"https://canvas.hu.nl/courses/42152/pages/flanger", tags: [] },
  { id: 23, title: "Gain staging en voorkomen van clipping", subtitle: "Subtitel 23.", href:"https://canvas.hu.nl/courses/42152/pages/gain-staging-en-voorkomen-van-clipping", tags: [] },
  { id: 24, title: "Galm (Reverb)", subtitle: "Subtitel 24.", href:"https://canvas.hu.nl/courses/42152/pages/galm-reverb", tags: [] },
  { id: 25, title: "Garageband &amp; Logic Pro", subtitle: "Subtitel 25.", href:"https://canvas.hu.nl/courses/42152/pages/garageband-and-logic-pro", tags: [] },
  { id: 26, title: "Garbage in is garbage out!", subtitle: "Subtitel 26.", href:"https://canvas.hu.nl/courses/42152/pages/garbage-in-is-garbage-out", tags: [] },
  { id: 27, title: "Gate", subtitle: "Subtitel 27.", href:"https://canvas.hu.nl/courses/42152/pages/gate", tags: [] },
  { id: 28, title: "Gehoorverlies en gehoorbescherming", subtitle: "Subtitel 28.", href:"https://canvas.hu.nl/courses/42152/pages/gehoorverlies-en-gehoorbescherming", tags: [] },
  { id: 29, title: "Geluid digitaliseren", subtitle: "Subtitel 29.", href:"https://canvas.hu.nl/courses/42152/pages/geluid-digitaliseren", tags: [] },
  { id: 30, title: "Geluidsisolatie", subtitle: "Subtitel 30.", href:"https://canvas.hu.nl/courses/42152/pages/geluidsisolatie", tags: [] },
  { id: 31, title: "Golfvorm", subtitle: "Subtitel 31.", href:"https://canvas.hu.nl/courses/42152/pages/golfvorm", tags: [] },
  { id: 32, title: "Harmonischen", subtitle: "Subtitel 32.", href:"https://canvas.hu.nl/courses/42152/pages/harmonischen", tags: [] },
  { id: 33, title: "Het gehoor", subtitle: "Subtitel 33.", href:"https://canvas.hu.nl/courses/42152/pages/het-gehoor", tags: [] },
  { id: 34, title: "Hoe horen we?", subtitle: "Subtitel 34.", href:"https://canvas.hu.nl/courses/42152/pages/hoe-horen-we", tags: [] },
  { id: 35, title: "Hoofdtelefoons / In-Ear monitoring", subtitle: "Subtitel 35.", href:"https://canvas.hu.nl/courses/42152/pages/hoofdtelefoons-slash-in-ear-monitoring", tags: [] },
  { id: 36, title: "Installatie en software licenties", subtitle: "Subtitel 36.", href:"https://canvas.hu.nl/courses/42152/pages/installatie-en-software-licenties", tags: [] },
  { id: 37, title: "Kabels", subtitle: "Subtitel 37.", href:"https://canvas.hu.nl/courses/42152/pages/kabels", tags: [] },
  { id: 38, title: "Laptop / Audio computer (Mac & PC)", subtitle: "Subtitel 38.", href:"https://canvas.hu.nl/courses/42152/pages/laptop-slash-audio-computer-mac-and-pc", tags: [] },
  { id: 39, title: "Limiter", subtitle: "Subtitel 39.", href:"https://canvas.hu.nl/courses/42152/pages/limiter", tags: [] },
  { id: 40, title: "Luidspreker opstellingen", subtitle: "Subtitel 40.", href:"https://canvas.hu.nl/courses/42152/pages/luidspreker-opstellingen", tags: [] },
  { id: 41, title: "Luidsprekers en versterkers", subtitle: "Subtitel 41.", href:"https://canvas.hu.nl/courses/42152/pages/luidsprekers-en-versterkers", tags: [] },
  { id: 42, title: "Mengtafels", subtitle: "Subtitel 42.", href:"https://canvas.hu.nl/courses/42152/pages/mengtafels", tags: [] },
  { id: 43, title: "Microfoons", subtitle: "Subtitel 43.", href:"https://canvas.hu.nl/courses/42152/pages/microfoons", tags: [] },
  { id: 44, title: "MIDI", subtitle: "Subtitel 44.", href:"https://canvas.hu.nl/courses/42152/pages/midi", tags: [] },
  { id: 45, title: "MIDI controllers", subtitle: "Subtitel 45.", href:"https://canvas.hu.nl/courses/42152/pages/midi-controllers", tags: [] },
  { id: 46, title: "Modulation: Chorus, Flanger, Phaser, Rotor/Leslie, Tremelo", subtitle: "Subtitel 46.", href:"https://canvas.hu.nl/courses/42152/pages/modulation-chorus-flanger-phaser-rotor-slash-leslie-tremelo", tags: [] },
  { id: 47, title: "Overdrive, Distortion, Fuzz &amp; BitCrusher", subtitle: "Subtitel 47.", href:"https://canvas.hu.nl/courses/42152/pages/overdrive-distortion-fuzz-and-bitcrusher", tags: [] },
  { id: 48, title: "Overige soorten synthese", subtitle: "Subtitel 48.", href:"https://canvas.hu.nl/courses/42152/pages/overige-soorten-synthese", tags: [] },
  { id: 49, title: "Phaser", subtitle: "Subtitel 49.", href:"https://canvas.hu.nl/courses/42152/pages/phaser", tags: [] },
  { id: 50, title: "Plugins", subtitle: "Subtitel 50.", href:"https://canvas.hu.nl/courses/42152/pages/plugins", tags: [] },
  { id: 51, title: "Pre-amps", subtitle: "Subtitel 51.", href:"https://canvas.hu.nl/courses/42152/pages/pre-amps", tags: [] },
  { id: 52, title: "Protools, Studio One, Cakewalk, Cubase, Fruity Loops, etc.", subtitle: "Subtitel 52.", href:"https://canvas.hu.nl/courses/42152/pages/protools-studio-one-cakewalk-cubase-fruity-loops-etc", tags: [] },
  { id: 53, title: "Randapparatuur (selectie)", subtitle: "Subtitel 53.", href:"https://canvas.hu.nl/courses/42152/pages/randapparatuur-selectie", tags: [] },
  { id: 54, title: "Reaper", subtitle: "Subtitel 54.", href:"https://canvas.hu.nl/courses/42152/pages/reaper", tags: [] },
  { id: 55, title: "Rotor / Leslie", subtitle: "Subtitel 55.", href:"https://canvas.hu.nl/courses/42152/pages/rotor-slash-leslie", tags: [] },
  { id: 56, title: "Samplers", subtitle: "Subtitel 56.", href:"https://canvas.hu.nl/courses/42152/pages/samplers", tags: [] },
  { id: 57, title: "Sampling", subtitle: "Subtitel 57.", href:"https://canvas.hu.nl/courses/42152/pages/sampling", tags: [] },
  { id: 58, title: "Soorten geluidssystemen", subtitle: "Subtitel 58.", href:"https://canvas.hu.nl/courses/42152/pages/soorten-geluidssystemen", tags: [] },
  { id: 59, title: "Spectogram", subtitle: "Subtitel 59.", href:"https://canvas.hu.nl/courses/42152/pages/spectogram", tags: [] },
  { id: 60, title: "Stoorgeluiden bij een opname", subtitle: "Subtitel 60.", href:"https://canvas.hu.nl/courses/42152/pages/stoorgeluiden-bij-een-opname", tags: [] },
  { id: 61, title: "Stroomkabels", subtitle: "Subtitel 61.", href:"https://canvas.hu.nl/courses/42152/pages/stroomkabels", tags: [] },
  { id: 62, title: "Subtractieve synthese", subtitle: "Subtitel 62.", href:"https://canvas.hu.nl/courses/42152/pages/subtractieve-synthese", tags: [] },
  { id: 63, title: "Synthesizers", subtitle: "Subtitel 63.", href:"https://canvas.hu.nl/courses/42152/pages/synthesizers", tags: [] },
  { id: 64, title: "Test Pagina", subtitle: "Subtitel 64.", href:"https://canvas.hu.nl/courses/42152/pages/test-pagina", tags: [] },
  { id: 65, title: "Toonhoogte", subtitle: "Subtitel 65.", href:"https://canvas.hu.nl/courses/42152/pages/toonhoogte", tags: [] },
  { id: 66, title: "Tremelo", subtitle: "Subtitel 66.", href:"https://canvas.hu.nl/courses/42152/pages/tremelo", tags: [] },
  { id: 67, title: "Tuning: Pitch shift, Octaver, AutoTune", subtitle: "Subtitel 67.", href:"https://canvas.hu.nl/courses/42152/pages/tuning-pitch-shift-octaver-autotune", tags: [] },
  { id: 68, title: "Vocal FX: Vocoder, Talk Box en Vocal transform", subtitle: "Subtitel 68.", href:"https://canvas.hu.nl/courses/42152/pages/vocal-fx-vocoder-talk-box-en-vocal-transform", tags: [] },
  { id: 69, title: "Volume / Luidheid", subtitle: "Subtitel 69.", href:"https://canvas.hu.nl/courses/42152/pages/volume-slash-luidheid", tags: [] },
  { id: 70, title: "Wah wah", subtitle: "Subtitel 70.", href:"https://canvas.hu.nl/courses/42152/pages/wah-wah", tags: [] },
  { id: 71, title: "Wat is geluid?", subtitle: "Subtitel 71.", href:"https://canvas.hu.nl/courses/42152/pages/wat-is-geluid", tags: [] },
  { id: 72, title: "Wat is synthese?", subtitle: "Subtitel 72.", href:"https://canvas.hu.nl/courses/42152/pages/wat-is-synthese", tags: [] },
])
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
      <a
        :href="card.href"
        :title="card.title"
        target="_parent"
        rel="noopener noreferrer"
        class="block no-underline text-inherit">
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
          <template #footer>
          </template>
        </Card>
      </a>  
    </div>
  </div>
  <ScrollTop />
</template>
