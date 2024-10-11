
import { Route,createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import { Home } from './pages'
import  { Main_wrapper }  from './wrappers'

const route  = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Main_wrapper/>}>
      <Route index element={<Home/>}/>
    </Route>
  )
)

const App = () => {
  return <RouterProvider router={route}/>
}

export default App
