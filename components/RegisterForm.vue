<template>
  <form @submit.prevent="onSubmit">
    <div class="input-wrapper">
      <label for="name">Your nic!</label>
      <input
        type="text"
        id="name"
        name="name"
        v-model="state.name"
        required
      />
    </div>
    <div class="input-wrapper">
      <label for="email">Email</label>
      <input
        type="text"
        id="email"
        name="email"
        v-model="state.email"
        required
      />
    </div>
    <div class="input-wrapper">
      <label for="password">Password</label>
      <input
        type="password"
        id="password"
        name="passwprd"
        v-model="state.password"
        required
      />
    </div>
    <div class="input-button-wrapper">
    <input type="submit" value="Create account" width="100%" :loading="true" style="background: red"></input>
  
    </div>

    
  </form>
</template>

<script setup>
import { useAuthStore } from "~/store/auth";
const props = defineProps({ loading: { type: Boolean } });
const authStore = useAuthStore();

const state = reactive({
  name: 'Joqe',
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
  authStore.register(state.name, state.email, state.password);
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
