import { Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  const subtotal = item.price * item.quantity;

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col sm:flex-row gap-4">
      <div className="w-full sm:w-32 h-32 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            {item.name}
          </h3>
          <p className="text-gray-600 text-sm mb-2">{item.description}</p>
          <p className="text-xl font-bold text-gray-900">
            ${item.price.toFixed(2)}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mt-4">
          <div className="flex items-center bg-gray-100 rounded-lg p-2">
            <button
              onClick={() => decreaseQuantity(item.id)}
              className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
            >
              <Minus size={18} />
            </button>
            <span className="font-semibold text-lg mx-4">{item.quantity}</span>
            <button
              onClick={() => increaseQuantity(item.id)}
              className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
            >
              <Plus size={18} />
            </button>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm text-gray-600">Subtotal</p>
              <p className="text-xl font-bold text-gray-900">
                ${subtotal.toFixed(2)}
              </p>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              <Trash2 size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
