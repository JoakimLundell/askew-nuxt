<template>
  <button>
    <slot></slot>
    <IconsLoader v-if="loading" />
    <template v-else>
      <IconsLogin v-show="icon === 'login'" />
      <IconsLogout v-show="icon === 'logout'" />
    </template>
  </button>
</template>

<script setup>
const props = defineProps({
  loading: { type: Boolean },
  icon: { type: String },
});
</script>

<style scoped>
button {
  border: none;
  border-radius: 3px;
  display: flex;
  align-items: center;
  gap: 2px;
  cursor: pointer;
  background: transparent;
  color: var(--text);
}
</style>
