<template>
  <div style="display: flex; align-items: center; gap: 6px">
    <!--AskewButton>Sign up</AskewButton-->

    <AskewButton
      v-if="isAuthenticated"
      :loading="loading"
      icon="logout"
      @click="authStore.logout()"
      >Logout</AskewButton
    >
    <AskewButton
      v-else
      icon="login"
      @click="authStore.toggleOpenLogin()"
      :loading="loading"
      >Login
    </AskewButton>

    <AskewSlide
      v-model:open="openLogin"
      title="Login"
    >
      <LoginForm :loading="true" />
      <p>
        I don't have an account and would like to register,
        <a
          href=""
          @click.prevent="toggleOpenRegister"
          >click here</a
        >
      </p>
    </AskewSlide>

    <AskewSlide
      v-model:open="openRegister"
      title="Register"
    >
      <RegisterForm />
    </AskewSlide>
  </div>
</template>

<script setup>
import { useAuthStore } from "../store/auth";
const authStore = useAuthStore();
const { openLogin, openRegister, isAuthenticated, loading } =
  storeToRefs(authStore);

const toggleOpenRegister = () => {
  authStore.toggleOpenLogin();
  authStore.toggleOpenRegister();
};
</script>
