"use client";
import { useContext } from "react";
import { AuthContext } from "@_context/AuthProvider";
import { useRouter, usePathname } from "next/navigation";
import Button from "@_common/Button";
import Image from "next/image";
const SiteNavbar = () => {
  const { back } = useRouter();
  const pathname = usePathname();
  const { logout, user } = useContext(AuthContext);
  return (
    <nav className="w-full h-16 flex flex-row items-center justify-between p-3 shadow-md">
      <div className="h-full flex flex-row items-center">
        {pathname !== "/" ? (
          <button onClick={() => back()}>
            <Image
              src={"/icons/arrow-right.svg"}
              alt="صفحه خانه"
              width={24}
              height={24}
            />
          </button>
        ) : null}
      </div>
      <div>
        {user ? (
          <div>
            <Button onClick={logout}>خروج از حساب کاربری</Button>
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default SiteNavbar;
