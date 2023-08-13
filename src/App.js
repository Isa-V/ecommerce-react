import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/Common/NavBar/Navbar';
import NotFound from '../src/components/Common/NotFound/NotFound'
import ItemListContainer from './components/Common/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/Common/ItemDetailContainer/ItemDetailContainer';
import {CartProvider} from '../src/components/Common/Context/CartContext';
import CartView from '../src/components/Common/CartView/CartView'
import Checkout from './components/Common/Checkout/Checkout';
import OrderSummary from './components/Common/OrderSummary/OrderSummary';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider>
      <NavBar/>
      <Routes>
          <Route path='/' element={<ItemListContainer text="¿Qué quieres comer hoy?" />} />
          <Route path='/category/:categoryId' element={<ItemListContainer/>} />
          <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
          <Route path='/cart' element={<CartView/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/order-summary' element={<OrderSummary/>}/>
          <Route path='*' element={<NotFound />} />
      </Routes>
      </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
