<template>
  <form @submit.prevent="onSubmit">
    <div class="input-wrapper">
      <label for="name">Your nic!</label>
      <input
        type="text"
        name="name"
        v-model="state.email"
        required
      />
    </div>
    <div class="input-wrapper">
      <label for="password">Password</label>
      <input
        type="password"
        name="passwprd"
        v-model="state.password"
        required
      />
    </div>
    <div class="input-button-wrapper">
    <input type="submit" value="Login" width="100%" :loading="true"></input>
    </div>

    
  </form>
</template>

<script setup>
import { useAuthStore } from "~/store/auth";
const props = defineProps({ loading: { type: Boolean } });
const authStore = useAuthStore();

const state = reactive({
  email: "jocke@bluestripes.se", //undefined,
  password: "password", //undefined,
});

const validate = (state) => {
  const errors = [];
  if (!state.email) errors.push({ name: "email", message: "Required" });
  if (!state.password) errors.push({ name: "password", message: "Required" });
  return errors;
};

async function onSubmit(event) {
  authStore.login(state.email, state.password);
}
</script>
<style scoped>

.input-wrapper {
  display: flex;
  flex-direction: column;
}
.input-button-wrapper {
  display: flex;
  flex-direction: column;
  margin: 24px 0
}
</style>
