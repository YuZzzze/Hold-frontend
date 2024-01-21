import { Button, Card, Col, Form, Input, Row, Space, Tabs } from 'antd';
import { Store } from 'antd/lib/form/interface';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

// interface AuthFormProps {}

const AuthForm: React.FC = () => {
  const [form] = Form.useForm();
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [isPassword, setIsPassword] = useState<boolean>(true);

  const { t } = useTranslation();

  const toggleLogin = () => {
    setIsPassword(!isPassword);
  };
  const toggleAuthType = (value: string) => {
    if (value === 'login') {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  };

  const onFinish = (values: Store) => {
    console.log('Received values:', values);
    // 在这里处理登录或注册逻辑
  };

  return (
    <Card
      title={
        <Tabs
          defaultActiveKey=""
          centered
          items={[
            {
              key: 'login',
              label: <div className="text-xl">{t('登录')}</div>,
            },
            {
              key: 'register',
              label: <div className="text-xl">{t('注册')}</div>,
            },
          ]}
          onChange={toggleAuthType}
        />
      }
      bordered={false}
      headStyle={{ border: 'none', padding: 0 }}
      bodyStyle={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Form form={form} onFinish={onFinish} className="w-3/4">
        {isLogin ? (
          <>
            <Form.Item
              name="phone"
              rules={[
                {
                  required: true,
                  message: t('提醒输入', { name: t('手机号码') }),
                },
              ]}
            >
              <Input placeholder={t('手机号码')} />
            </Form.Item>

            {isPassword ? (
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: t('提醒输入', { name: t('密码') }),
                  },
                ]}
              >
                <Input.Password placeholder={t('密码')} />
              </Form.Item>
            ) : (
              <Form.Item
                name="verificationCode"
                rules={[
                  {
                    required: true,
                    message: t('提醒输入', {
                      name: t('验证码'),
                    }),
                  },
                ]}
              >
                <Row justify={'space-between'}>
                  <Col>
                    <Input placeholder={t('验证码')} />
                  </Col>
                  <Col>
                    <Button>{t('发送验证码')}</Button>
                  </Col>
                </Row>
                <Space></Space>
              </Form.Item>
            )}

            <a className="pb-6 block" onClick={toggleLogin}>
              {isPassword ? t('使用验证码登录') : t('使用密码登录')}
            </a>
          </>
        ) : (
          <>
            <Form.Item
              name="phone"
              rules={[
                {
                  required: true,
                  message: t('提醒输入', { name: t('手机号码') }),
                },
              ]}
            >
              <Input placeholder={t('手机号码')} />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: t('提醒输入', { name: t('密码') }),
                },
              ]}
            >
              <Input.Password placeholder={t('密码')} />
            </Form.Item>
            <Form.Item
              name="confirmPassword"
              dependencies={['password']}
              hasFeedback
              rules={[
                { required: true, message: t('请再次输入密码') },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject('两次密码输入不一致');
                  },
                }),
              ]}
            >
              <Input.Password placeholder={t('确认密码')} />
            </Form.Item>

            <Form.Item
              name="verificationCode"
              rules={[
                {
                  required: true,
                  message: t('提醒输入', { name: t('验证码') }),
                },
              ]}
            >
              <Row justify={'space-between'}>
                <Col>
                  <Input placeholder={t('验证码')} />
                </Col>
                <Col>
                  <Button>{t('发送验证码')}</Button>
                </Col>
              </Row>
              <Space></Space>
            </Form.Item>
          </>
        )}

        <Form.Item>
          <Button type="default" htmlType="submit" className="w-full">
            {isLogin ? t('登录') : t('注册')}
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default AuthForm;
