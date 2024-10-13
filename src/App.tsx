
import { Route,createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import { Home, ArtGallery, Artists, About, IndividualArtPage } from './pages'
import  { Main_wrapper }  from './wrappers'

const route  = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Main_wrapper/>}>
      <Route index element={<Home/>}/>
      <Route path='/gallery/' element={<ArtGallery/>}/>
      <Route path='/gallery/:id' element={<IndividualArtPage/>}/>
      <Route path='/artist/' element={<Artists/>}/>
      <Route path='/artist/:id' element={<Artists/>}/>
      <Route path='/about/' element={<About/>}/>
    </Route>
  )
)

const App = () => {
  return <RouterProvider router={route}/>
}

export default App
