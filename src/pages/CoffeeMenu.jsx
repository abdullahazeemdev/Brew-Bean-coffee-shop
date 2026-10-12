import { useEffect, useState } from "react";
import Cart from "../components/Cart";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const CoffeeMenu = () => {
  const [menu, setMenu] = useState([]);
  const [showOrder, setShowOrder] = useState(false);

  const navigate = useNavigate();

  const cart = useSelector((state) => state.coffee.cart || []);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://api.sampleapis.com/coffee/hot",
        );

        setMenu(response.data.slice(0, 12));
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div>
      <section className="min-h-screen bg-[#0b0b0b] px-3 py-3 text-white md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          {/* Back Home */}
          <NavLink to={"/"}>
            <button className="group m-6 inline-flex items-center gap-2 rounded-full border border-gray-800 bg-[#161616] px-5 py-2.5 text-sm font-medium text-gray-300 transition-all duration-300 hover:border-amber-500 hover:bg-amber-500 hover:text-black">
              <i className="fa-solid fa-arrow-left transition-transform duration-300 group-hover:-translate-x-1"></i>
              Back Home
            </button>
          </NavLink>

          {/* Heading */}
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-500">
              Our Menu
            </p>

            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Choose Your{" "}
              <span className="text-amber-500">Favorite Coffee</span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 md:text-base">
              Freshly brewed coffee made with premium beans and served with
              love.
            </p>
          </div>

          {/* Coffee Cards */}
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {menu.map((cart) => (
              <Cart
                key={cart.id}
                data={cart}
                onOrder={() => setShowOrder(true)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Order Modal */}
      {showOrder && cart.length > 0 && (
        <div className="fixed bottom-5 left-1/2 z-50 w-[calc(100%-30px)] max-w-xl -translate-x-1/2">
          <div
            onClick={() => navigate("/order")}
            className="cursor-pointer rounded-2xl border border-amber-500/30 bg-[#171717]/95 p-4 shadow-2xl shadow-black/50 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-amber-500"
          >
            <div className="flex items-center justify-between gap-4">
              {/* Left */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500 text-xl text-black">
                  <i className="fa-solid fa-mug-hot"></i>
                </div>

                <div>
                  <p className="font-semibold text-white">
                    {totalItems} {totalItems === 1 ? "Item" : "Items"} Added
                  </p>

                  <p className="text-sm text-gray-400">
                    Click to view your order
                  </p>
                </div>
              </div>

              {/* Right */}
              <div className="flex items-center gap-3">
                <span className="font-bold text-amber-500">
                  Rs. {totalPrice}
                </span>

                <i className="fa-solid fa-arrow-right text-gray-400 transition-transform duration-300 group-hover:translate-x-1"></i>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* show 0rder button */}
      {cart.length > 0 && !showOrder && (
        <button
          onClick={() => setShowOrder(true)}
          className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 rounded-full bg-amber-500 px-6 py-3 font-semibold text-black shadow-xl transition hover:bg-amber-400"
        >
          <i className="fa-solid fa-cart-shopping mr-2"></i>
          View Order ({totalItems})
        </button>
      )}
    </div>
  );
};

export default CoffeeMenu;
