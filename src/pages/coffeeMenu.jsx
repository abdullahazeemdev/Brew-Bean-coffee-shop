import React, { useState } from "react";
import Cart from "./Cart";
import coffeeData from "../data/coffees";



const CoffeeMenu = () => {

    const [menu , setMenu] = useState(coffeeData);

  
      return (
        <section className="bg-[#0b0b0b] px-6 py-20 text-white md:px-12 lg:px-20">
            <div className="mx-auto max-w-7xl">

                {/* Heading */}
                <div className="mb-12 text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-500">
                        Our Menu
                    </p>

                    <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                        Choose Your <span className="text-amber-500">Favorite Coffee</span>
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 md:text-base">
                        Freshly brewed coffee made with premium beans and served with love.
                    </p>
                </div>

                {/* Coffee Cards */}
                <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">

                    {/* Card */}

                    {menu.map((cart) => (
                        <Cart key={cart.id} data={cart} />
                    ))}



                </div>
            </div>
        </section>
    );
};

export default CoffeeMenu;