export const routes = [
  {
    path: '/login',
    component: './Login',
  },
  {
    path: '/',
    component: '@/layouts/BasicLayout',
    routes: [
      {
        path: '/',
        redirect: '/home',
      },
      {
        name: '首页',
        path: '/home',
        component: './Home',
      },
    ],
  },
  {
    path: '/admin',
    component: '@/layouts/AdminLayout',
    routes: [{ path: '/admin/dashboard', component: './Admin/Dashboard' }],
  },

  { path: '/*', component: '@/pages/404' },
];
