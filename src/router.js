import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/About_us',
      name: 'About_us',
      component: () => import('./views/About_us.vue')
    },
      {
        path: '/Find_recipe',
        name: 'Find_recipe',
        component: () => import('./views/Find_recipe.vue')
      },
      {
        path: '/Add_recipe',
        name: 'Add_recipe',
        component: () => import('./views/Add_recipe.vue')
      },
      {
        path: '/Login',
        name: 'Login',
        component: () => import('./views/Login.vue')
      },
      {
        path: '/My_recipes',
        name: 'My_recipes',
        component: () => import('./views/My_recipes.vue')
      },
  ]
})


