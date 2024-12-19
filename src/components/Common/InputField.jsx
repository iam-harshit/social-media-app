const InputField = ({
  id,
  label,
  name,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <>
      <label
        htmlFor={id}
        className={`absolute left-2 transition-all duration-300 ${
          value ? "top-0 text-sm text-black" : "top-6 text-gray-500 text-base"
        }`}
      >
        {label}
      </label>
      <input
        id={id}
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full pt-6 pb-2 px-2 border-b-2 border-gray-300 focus:border-black outline-none text-gray-700 placeholder-transparent transition-all"
       />
    </>
  );
}

export default InputField;
