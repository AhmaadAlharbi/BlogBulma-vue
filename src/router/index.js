import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AddBlog from "../views/AddBlog.vue";
import UpdateBlog from "../views/UpdateBlog.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";

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
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/sign-up",
    name: "Signup",
    component: Signup,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
