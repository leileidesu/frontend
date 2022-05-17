import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	// {
	//   path: '/about',
	//   name: 'About',
	// route level code-splitting
	// this generates a separate chunk (about.[hash].js) for this route
	// which is lazy-loaded when the route is visited.
	// component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	// }
	{
		path: '/user',
		name: 'User',
		component: () => import('@/views/User/Main.vue'),
		children: [
			{
				path: 'login',
				component: () => import('@/views/User/Login.vue'),
			},
			{
				path: 'register',
				component: () => import('@/views/User/Register.vue'),
			},
		]
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
