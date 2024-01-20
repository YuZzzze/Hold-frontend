import { Navigate } from '@umijs/max';

function BaseLayout({ children }: any) {
  const isLogin = true;
  if (!isLogin) {
    return <Navigate to={'/login'} />;
  }

  return (
    <div>
      666
      {children}
    </div>
  );
}

export default BaseLayout;
