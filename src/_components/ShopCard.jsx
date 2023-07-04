import Link from "next/link";
const ShopCard = ({ name, shopId }) => {
  return (
    <Link
      href={`/shop/${shopId}`}
      className="w-full h-[70px] bg-white rounded-xl border border-gray-200 flex items-center p-4"
    >
      <p className="font-bold">{name}</p>
    </Link>
  );
};

export default ShopCard;
