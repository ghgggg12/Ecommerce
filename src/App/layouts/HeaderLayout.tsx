import { Outlet } from 'react-router'
import { Header } from '@widgets/Header/Header.tsx'

export const Layouts = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}