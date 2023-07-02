"use client";

import Button from "@_common/Button";
import { AuthContext } from "@_context/AuthProvider";
import { registerContext } from "@_context/RegisterProvider";
import { codeValidation } from "@_lib/yup/userValidation";
import { verifyUserApi, verifyShopApi } from "@services/endPoints";
import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { toast } from "react-toastify";

const Verify = () => {
  const { replace } = useRouter();
  const { login } = useContext(AuthContext);
  const { role, phoneNumber, handleLoading, loading } =
    useContext(registerContext);

  //** role phoneNumber code */

  const formik = useFormik({
    initialValues: { phoneNumber: "", code: "" },
    validationSchema: codeValidation,
    onSubmit: (values) => {
      handleLoading(true);
      if (role === "user") {
        handleVerifyUser(values);
      } else {
        handleVefiyShop(values);
      }
    },
  });

  useEffect(() => {
    if (!role || !phoneNumber) {
      replace("/otp");
    } else {
      formik.setFieldValue("phoneNumber", phoneNumber);
    }
  }, [phoneNumber, role]);

  const handleVefiyShop = async (values) => {
    const res = await verifyShopApi(values);
    if (res.status === 200) {
      handleLoading(false);
      toast.success("ورود فروشگاه موفقیت آمیز بود");
      const token = await res.json();
      login(token);
      replace("/dashboard");
    } else if (res.status === 404) {
      handleLoading(false);
      const message = await res.json();
      toast.error(message);
    } else {
      handleLoading(false);
      toast.error("خطایی رخ داده است");
    }
  };

  // 200
  // 404

  const handleVerifyUser = async (values) => {
    const res = await verifyUserApi(values);
    if (res.status === 200) {
      handleLoading(false);
      toast.success("ورود موفقیت آمیز بود");
      const token = await res.json();
      login(token);
      replace("/");
    } else if (res.status === 404) {
      handleLoading(false);
      const message = await res.json();
      toast.error(message);
    } else {
      handleLoading(false);
      toast.error("خطایی رخ داده است");
    }
    //* remember loading false
  };

  return (
    <div className="w-full h-full  md:w-[360px] md:h-[600px] bg-white flex flex-col rounded-xl border border-gray-200 items-center">
      <nav className="w-full h-16 flex flex-row items-center  p-3 shadow-md">
        <Link href={"/otp"}>
          <Image
            src={"/icons/arrow-right.svg"}
            width={24}
            height={24}
            alt="back-icon"
          />
        </Link>
      </nav>
      <form
        onSubmit={formik.handleSubmit}
        className="w-full h-full flex flex-col gap-8  p-[40px]"
      >
        <h3 className="text-center w-full font-bold">احراز هویت</h3>
        <p className="font-bold text-sm">
          کد تایید به شماره موبایل {phoneNumber} ارسال شد
        </p>
        <div className="w-full flex flex-col gap-1">
          <p className="text-sm">کد 5 رقمی احراز هویت را وارد کنید</p>
          <label className="w-full h-[60px]">
            <input
              name="code"
              onChange={formik.handleChange}
              autoComplete="off"
              type="phone"
              className="w-full h-10 p-2 text-center  bg-white border border-gray-200 rounded-lg"
              placeholder="کد 5 رقمی"
            />
            {formik.touched.code && Boolean(formik.errors.code) ? (
              <span className="text-xs text-red-800">{formik.errors.code}</span>
            ) : null}
          </label>
        </div>
        <Button loading={loading} className={"font-bold"} type={"submit"}>
          ارسال
        </Button>
      </form>
    </div>
  );
};

export default Verify;
