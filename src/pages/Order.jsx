import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from "../features/coffee/coffee";
import { NavLink, useNavigate } from "react-router-dom";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../../Firebase/config.js";
import Swal from "sweetalert2";

const Order = () => {
  const cart = useSelector((state) => state.coffee.cart);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [placingOrder, setPlacingOrder] = useState(false);

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const deliveryFee = cart.length > 0 ? 150 : 0;

  const total = subtotal + deliveryFee;

  const handlePlaceOrder = async () => {
    if (cart.length === 0) {
      Swal.fire({
        icon: "warning",
        title: "Your cart is empty",
        text: "Please add some coffee before placing an order.",
      });

      return;
    }

    const user = auth.currentUser;

    if (!user) {
      Swal.fire({
        icon: "warning",
        title: "Login Required",
        text: "Please login before placing your order.",
      });

      navigate("/login");
      return;
    }

    try {
      setPlacingOrder(true);

      const orderData = {
        userId: user.uid,

        customer: {
          name: user.displayName || "",
          email: user.email || "",
        },

        items: cart.map((item) => ({
          id: item.id,
          title: item.title,
          image: item.image,
          price: item.price,
          quantity: item.quantity,
        })),

        subtotal: subtotal,
        deliveryFee: deliveryFee,
        total: total,

        status: "pending",

        createdAt: serverTimestamp(),
      };

      await addDoc(collection(db, "orders"), orderData);

      dispatch(clearCart());

      await Swal.fire({
        icon: "success",
        title: "Order Placed!",
        text: "Your coffee order has been placed successfully.",
        confirmButtonText: "Continue Order",
        confirmButtonColor: "#f59e0b",
      });

      navigate("/menu");
    } catch (error) {
      console.log("Order Error:", error);

      Swal.fire({
        icon: "error",
        title: "Order Failed",
        text: "Something went wrong while placing your order. Please try again.",
      });
    } finally {
      setPlacingOrder(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0b0b] px-4 py-10 text-white md:px-8 lg:px-16">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-10">
          <NavLink
            to="/menu"
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-800 bg-[#161616] px-5 py-2.5 text-sm font-medium text-gray-300 transition hover:border-amber-500 hover:bg-amber-500 hover:text-black"
          >
            <i className="fa-solid fa-arrow-left"></i>
            Back to Menu
          </NavLink>

          <h1 className="mt-6 text-4xl font-bold md:text-5xl">
            Your <span className="text-amber-500">Order</span>
          </h1>

          <p className="mt-3 text-gray-400">
            Review your selected coffees before placing your order.
          </p>
        </div>

        {cart.length === 0 ? (
          /* Empty Cart */
          <div className="rounded-2xl border border-white/10 bg-[#151515] p-10 text-center">
            <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-amber-500 text-3xl text-black">
              <i className="fa-solid fa-cart-shopping"></i>
            </div>

            <h2 className="text-2xl font-bold">
              Your cart is empty
            </h2>

            <p className="mt-2 text-gray-400">
              Add some delicious coffee to your order.
            </p>

            <NavLink
              to="/menu"
              className="mt-6 inline-block rounded-xl bg-amber-500 px-6 py-3 font-semibold text-black transition hover:bg-amber-400"
            >
              Browse Coffee
            </NavLink>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1fr_380px]">

            {/* Cart Items */}
            <div className="space-y-5">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl border border-white/10 bg-[#151515] p-5"
                >
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-center">

                    {/* Image */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-28 w-full rounded-xl object-cover sm:h-28 sm:w-32"
                    />

                    {/* Details */}
                    <div className="flex-1">
                      <h2 className="text-xl font-bold">
                        {item.title}
                      </h2>

                      <p className="mt-2 text-sm text-gray-400">
                        Rs. {item.price} each
                      </p>

                      {/* Quantity */}
                      <div className="mt-4 flex items-center gap-3">
                        <button
                          onClick={() =>
                            dispatch(decreaseQuantity(item.id))
                          }
                          className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-[#202020] text-lg transition hover:border-amber-500 hover:text-amber-500"
                        >
                          <i className="fa-solid fa-minus"></i>
                        </button>

                        <span className="min-w-8 text-center font-semibold">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            dispatch(increaseQuantity(item.id))
                          }
                          className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-[#202020] text-lg transition hover:border-amber-500 hover:text-amber-500"
                        >
                          <i className="fa-solid fa-plus"></i>
                        </button>
                      </div>
                    </div>

                    {/* Price + Remove */}
                    <div className="flex items-center justify-between sm:block sm:text-right">
                      <p className="text-lg font-bold text-amber-500">
                        Rs. {item.price * item.quantity}
                      </p>

                      <button
                        onClick={() =>
                          dispatch(removeFromCart(item.id))
                        }
                        className="mt-0 text-sm text-red-400 transition hover:text-red-300 sm:mt-4"
                      >
                        <i className="fa-solid fa-trash mr-2"></i>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="h-fit rounded-2xl border border-white/10 bg-[#151515] p-6 lg:sticky lg:top-6">
              <h2 className="mb-6 text-2xl font-bold">
                Order <span className="text-amber-500">Summary</span>
              </h2>

              <div className="space-y-4 border-b border-white/10 pb-5">
                <div className="flex justify-between text-gray-400">
                  <span>Subtotal</span>

                  <span className="text-white">
                    Rs. {subtotal}
                  </span>
                </div>

                <div className="flex justify-between text-gray-400">
                  <span>Delivery Fee</span>

                  <span className="text-white">
                    Rs. {deliveryFee}
                  </span>
                </div>
              </div>

              <div className="flex justify-between pt-5 text-xl font-bold">
                <span>Total</span>

                <span className="text-amber-500">
                  Rs. {total}
                </span>
              </div>

              {/* Place Order */}
              <button
                onClick={handlePlaceOrder}
                disabled={placingOrder}
                className="mt-7 w-full rounded-xl bg-amber-500 py-3.5 font-bold text-black transition hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {placingOrder ? (
                  <>
                    <i className="fa-solid fa-spinner fa-spin mr-2"></i>
                    Placing Order...
                  </>
                ) : (
                  <>
                    <i className="fa-solid fa-check mr-2"></i>
                    Place Order
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Order;