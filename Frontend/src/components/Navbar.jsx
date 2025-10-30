import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = ({ currentPage, onNavigate }) => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button
              onClick={() => onNavigate('products')}
              className="text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors"
            >
              Mock E-Com
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => onNavigate('products')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                currentPage === 'products'
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Products
            </button>

            <button
              onClick={() => onNavigate('cart')}
              className={`relative px-4 py-2 rounded-lg transition-colors flex items-center space-x-2 ${
                currentPage === 'cart'
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <ShoppingCart size={20} />
              <span>Cart</span>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
