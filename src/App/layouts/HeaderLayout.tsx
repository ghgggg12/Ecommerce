import { Outlet } from 'react-router';
import { Navigation } from '@widgets/Navigation/index';
import { NavProvider } from '@App/context/NavContext';

export const LayoutMain = () => {
  return (
    <>
      <NavProvider>
        <Navigation />
        <Outlet />
      </NavProvider>
    </>
  )
}