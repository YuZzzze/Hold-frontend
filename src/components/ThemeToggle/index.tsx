import { useModel } from '@umijs/max';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';

const ThemeToggle = () => {
  const { theme, setTheme } = useModel('global');
  const { t } = useTranslation();
  return (
    <Button
      shape="round"
      onClick={() => {
        if (theme === 'light') {
          setTheme('dark');
        } else {
          setTheme('light');
        }
      }}
    >
      {theme === 'light' ? t('明亮') : t('暗黑')}
    </Button>
  );
};

export default ThemeToggle;
