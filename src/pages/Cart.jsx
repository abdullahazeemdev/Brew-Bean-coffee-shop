import React from 'react'

const Cart = ({data}) => {
    return (
        <div className="group overflow-hidden rounded-2xl border border-white/10 bg-[#151515] transition duration-300 hover:-translate-y-2 hover:border-amber-500/40 hover:shadow-2xl hover:shadow-amber-900/20">

            <div className="relative overflow-hidden">
                <img
                    src={data.image}
                    alt="Cappuccino"
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <span className="absolute right-4 top-4 rounded-full bg-amber-500 px-4 py-1 text-sm font-bold text-black">
                    {`$${data.price}`}
                </span>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold">
                    {data.name}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                   {data.description}
                </p>

                <button className="mt-5 w-full rounded-xl bg-amber-500 py-3 font-semibold text-black transition hover:bg-amber-400">
                    Add to Cart
                </button>
            </div>

        </div>

    )
}

export default Cart