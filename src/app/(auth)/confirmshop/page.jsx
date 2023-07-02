"use client";
import { useContext, useEffect } from "react";
import { useFormik } from "formik";
import { registerContext } from "@_context/RegisterProvider";
import { shopNameValidation } from "@_lib/yup/userValidation";
import Button from "@_common/Button";
import Link from "next/link";
import Image from "next/image";
import { confirmNameShop } from "@services/endPoints";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
const ConfirmShop = () => {
  //**redirect if phone number null */
  const { replace } = useRouter();

  const { phoneNumber, loading, handleLoading } = useContext(registerContext);

  const formik = useFormik({
    initialValues: { phoneNumber: "", name: "" },
    validationSchema: shopNameValidation,
    onSubmit: async (values) => {
      handleLoading(true);
      try {
        const res = await confirmNameShop(values);
        handleLoading(false);
        const message = await res.json();
        toast.success(message);
        replace("/verify");
      } catch (err) {
        handleLoading(false);
        toast.error("خطایی رخ داده است");
      }
    },
  });

  useEffect(() => {
    if (!phoneNumber) {
      replace("/otp");
    }
    if (phoneNumber) {
      formik.setFieldValue("phoneNumber", phoneNumber);
    }
  }, [phoneNumber]);

  useEffect(() => {
    console.log("error", formik.errors);
    console.log("value", formik.values);
  }, [formik.errors, formik.values]);
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
        <h3 className="text-center w-full font-bold">اطلاعات فروشگاه</h3>
        <p className="font-bold text-sm">اطلاعات فروشگاه را تکمیل نمایید</p>
        <div className="w-full flex flex-col gap-1">
          <p className="text-sm">نام فروشگاه را وارد نمایید</p>
          <label className="w-full h-[60px]">
            <input
              name="name"
              onChange={formik.handleChange}
              autoComplete="off"
              type="phone"
              className="w-full h-10 p-2 text-center  bg-white border border-gray-200 rounded-lg"
              placeholder="نام آموزشگاه"
            />
            {formik.touched.name && Boolean(formik.errors.name) ? (
              <span className="text-xs text-red-800">{formik.errors.name}</span>
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

export default ConfirmShop;
