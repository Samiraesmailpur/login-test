import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import inline_svg from './components/shared/inline_svg.vue';
import "./index.css";

const app = createApp(App);

app.use(router);

app.component('inline_svg', inline_svg);

app.mount("#app");
