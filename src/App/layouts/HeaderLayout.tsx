import { Outlet } from 'react-router';
import { Navigation } from '@widgets/Navigation/index';

export const LayoutMain = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  )
}