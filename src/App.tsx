
import { Route,createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import { Home, ArtGallery, About, IndividualArtPage, PageNotFoundpage } from './pages'
import  { Main_wrapper }  from './wrappers'

const route  = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Main_wrapper/>}>
      <Route index element={<Home/>}/>
      <Route path='/gallery/' element={<ArtGallery/>}/>
      <Route path='/gallery/:id' element={<IndividualArtPage/>}/>
      <Route path='/about/' element={<About/>}/>
      <Route path="*" element={<PageNotFoundpage/>}/>
    </Route>
  )
)

const App = () => {
  return <RouterProvider router={route}/>
}

export default App
