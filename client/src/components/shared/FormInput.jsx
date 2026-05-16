const FormInput = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  name,
}) => {
  return (
    <div className="space-y-3">

      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        className="
          w-full
          border
          border-gray-300
          bg-white
          px-5
          py-4
          rounded-2xl
          outline-none
          transition-all
          duration-300
          focus:border-black
          focus:shadow-lg
          placeholder:text-gray-400
        "
      />

    </div>
  );
};

export default FormInput;