import { useAccess } from '@/.umi/plugin-access';
import { Navigate, Outlet } from '@umijs/max';

const AdminWrapper = () => {
  const access = useAccess();
  console.log(access);

  if (access.canSeeAdmin) {
    return <Outlet />;
  } else {
    return <Navigate to={'/'} />;
  }
};

export default AdminWrapper;
