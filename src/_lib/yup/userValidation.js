import * as Yup from 'yup'
const phoneRegExp = /(09)(10|11|12|13|14|15|16|17|18|19|90|91|92|93|94|30|33|35|36|37|38|39|00|01|02|03|04|05|41|42|20|21|22|32|31|34)\d{7}/;



export const phoneNumberValidation = Yup.object().shape({
     phoneNumber: Yup.string()
          .matches(phoneRegExp, "شماره تماس معتبر نمیباشد")
          .required("شماره تماس همراه الزامی است")
          .max(11, "شماره تماس معتبر نمیباشد"),
})


export const shopValidation = Yup.object().shape({
     phoneNumber: Yup.string()
          .matches(phoneRegExp, "شماره تماس معتبر نمیباشد")
          .required("شماره تماس همراه الزامی است")
          .max(11, "شماره تماس معتبر نمیباشد"),
     nickName: Yup.string().required("وارد کردن نام اختصاری الزامی است").min(4, "حداقل 4 کاراکتر").max(10, "حداکثر 10 کاراکتر")
})


export const codeValidation = Yup.object().shape({
     code: Yup.string().required("وارد کردن کد احراز هویت الزامی است").min(5, "حداقل 5 کاراکتر").max(5, "حداکثر 5 کاراکتر")
})