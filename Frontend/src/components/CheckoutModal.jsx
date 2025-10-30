import { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';
import { checkout } from '../lib/api';
import { useCart } from '../context/CartContext';

const CheckoutModal = ({ isOpen, onClose }) => {
  const { cart, getTotalPrice, clearCart } = useCart();
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [receipt, setReceipt] = useState(null);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const checkoutData = {
        name: formData.name,
        email: formData.email,
        cartItems: cart.map((item) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
        })),
      };

      const response = await checkout(checkoutData);
      setReceipt(response);
      clearCart();
    } catch (err) {
      setError(err.message || 'Checkout failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setFormData({ name: '', email: '' });
    setError(null);
    setReceipt(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">
            {receipt ? 'Order Receipt' : 'Checkout'}
          </h2>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          {!receipt ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>

              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Items</span>
                  <span className="font-medium">
                    {cart.reduce((sum, item) => sum + item.quantity, 0)}
                  </span>
                </div>
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>${getTotalPrice().toFixed(2)}</span>
                </div>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gray-900 text-white py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Processing...' : 'Complete Order'}
              </button>
            </form>
          ) : (
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <CheckCircle size={64} className="text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Thank you, {formData.name}!
              </h3>
              <p className="text-gray-600">
                Your order has been successfully placed.
              </p>

              <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-left">
                <div className="flex justify-between">
                  <span className="text-gray-600">Name</span>
                  <span className="font-medium">{formData.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Email</span>
                  <span className="font-medium">{formData.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total</span>
                  <span className="font-bold text-lg">
                    ${receipt.total?.toFixed(2) || getTotalPrice().toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Order Time</span>
                  <span className="font-medium">
                    {receipt.timestamp
                      ? new Date(receipt.timestamp).toLocaleString()
                      : new Date().toLocaleString()}
                  </span>
                </div>
              </div>

              <button
                onClick={handleClose}
                className="w-full bg-gray-900 text-white py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors font-medium"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
