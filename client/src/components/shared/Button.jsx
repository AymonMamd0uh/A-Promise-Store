const Button = ({
  children,
  type = "button",
  onClick,
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        w-full
        bg-black
        text-white
        py-4
        rounded-2xl
        hover:bg-gray-800
        transition
        duration-300
        text-lg
        font-medium
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;