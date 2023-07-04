"use client";
import Image from "next/image";
import { useState, useRef } from "react";
const ShopSearch = () => {
  const [text, setText] = useState("");

  return (
    <div className="flex items-center h-full w-full relative">
      <Image
        src="/icons/search.svg"
        width={24}
        height={24}
        alt="search"
        className="absolute right-2 inset-y-2  my-auto"
      />
      <input
        onChange={(e) => setText(e.target.value)}
        value={text}
        className="w-full h-12 bg-white border border-gray-200 rounded-xl pr-9"
        placeholder="نام فروشگاه را وارد کنید"
      />
      {text !== "" ? (
        <button onClick={() => setText("")}>
          <Image
            src="/icons/close.svg"
            width={24}
            height={24}
            alt="search"
            className="absolute left-2 inset-y-2  my-auto"
          />
        </button>
      ) : null}
    </div>
  );
};

export default ShopSearch;
