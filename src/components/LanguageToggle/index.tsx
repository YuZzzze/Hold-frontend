import { useModel } from '@umijs/max';
import { Button } from 'antd';

const LanguageToggle = () => {
  const { language, setLanguage } = useModel('global');

  const toggleLanguage = () => {
    if (language === 'zh') {
      setLanguage('en');
    } else {
      setLanguage('zh');
    }
  };

  return (
    <Button onClick={toggleLanguage} shape="round">
      {language === 'zh' ? '中文' : 'English'}
    </Button>
  );
};

export default LanguageToggle;
