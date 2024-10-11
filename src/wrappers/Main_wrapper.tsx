import { Navbar } from '../components'
import { Outlet } from 'react-router-dom'

const Main_wrapper = () => {
  return (
    <>
        <Navbar/>
        <Outlet/>  
    </>
  )
}

export default Main_wrapper