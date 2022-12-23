import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

/**
 * general components import
 */
import BaseButton from "@/components/common/BaseButton.vue";
import TheModal from "@/components/common/TheModal.vue";
import TheDropdown from "@/components/common/TheDropdown.vue";
import TheInput from "@/components/common/TheInput.vue";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
/**
 * General Components
 */
app.component("BaseButton", BaseButton);
app.component("TheModal", TheModal);
app.component("TheDropdown", TheDropdown);
app.component("TheInput", TheInput);

app.mount("#app");
