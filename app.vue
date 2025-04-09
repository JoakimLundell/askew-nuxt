<template>
  <div>
    <AskewHeader />
    <div class="content">
      <NuxtPage />
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from "./store/auth";
const authStore = useAuthStore();

onBeforeMount(() => {
  authStore.init();
});
</script>

<style>
html {
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
  background-color: var(--background);
  color: var(--text);
}
.content {
  margin-top: var(--header);
}
.content section {
  scroll-snap-align: start;
  scroll-margin-top: var(--header);
  height: calc(100vh - 64px);
  width: 100%;
  overflow: hidden;
}
</style>
