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
import DeleteModal from "@/components/common/DeleteModal.vue";

import "./assets/main.css";

const app = createApp(App);

app.use(router);
app.use(createPinia());
/**
 * General Components
 */
app.component("BaseButton", BaseButton);
app.component("TheModal", TheModal);
app.component("TheDropdown", TheDropdown);
app.component("TheInput", TheInput);
app.component("DeleteModal", DeleteModal);

app.mount("#app");
