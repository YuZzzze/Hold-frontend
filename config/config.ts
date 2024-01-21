import { defineConfig } from '@umijs/max';
import { routes } from './routes';

export default defineConfig({
  antd: {
    configProvider: {},
  },
  access: {},
  model: {},
  initialState: {},
  request: {},
  routes,
  npmClient: 'pnpm',
  tailwindcss: {},
});
