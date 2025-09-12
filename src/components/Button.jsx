//Added styles are random and not final//julian

const baseStyles = "px-4 py-2 rounded-md font-medium ";

const variantStyle = {
  primary: "bg-blue-600 text-white",
  ghost: "bg-transparent text-white",
  destructive: "bg-red-600 text-red",
};

const Button = ({ variant = "primary", onClick, children, className }) => {
  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyle[variant]} ${className} `}
      aria-label={children}
      title={children}
    >
      {children}
    </button>
  );
};

export default Button;
