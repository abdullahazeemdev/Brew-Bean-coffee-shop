function CoffeeCard({ name, price, category }) {
  return (
    <div className="coffee-card">
      <h3>{name}</h3>
      <p>${price}</p>
      <span>{category}</span>
      <button>Order Now</button>
    </div>
  );
}

export default CoffeeCard;