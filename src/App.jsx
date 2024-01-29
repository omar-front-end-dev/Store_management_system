import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Navigation_Bar } from './components/Navigation_Bar'
import Sidebar from './components/Sidebar'
import { Home } from './pages/Home'
import { Products } from './pages/Products'
import { AddProduct } from './pages/AddProduct'
import ProductDetails from './pages/ProductDetails'

function App() {


  return (
    <>
      <Navigation_Bar/>
      <div className=' container-fluid'>
      <div className='row'>
        <div className='col-2 side-bar p-0'>
          <Sidebar/>
        </div>
        <div className='col-10'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/products/add' element={<AddProduct/>}/>
            <Route path='/products/:productID' element={<ProductDetails/>}/>
          </Routes>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
