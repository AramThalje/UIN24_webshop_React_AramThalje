import { useState } from 'react';
import { products } from './assets/legodudes';
import Cart from './components/Cart';
import CategoryHeading from './components/CategoryHeading';
import Nav from './components/Nav';
import ProductCard from './components/ProductCard';
import Header from './components/Header';
import PageContent from './components/PageContent';

import './styles/style.css';
function App() {
    const [cartCount, setCartCount] = useState(0);

  return (
    <>
        <div id="content">
        <Cart />

        <Header cartCount={cartCount} />
        <PageContent products={products} setCartCount={setCartCount}/>
        <footer>
            <p>2025 &copy; Legodudes</p>
        </footer>
    </div>
    
    </>
  )
}

export default App;
