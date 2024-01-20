export const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/login',
    component: 'Login',
    wrappers: ['@/layouts/LoginLayout'],
  },
  {
    name: '首页',
    path: '/home',
    component: '@/pages/Home',
  },
  {
    path: '/admin',
    component: '@/layouts/AdminLayout',
    routes: [
      { path: '/admin/dashboard', component: '@/pages/Admin/Dashboard' },
    ],
  },

  { path: '/*', component: '@/pages/404' },
];
