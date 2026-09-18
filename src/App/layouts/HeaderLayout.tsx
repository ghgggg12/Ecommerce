import { Outlet } from 'react-router'
import { Top } from '@widgets/Header/Top'

export const Layouts = () => {
  return (
    <>
      <Top />
      <Outlet />
    </>
  )
}