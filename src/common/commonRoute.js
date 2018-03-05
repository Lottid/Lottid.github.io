export const NotFound = {
  path: 'notFound',
  component: resolve => require(['@/components/NotFound/not-found.vue'], resolve),
  beforeEnter(to, from, next) {
    next();
  }
};
export const Welcome = {
  path: '/',
  component: resolve => require(['@/components/Welcome/Welcome.vue'], resolve),
  beforeEnter(to, from, next) {
    next();
  }
};
