import './i18n';

export async function getInitialState(): Promise<{ name: string }> {
  return { name: 'admin' };
}
