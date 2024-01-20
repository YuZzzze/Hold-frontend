import { Outlet } from '@umijs/max';
const AdminLayout = () => {
  return (
    <div>
      admin
      <Outlet />
    </div>
  );
};

export default AdminLayout;
