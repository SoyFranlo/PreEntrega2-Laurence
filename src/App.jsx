import {Routes, Route} from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import {CartProvider} from './components/Context/CartProvider'
import Checkout from './components/Checkout/Checkout'
import Cart from "./components/Cart/Cart";


const App = () => {
  return (
    <CartProvider> 
      <NavBar />
    <Routes>
      <Route path="/" element={<ItemListContainer/>}/>
      <Route path="/category/:category" element={<ItemListContainer/>}/>
      <Route path="/items/:id" element={<ItemDetailContainer/>}/>
      <Route path="/cart" element= {<Cart/>}/>
      <Route path='/checkout' element={<Checkout />}/>
    </Routes>
    </CartProvider>
  );
};

export default App;
