"use client";
import { getSingleShopName } from "@/services/endPoints";
import Image from "next/image";

async function getShopName(id) {
  const res = await getSingleShopName(id);
  if (!res.ok) {
    throw new Error("خطایی در دریافت اطلاعات رخ داده است ... ");
  }
  return res.json();
}

const SingleShop = async ({ params }) => {
  const shop = await getShopName(params.id);

  return (
    <div className="w-full  flex flex-col items-center ">
      <div className="w-full h-16 bg-gray-400 flex items-center p-3">
        <p className="font-bold">فروشگاه {shop.name}</p>
      </div>

      <div className="max-w-[360px] flex flex-row justify-between p-2 bg-red-400">
        <button className="w-[156px] h-[156px] rounded-xl bg-gray-400 flex flex-col items-center gap-8">
          <Image src={"/icons/upload.svg"} width={60} height={60} />
          <p>آپلود عکس</p>
        </button>
        <button className="w-[156px] h-[156px] rounded-xl bg-gray-400 flex flex-col items-center gap-8">
          <Image src={"/icons/upload.svg"} width={60} height={60} />
          <p>آپلود فایل</p>
        </button>
      </div>
    </div>
  );
};

export default SingleShop;
