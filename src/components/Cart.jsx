import React from "react";
import { useState } from "react";

const Cart = ({ data }) => {

    const [ShowMore, setShowMore] = useState(false)
    return (
        <div className="group flex h-full flex-col  overflow-hidden rounded-2xl border border-white/10 bg-[#151515] transition duration-300 hover:-translate-y-2 hover:border-amber-500/40 hover:shadow-2xl hover:shadow-amber-900/20">

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

            <div className="flex flex-1 flex-col gap-4 p-6">

                <h3 className="text-xl font-bold">
                    {data.title}
                </h3>

                <div>

                    <p className={`mt-2 text-sm leading-6 text-gray-400 ${ShowMore ? "" : "line-clamp-2"}`}>
                        {data.description}
                    </p>
                    <button
                        onClick={() => setShowMore(!ShowMore)}
                        className="mt-2 text-sm font-semibold text-amber-500 hover:text-amber-400 text-start">
                        {ShowMore ? "See Less" : "See More"}
                    </button>
                </div>

                <button className="mt-auto w-full rounded-xl bg-amber-500 py-3 font-semibold text-black transition hover:bg-amber-400">
                    Order Now
                </button>

            </div>
        </div>
    );
};

export default Cart;