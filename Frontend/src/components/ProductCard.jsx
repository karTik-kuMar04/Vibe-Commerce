import { Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const {
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    isInCart,
    getItemQuantity,
  } = useCart();

  const inCart = isInCart(product.id);
  const quantity = getItemQuantity(product.id);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        <p className="text-2xl font-bold text-gray-900 mb-4">
          ${product.price.toFixed(2)}
        </p>

        {!inCart ? (
          <button
            onClick={() => addToCart(product)}
            className="w-full bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors font-medium"
          >
            Add to Cart
          </button>
        ) : (
          <div className="space-y-2">
            <div className="flex items-center justify-between bg-gray-100 rounded-lg p-2">
              <button
                onClick={() => decreaseQuantity(product.id)}
                className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
              >
                <Minus size={18} />
              </button>
              <span className="font-semibold text-lg">{quantity}</span>
              <button
                onClick={() => increaseQuantity(product.id)}
                className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
              >
                <Plus size={18} />
              </button>
            </div>
            <button
              onClick={() => removeFromCart(product.id)}
              className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors font-medium flex items-center justify-center space-x-2"
            >
              <Trash2 size={18} />
              <span>Remove</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
