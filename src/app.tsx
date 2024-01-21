import { RuntimeAntdConfig } from '@umijs/max';
import { theme } from 'antd';
import './i18n';

export async function getInitialState(): Promise<{ name: string }> {
  return { name: 'admin' };
}

export const antd: RuntimeAntdConfig = (memo) => {
  if (!localStorage.getItem('theme')) {
    localStorage.setItem('theme', 'light');
  }
  memo.theme ??= {};
  memo.theme.algorithm =
    localStorage.getItem('theme') === 'light'
      ? theme.defaultAlgorithm
      : theme.darkAlgorithm;

  memo.theme.token = { borderRadius: 4 };

  return memo;
};
