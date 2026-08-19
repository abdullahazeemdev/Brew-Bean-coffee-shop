// import CoffeeCard from "./CoffeeCard";
// import coffees from "../data/coffees";

// function CoffeeMenu() {
//   return (
//     <section
//       id="menu"
//       className="bg-[#0C0806] px-6 py-24 lg:px-10"
//     >
//       <div className="mx-auto max-w-7xl">

//         <div className="mb-12 text-center">
//           <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#C89B5C]">
//             Our Selection
//           </p>

//           <h2 className="text-5xl text-[#F5E6D3]">
//             Crafted With Passion
//           </h2>

//           <p className="mx-auto mt-4 max-w-2xl text-white/50">
//             From rich espresso to refreshing iced coffee,
//             discover your new favorite cup.
//           </p>
//         </div>

//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//           {coffees.map((coffee) => (
//             <CoffeeCard
//               key={coffee.id}
//               name={coffee.name}
//               price={coffee.price}
//               category={coffee.category}
//               available={coffee.available}
//               special={coffee.special}
//               image={coffee.image}
//             />
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

// export default CoffeeMenu;