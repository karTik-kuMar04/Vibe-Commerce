import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Products from './pages/Products';
import Cart from './pages/Cart';

function App() {
  const [currentPage, setCurrentPage] = useState('products');

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
        <main>
          {currentPage === 'products' && <Products />}
          {currentPage === 'cart' && <Cart onNavigate={handleNavigate} />}
        </main>
      </div>
    </CartProvider>
  );
}

export default App;
