import { createRouter, createMemoryHistory, createWebHistory } from "vue-router"
import type { RouteRecordRaw } from 'vue-router'

function getRoutes() {
	const { routes } = loadRouters();
	/**
	 * 如果要对 routes 做一些处理，请在这里修改
	 */
	return routes;
}


console.log('isSSR->', import.meta.env.SSR);

const router = createRouter({
    history: import.meta.env.SSR
      ? createMemoryHistory('/')
      : createWebHistory('/'),
    routes: getRoutes()
})

router.beforeEach((to, from, next) => {
	next()
})

export default router;

/** 以下代码不要修改 */
function loadRouters() {

	const context = import.meta.glob('../views/**/*.vue')
	const routes = Object.keys(context).map((key: any) => {
		let name = key.replace(/(\.\.\/views\/|\.vue)/g, '');
		let path = "/" + name.toLowerCase();
		if (name === "Index") path = "/";
		return {
			path,
			name,
			component: context[key] // () => import('./views/**/*.vue')
		}
	})

    return { context, routes }
}
