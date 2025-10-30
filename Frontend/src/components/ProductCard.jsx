import { Plus, Minus, Trash2 } from "lucide-react";
import { useCart } from "../context/CartContext";

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
    <div className="group bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      {/* Product Image */}
      <div className="relative aspect-square bg-gray-50 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3 bg-gray-900 text-white text-xs font-semibold py-1 px-3 rounded-full shadow-sm">
          ${product.price.toFixed(2)}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-5 flex flex-col justify-between h-[220px]">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-1">
            {product.name}
          </h3>
          <p className="text-gray-500 text-sm line-clamp-2 mb-3">
            {product.description || "No description available."}
          </p>
        </div>

        {/* Buttons Section */}
        {!inCart ? (
          <button
            onClick={() => addToCart(product)}
            className="w-full bg-gray-900 text-white py-2.5 px-4 rounded-lg hover:bg-gray-800 transition-all font-medium text-sm shadow-md hover:shadow-lg active:scale-[0.98]"
          >
            Add to Cart
          </button>
        ) : (
          <div className="space-y-2">
            <div className="flex items-center justify-between bg-gray-100 rounded-lg p-2.5 border border-gray-200">
              <button
                onClick={() => decreaseQuantity(product.id)}
                className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
              >
                <Minus size={18} className="text-gray-700" />
              </button>
              <span className="font-semibold text-lg text-gray-900">
                {quantity}
              </span>
              <button
                onClick={() => increaseQuantity(product.id)}
                className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
              >
                <Plus size={18} className="text-gray-700" />
              </button>
            </div>

            <button
              onClick={() => removeFromCart(product.id)}
              className="w-full flex items-center justify-center gap-2 bg-red-500 text-white py-2.5 px-4 rounded-lg hover:bg-red-600 transition-all font-medium text-sm shadow-sm hover:shadow-md active:scale-[0.98]"
            >
              <Trash2 size={16} />
              <span>Remove</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
