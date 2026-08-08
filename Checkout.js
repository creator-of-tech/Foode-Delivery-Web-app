
import { useSelector } from "react-redux";
import { Link } from "react-router";

export default function Checkout() {
  const items = useSelector((state) => state.cartslice.items);
  
  const total = items.reduce((sum, item) => {
    const price = Number(item?.price) || 0;
    const quantity = Number(item?.quantity) || 0;

    return sum + (quantity * price) / 100;
  }, 0);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">

        {/* Back Button */}
        <Link
          to="/restaurant"
          className="inline-flex items-center gap-2 text-gray-600 
                     hover:text-orange-500 font-medium mb-6 transition"
        >
          ← Back to Restaurant
        </Link>

        
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Your Cart
        </h1>

        {items.length === 0 ? (
          /* Empty Cart */
          <div className="bg-white rounded-2xl shadow-sm p-10 text-center">
            <div className="text-6xl mb-4">🛒</div>

            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Your cart is empty
            </h2>
            
            <p className="text-gray-500 mb-6">
              Add some delicious food to your cart!
            </p>

            <Link
              to="/restaurant"
              className="inline-block bg-orange-500 text-white
                         px-6 py-3 rounded-xl font-semibold
                         hover:bg-orange-600 transition"
            >
              Browse Restaurants
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">

              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-5">
                  Cart Items ({items.length})
                </h2>

                <div className="space-y-5">
                  {items.map((value, index) => {
                    const price =
                      (Number(value?.price) || 0) / 100;

                    const quantity =
                      Number(value?.quantity) || 0;

                    return (
                      <div
                        key={value.id || value.imageId || index}
                        className="flex items-center gap-5 pb-5
                                   border-b last:border-b-0 last:pb-0"
                      >

                        {/* Food Image */}
                        <img
                          className="w-28 h-28 object-cover rounded-xl"
                          src={
                            "https://media-assets.swiggy.com/swiggy/image/upload/" +
                            value.imageId
                          }
                          alt={value.name}
                        />

                        {/* Food Details */}
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-800">
                            {value.name}
                          </h3>

                          <p className="text-gray-500 text-sm mt-1">
                            ₹{price.toFixed(2)} × {quantity}
                          </p>

                          <div className="mt-3 inline-flex items-center
                                          bg-orange-50 text-orange-600
                                          px-3 py-1 rounded-lg
                                          text-sm font-semibold">
                            Qty: {quantity}
                          </div>
                        </div>

                        {/* Item Total */}
                        <div className="text-right">
                          <p className="font-bold text-gray-800 text-lg">
                            ₹{(price * quantity).toFixed(2)}
                          </p>
                        </div>

                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Billing Section */}
            <div>
              <div className="bg-white rounded-2xl shadow-sm p-6
                              sticky top-24">

                <h2 className="text-xl font-bold text-gray-800 mb-6">
                  Bill Details
                </h2>

                <div className="space-y-4 text-gray-600">

                  <div className="flex justify-between">
                    <span>Item Total</span>
                    <span>₹{total.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Delivery Fee</span>
                    <span>₹0</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Taxes & Charges</span>
                    <span>₹0</span>
                  </div>

                </div>

                <div className="border-t my-5"></div>

                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-800">
                    Total
                  </span>

                  <span className="text-2xl font-bold text-orange-500">
                    ₹{total.toFixed(2)}
                  </span>
                </div>

                {/* Checkout Button */}
                <button
                  className="w-full mt-6 bg-orange-500 text-white
                             py-3 rounded-xl font-bold text-lg
                             hover:bg-orange-600
                             active:scale-[0.98]
                             transition"
                >
                  Proceed to Pay
                </button>

              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}

