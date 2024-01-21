import { Col, Row } from 'antd';
import AuthForm from './components/AuthForm';
import Header from './components/Header';

const Login = () => {
  return (
    <>
      <Header />
      <Row className="mt-32 2xl:mt-52">
        <Col span={5} xxl={6} md={5} xs={2}></Col>
        <Col span={8} xxl={6} md={8} xs={20}>
          <AuthForm />
        </Col>
      </Row>
    </>
  );
};

export default Login;
