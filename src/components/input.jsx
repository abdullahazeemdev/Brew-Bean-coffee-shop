const Input = ({ label, type = "text", handler, field, placeholder, value }) => {
  return (
    <div>
      {label && (
        <label className="mb-1.5 block text-xs sm:text-sm font-medium text-stone-300">
          {label}
        </label>
      )}

      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => handler(e.target.value, field)}
        className="w-full rounded-xl border border-[#4a3023] bg-[#1c120d] px-4 py-3 text-sm sm:text-base text-white outline-none placeholder:text-stone-600 transition-all duration-200 hover:border-[#5c3e2f] focus:border-[#d6a15d] focus:ring-1 focus:ring-[#d6a15d]"
      />
    </div>
  );
};

export default Input;