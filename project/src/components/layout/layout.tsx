import Icons from '../icons/icons';
import {Outlet} from 'react-router-dom';

function Layout(): JSX.Element {
  return (
    <>
      <Icons/>
      <Outlet/>
    </>);
}

export default Layout;
