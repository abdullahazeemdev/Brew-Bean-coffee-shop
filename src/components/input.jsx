const Input = ({ label, type="text", handler,field , placeholder }) => {
  return (
    <div>
      <label className="mb-1 mt-2 block text-sm font-medium text-stone-400">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        onChange={(e) => handler(e.target.value,field)}
        className="w-full rounded-xl border border-[#4a3023] bg-[#1c120d] px-4 py-3 text-white outline-none placeholder:text-stone-600 transition focus:border-[#d6a15d] focus:ring-1 focus:ring-[#d6a15d]"
      />
    </div>
  );
};

export default Input;