import { REGEXP_ONLY_DIGITS } from 'input-otp';
import * as yup from 'yup';

const otpSchema = yup.object().shape({
  otp: yup
    .string()
    .required('الرجاء ادخال رمز التحقق')
    .length(6, 'رمز التحقق يجب ان يتكون من 6 ارقام')
    .matches(REGEXP_ONLY_DIGITS, 'رمز التحقق يجب ان يتكون من ارقام فقط'),
});

export default otpSchema;
