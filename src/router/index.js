import Vue from "vue";
import VueRouter from "vue-router";
import { ROUTES } from "@/config/constants";

Vue.use(VueRouter);

const routes = [
	{
		path: ROUTES.HOME,
		component: () => import("@/views/RightFirst.vue"),
	},
	{
		path: ROUTES.CONTENT,
		component: () => import("@/views/RightSecond.vue"),
	},
	{
		path: ROUTES.FAQ,
		component: () => import("@/views/RightThird.vue"),
	},
	{
		path: "*",
		redirect: ROUTES.HOME,
	},
];

const router = new VueRouter({ mode: "history", routes });

export default router;
