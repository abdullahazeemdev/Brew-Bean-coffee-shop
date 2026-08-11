import CoffeeCard from "./CoffeeCard";
import coffees from "../data/coffees";

function CoffeeMenu() {
  return (
    <section>
      <h2>Our Coffee Menu</h2>

      <div>
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee.id}
            name={coffee.name}
            price={coffee.price}
            category={coffee.category}
          />
        ))}
      </div>
    </section>
  );
}

export default CoffeeMenu;