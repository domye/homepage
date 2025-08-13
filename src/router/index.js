import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
	{
		path: "",
		component: () => import("@/views/RightFirst.vue"),
	},
	{
		path: "/content",
		component: () => import("@/views/RightSecond.vue"),
	},
	{
		path: "/faq",
		component: () => import("@/views/RightThird.vue"),
	},
	{
		path: "/Project",
		redirect: "/",
	},
];

const router = new VueRouter({ mode: "history", routes });

export default router;
