import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/vue-my-notes-app/',
      component: () => import('./components/NotesList.vue'),
    },
    {
      path: '/todo-list/:id',
      component: () => import('./components/TodoList.vue'),
    }
  ],
});
