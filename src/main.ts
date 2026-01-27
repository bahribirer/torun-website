import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import PrimeVue from "primevue/config";
import Lara from "@primevue/themes/lara";
import "./styles/theme.css";

// icons & layout utils
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import { createHead } from "@unhead/vue";

const head = createHead();
const app = createApp(App);

app.use(head);
app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: Lara,
    options: {
      darkModeSelector: ".dark-mode"
    }
  }
});

app.mount("#app");
