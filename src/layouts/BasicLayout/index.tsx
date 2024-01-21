import { Navigate, Outlet } from '@umijs/max';

function BasicLayout() {
  const isLogin = false;
  if (!isLogin) {
    return <Navigate to={'/login'} />;
  }

  return (
    <div>
      666
      <Outlet />
    </div>
  );
}

export default BasicLayout;
