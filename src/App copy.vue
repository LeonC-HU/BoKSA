<script setup lang="ts">
  // import Lorem from 'vue-lorem-ipsum';
</script>

<template>
  <div class="layout-container">
    <AppTopbar/>
    <!-- <MyDataView /> -->
    <div class="layout-grid">
      <div class="grid grid-cols-2 gap-8 corner-radius-3xl p-rounded:">
        <Card>
          <template #header class="m-0">
            <img class="object-cover" alt="user header" data-src="holder.js/100px200?auto=yes&outline=yes" />
          </template>
          <template #title>Advanced Card</template>
          <template #subtitle>Card subtitle</template>
          <template #content>
            <p class="m-0">
              <Lorem add="3s"></Lorem>
            </p>
          </template>
          <template #footer>
            <div class="flex gap-4 mt-1">
              <Button label="Cancel" severity="secondary" outlined class="w-full" />
              <Button label="Save" class="w-full" />
            </div>
          </template>
        </Card>
        <Card class="layout-card">
          <template #title>Simple Card</template>
          <template #content>
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                quas!
            </p>
          </template>
        </Card>
      </div>
      <StatsWidget />
      <div class="layout-grid-row">
        <SalesTrendWidget />
        <RecentActivityWidget />
      </div>
      <ProductOverviewWidget />
    </div>
    <AppFooter />
  </div>
</template>
