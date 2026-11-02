
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/coffee/coffee";

const Cart = ({ data, onOrder, isLoggedIn, authChecked }) => {
  const [showMore, setShowMore] = useState(false);
  const dispatch = useDispatch();

  const handleOrder = () => {
    if (!authChecked) return;

    // Login Check
    if (!isLoggedIn) {
      onOrder();
      return;
    }

    // Add To Cart
    dispatch(
      addToCart({
        id: data.id,
        title: data.title,
        description: data.description,
        image: data.image,
        price: 999,
      })
    );

    onOrder();
  };

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#151515] transition duration-300 hover:-translate-y-2 hover:border-amber-500/40 hover:shadow-2xl hover:shadow-amber-900/20">

      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={data.image}
          alt={data.title}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
        />

        <span className="absolute right-4 top-4 rounded-full bg-amber-500 px-4 py-1 text-sm font-bold text-black">
          Coffee
        </span>
      </div>

      {/* Details */}
      <div className="flex flex-1 flex-col gap-4 p-6">

        <h3 className="text-xl font-bold">{data.title}</h3>

        <div>
          <p
            className={`mt-2 text-sm leading-6 text-gray-400 ${
              showMore ? "" : "line-clamp-2"
            }`}
          >
            {data.description}
          </p>

          <button
            onClick={() => setShowMore(!showMore)}
            className="mt-2 text-start text-sm font-semibold text-amber-500 hover:text-amber-400"
          >
            {showMore ? "See Less" : "See More"}
          </button>
        </div>

        {/* Price & Order */}
        <div className="mt-auto flex items-center justify-between gap-3">

          <span className="text-lg font-bold text-amber-500">
            Rs. 999
          </span>

          <button
            onClick={handleOrder}
            disabled={!authChecked}
            className="rounded-xl bg-amber-500 px-5 py-3 font-semibold text-black transition hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {!authChecked
              ? "Please Login"
              : isLoggedIn
              ? "Order Now"
              : "Login to Order"}
          </button>

        </div>
      </div>
    </div>
  );
};

export default Cart;
