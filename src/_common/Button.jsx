import Spinner from "./Spinner";

const Button = ({
  children,
  onClick,
  type,
  className,
  loading,
  ...otherProps
}) => {
  return (
    <button
      type={type}
      className={`text-white
  bg-blue-700
  hover:bg-blue-800
  focus:ring-4
  focus:outline-none
  focus:ring-blue-300
  font-medium
  rounded-lg 
  text-sm
  px-4
  py-2
  h-9
  dark:bg-blue-600
  dark:hover:bg-blue-700
  dark:focus:ring-blue-800
  items-center
  justify-center
  flex
  ${className}
  `}
      onClick={onClick}
      {...otherProps}
    >
      {loading ? <Spinner /> : <>{children}</>}
    </button>
  );
};

export default Button;
