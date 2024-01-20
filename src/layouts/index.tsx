import { Outlet } from '@umijs/max';
import { Layout as ALayout } from 'antd';

function Layout() {
  return (
    <ALayout style={{ minHeight: '100vh' }}>
      <Outlet></Outlet>
    </ALayout>
  );
}

export default Layout;
