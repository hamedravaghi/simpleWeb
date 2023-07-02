"use client";
import { useContext, useEffect } from "react";
import Button from "@_common/Button";
import ShopRegisterCard from "@_components/ShopRegisterCard";
import UserRegisterCard from "@_components/UserRegisterCard";
import { registerContext } from "@_context/RegisterProvider";

const Otp = () => {
  const { role, handleChangeRole, handleReset } = useContext(registerContext);
  useEffect(() => {
    handleReset();
  }, []);

  return (
    <div className="w-full h-full  md:w-[360px] md:h-[600px] bg-white flex flex-col rounded-xl border border-gray-200 items-center">
      <nav className="w-full h-16 flex flex-row items-center justify-end p-3 shadow-md">
        <Button className={"font-bold"} onClick={handleChangeRole}>
          {role === "user" ? "ثبت نام فروشگاه" : "ثبت نام کاربر"}
        </Button>
      </nav>
      <div className="flex flex-1 flex-col w-full">
        {role === "user" ? <UserRegisterCard /> : null}
        {role === "shop" ? <ShopRegisterCard /> : null}
      </div>
    </div>
  );
};

export default Otp;
