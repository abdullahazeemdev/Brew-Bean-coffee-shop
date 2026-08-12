function CoffeeCard({
  name,
  price,
  category,
  available,
  special,
  image,
}) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-white/10 bg-[#17100C] transition duration-500 hover:-translate-y-2 hover:border-[#C89B5C]/40">
      
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#17100C] via-transparent to-transparent"></div>

        {special && (
          <span className="absolute left-4 top-4 rounded-full bg-[#C89B5C] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#0C0806]">
            Special
          </span>
        )}

        <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs text-white backdrop-blur-md">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">

        <div className="flex items-center justify-between gap-4">
          <h3 className="text-2xl text-[#F5E6D3]">
            {name}
          </h3>

          <span className="text-lg font-semibold text-[#C89B5C]">
            ${price}
          </span>
        </div>

        <div className="mt-5 flex items-center justify-between">

          <span
            className={
              available
                ? "text-sm text-green-400"
                : "text-sm text-red-400"
            }
          >
            {available ? "Available" : "Sold Out"}
          </span>

          {available ? (
            <button className="rounded-full border border-[#C89B5C] px-5 py-2 text-sm text-[#C89B5C] transition hover:bg-[#C89B5C] hover:text-[#0C0806]">
              Order Now
            </button>
          ) : (
            <button
              disabled
              className="cursor-not-allowed rounded-full border border-white/10 px-5 py-2 text-sm text-white/30"
            >
              Sold Out
            </button>
          )}

        </div>
      </div>
    </div>
  );
}

export default CoffeeCard;