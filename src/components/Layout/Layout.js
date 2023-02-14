import {Outlet} from 'react-router-dom';
import Sidebar from './SideBar/Sidebar';

function Layout() {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
}
export default Layout;
