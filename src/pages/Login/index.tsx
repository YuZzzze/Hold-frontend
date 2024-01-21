import { Col, Row } from 'antd';
import AuthForm from './components/AuthForm';
import Header from './components/Header';

const Login = () => {
  return (
    <>
      <Header />
      <Row className="mt-32">
        <Col span={5}></Col>
        <Col span={8}>
          <AuthForm />
        </Col>
      </Row>
    </>
  );
};

export default Login;
