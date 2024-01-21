import { useAntdConfigSetter } from '@umijs/max';
import { theme } from 'antd';
import { changeLanguage } from 'i18next';
import { useEffect, useState } from 'react';
const { defaultAlgorithm, darkAlgorithm } = theme;

const themeKeys = {
  light: defaultAlgorithm,
  dark: darkAlgorithm,
};

const useGlobal = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(
    (localStorage.getItem('theme') as 'light' | 'dark') || 'light',
  );

  const [language, setLanguage] = useState(
    localStorage.getItem('language') ||
      localStorage.getItem('i18nextLng')?.slice(0, 2),
  );

  const setAntdConfig = useAntdConfigSetter();

  // 切换主题
  useEffect(() => {
    setAntdConfig({ theme: { algorithm: themeKeys[theme] } });
    localStorage.setItem('theme', theme);
  }, [theme]);

  // 切换语言
  useEffect(() => {
    changeLanguage(language);
    localStorage.setItem('language', language as string);
  }, [language]);

  return {
    theme,
    setTheme,
    language,
    setLanguage,
  };
};

export default useGlobal;
