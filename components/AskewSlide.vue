<template>
  <div
    class="slider-wrapper"
    @click="closeSlider"
    :class="open ? 'open' : ''"
  >
    <div
      class="slider"
      :class="open ? 'open' : ''"
      @click.stop=""
    >
      <div class="slide-header">
        <div v-html="title"></div>
        <div>
          <IconsBack @click="closeSlider" />
        </div>
      </div>
      <div class="slide-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
const open = defineModel("open", { default: false });
const props = defineProps({
  title: { type: String },
});

const closeSlider = () => {
  open.value = !open.value;
};
</script>

<style scoped>
.slider-wrapper {
  position: fixed;
  right: 0;
  top: var(--header);
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  overflow: hidden;
  transition: 1s ease;
  opacity: 0;
  visibility: hidden;
}
.slider-wrapper.open {
  opacity: 1;
  visibility: inherit;
}
.slider {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  background: silver;
  z-index: 1001;

  transition-duration: 0.5s;
  transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
  transform: translateX(100%);
  box-shadow: -2px 0 12px black;
}
.slider.open {
  transform: translateX(0);
}
/*@keyframes open {
  from: {
    transform: translateX(100%);
  }
  to: {
    transform: translateX(0%);
  }
}*/
.slide-header {
  display: flex;
  align-items: center;
  border-bottom: 1px solid white;
}
.slide-header > *:first-child {
  flex: 1;
}
.slide-header > * {
  padding: var(--padding);
}
.slide-content {
  padding: var(--padding);
}
</style>
