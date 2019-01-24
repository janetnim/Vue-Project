import Vue from "vue";
import Router from "vue-router";
import Signup from "../components/Signup"
import HelloWorld from "../components/HelloWorld"
import Books from "@/components/Books"

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/logo",
      name: "HelloWorld",
      component: HelloWorld,
    },
    {
      path: "/signup",
      name: "Signup",
      component: Signup,
    },
    {
      path: "/books",
      name: "Books",
      components: Books,
    }
  ]
});
