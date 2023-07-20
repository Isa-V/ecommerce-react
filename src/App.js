import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/Common/NavBar/Navbar';
import NotFound from '../src/components/Common/NotFound/NotFound'
import ItemListContainer from './components/Common/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/Common/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
          <Route path='/' element={<ItemListContainer text="¿Qué quieres comer hoy?" />} />
          <Route path='/category/:categoryId' element={<ItemListContainer/>} />
          <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
          <Route path='*' element={<NotFound />} />
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
