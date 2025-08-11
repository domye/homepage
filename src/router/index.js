import Vue from "vue";
import VueRouter from "vue-router";
// import HomeView from "@/views/HomeView.vue";
Vue.use(VueRouter);

// router/index.js
import RightFirst from "@/views/RightFirst.vue";
import RightSecond from "@/views/RightSecond.vue";
import RightThird from "@/views/RightThird.vue";
const routes = [
	{
		path: "",
		component: RightFirst,
	},
	{
		path: "/content",
		component: RightSecond,
	},
	{
		path: "/faq",
		component: RightThird,
	},
	{
		path: "/Project",
		redirect: "/",
	},
];

const router = new VueRouter({ mode: "history", routes });

export default router;
