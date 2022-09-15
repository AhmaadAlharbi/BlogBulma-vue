import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AddBlog from "../views/AddBlog.vue";
import UpdateBlog from "../views/UpdateBlog.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/add-blog",
    name: "AddBlog",
    component: AddBlog,
  },

  {
    path: "/blogs/:id",
    name: "UpdateBlog",
    component: UpdateBlog,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
