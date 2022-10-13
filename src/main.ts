import { createPinia } from 'pinia'
import { createSSRApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { i18n } from "./i18n"

import "@/assets/css/setting.css";
import "@/assets/css/global.css";

// SSR requires a fresh app instance per request, therefore we export a function
// that creates a fresh app instance. If using Vuex, we'd also be creating a
// fresh store here.
export function createApp() {
	const app = createSSRApp(App)
	const pinia = createPinia()
	app.use(pinia)
	app.use(router)
	app.use(i18n)
	return { app, router }
}
