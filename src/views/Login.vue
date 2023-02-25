<template>
  <div
    class="dark:bg-primary-dark h-full dark:text-white flex justify-center items-center"
  >
    <form
      class="container mx-auto max-w-[45rem] bg-primary-light dark:bg-primary rounded-md px-5 py-16"
      @submit.prevent="authenticate()"
    >
      <div class="flex items-center text-center mb-10">
        <h1
          class="flex-1 cursor-pointer hover:text-primary-lighter text-primary-dark-3 duration-300"
          :class="activeTag == 'login' ? 'text-white font-bold' : ''"
          @click="changeMode('login')"
        >
          Login
        </h1>
        <h1
          class="flex-1 cursor-pointer hover:text-primary-lighter text-primary-dark-3 duration-300"
          :class="activeTag == 'signup' ? 'text-white font-bold' : ''"
          @click="changeMode('signup')"
        >
          SignUp
        </h1>
      </div>
      <div class="mb-8">
        <label for="username" class="block font-semibold mb-2">Username</label>
        <input
          type="username"
          id="username"
          v-model="username"
          class="w-full rounded-md outline-none border-none p-2 text-black"
        />
      </div>
      <div class="mb-10">
        <label for="password" class="block font-semibold mb-2">Password</label>
        <input
          type="password"
          id="password"
          v-model="password"
          class="w-full rounded-md outline-none border-none p-2 text-black"
        />
      </div>
      <div>
        <button
          class="w-full text-center bg-primary-lighter rounded-full text-black p-4 mt-6 font-semibold hover:bg-white duration-300"
        >
          {{ activeTag === "login" ? "Login" : "Sign Up" }}
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { toast } from "vue3-toastify";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/user";

// Variables
const activeTag = ref("login");
const errors = ref([]);
const username = ref("");
const password = ref("");
const userStore = useUserStore();
const router = useRouter();
const authenticate = async () => {
  try {
    if (username.value.length <= 2) {
      errors.value.push("Username must be greater than 2 characters");
    }
    if (password.value.length <= 4) {
      errors.value.push("Password must be greater than 4 characters");
    }
    if (errors.value.length > 0) {
      errors.value.forEach((element) => {
        toast.error(element);
      });
      errors.value = [];
      return;
    }
    const user = {
      username: username.value,
      password: password.value,
    };
    if (activeTag.value == "login") {
      // Sign user in
      await userStore.signIn(user);
      router.push("/");
    } else {
      // Sign User up
      await userStore.signUp(user);
      router.push("/");
    }
  } catch (error) {
    toast.error(error);
  }
};

const changeMode = (mode) => {
  activeTag.value = mode;
};
</script>