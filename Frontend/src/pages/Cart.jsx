import { useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';
import CheckoutModal from '../components/CheckoutModal';

const Cart = ({ onNavigate }) => {
  const { cart, getTotalPrice } = useCart();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center">
          <ShoppingBag size={64} className="text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Your cart is empty
          </h2>
          <p className="text-gray-600 mb-6">
            Add some products to get started!
          </p>
          <button
            onClick={() => onNavigate('products')}
            className="bg-gray-900 text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors font-medium"
          >
            Browse Products
          </button>
        </div>
      </div>
    );
  }

  const totalPrice = getTotalPrice();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
          Shopping Cart
        </h1>
        <p className="text-gray-600">{totalItems} items in your cart</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Order Summary
            </h2>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span className="font-medium">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span className="font-medium">Free</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Tax</span>
                <span className="font-medium">$0.00</span>
              </div>
              <div className="border-t border-gray-200 pt-3">
                <div className="flex justify-between text-xl font-bold text-gray-900">
                  <span>Total</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsCheckoutOpen(true)}
              className="w-full bg-gray-900 text-white py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors font-medium text-lg"
            >
              Proceed to Checkout
            </button>

            <button
              onClick={() => onNavigate('products')}
              className="w-full mt-3 bg-gray-100 text-gray-900 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors font-medium"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />
    </div>
  );
};

export default Cart;
