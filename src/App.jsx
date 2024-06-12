import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Footer from './components/Footer'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <ToastContainer theme='dark' position="bottom-right"/>
        <Routes>
          <Route path='/' element={
            <ItemListContainer greeting='New collection' />}
          />
          <Route path='/categories/:categoryId' element={
            <ItemListContainer />}
          />
          <Route path='/item/:id' element={
            <ItemDetailContainer />}
          />
          <Route path='/cart' element={
            <Cart />}
          />
          <Route path='/checkout' element={
            <Checkout />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
