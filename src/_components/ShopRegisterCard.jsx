import Button from "@_common/Button";
import { registerContext } from "@_context/RegisterProvider";
import { phoneNumberValidation } from "@_lib/yup/userValidation";
import { checkShopApi } from "@services/endPoints";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { toast } from "react-toastify";

const ShopRegisterCard = () => {
  const { push } = useRouter();
  const { handleSetPhoneNumber, loading, handleLoading } =
    useContext(registerContext);

  const formik = useFormik({
    initialValues: { phoneNumber: "" },
    validationSchema: phoneNumberValidation,
    onSubmit: async (values) => {
      handleLoading(true);
      const res = await checkShopApi(values);
      if (res.status === 200) {
        handleLoading(false);
        handleSetPhoneNumber(values.phoneNumber);
        const message = await res.json();
        toast.success(message);
        push("/verify");
      } else if (res.status === 203) {
        handleSetPhoneNumber(values.phoneNumber);
        handleLoading(false);
        const message = await res.json();
        toast.info(message);
        push("/confirmshop");
      } else {
        handleLoading(false);
        toast.error("خطایی رخ داده است");
      }
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="w-full h-full flex flex-col gap-8  p-[40px]"
    >
      <h3 className="text-center w-full font-bold">ثبت نام فروشگاه</h3>
      <div className="w-full gap-2 flex flex-col">
        <p className="text-sm ">لطفا شماره موبایل مالک فروشگاه را وارد کنید</p>
        <label className="w-full h-[60px]">
          <input
            name="phoneNumber"
            onChange={formik.handleChange}
            style={{ direction: "ltr" }}
            autoComplete="off"
            type="phone"
            className="w-full h-10 p-2  bg-white border border-gray-200 rounded-lg"
            placeholder="09121111111"
          />
          {formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber) ? (
            <span className="text-xs text-red-800">
              {formik.errors.phoneNumber}
            </span>
          ) : null}
        </label>
      </div>
      <Button loading={loading} className={"font-bold"} type={"submit"}>
        ارسال
      </Button>
    </form>
  );
};

export default ShopRegisterCard;
