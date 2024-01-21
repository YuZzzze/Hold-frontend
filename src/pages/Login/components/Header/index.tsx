import LanguageToggle from '@/components/LanguageToggle';
import ThemeToggle from '@/components/ThemeToggle';
import { Layout, Space, theme } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

const { Header } = Layout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { t } = useTranslation();

  return (
    <Header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colorBgContainer,
      }}
    >
      <div className="text-2xl font-bold">{t('Hold')}</div>
      <Space>
        <ThemeToggle />
        <LanguageToggle />
      </Space>
    </Header>
  );
};

export default App;
