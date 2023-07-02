import Link from "next/link";

const CustomLink = ({ text, href }) => {
  return (
    <Link
      href={href}
      className="text-white
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
       dark:bg-blue-600
       dark:hover:bg-blue-700
       dark:focus:ring-blue-800"
    >
      {text}
    </Link>
  );
};

export default CustomLink;