import * as yup from 'yup';

const loginSchema = yup.object().shape({
  username: yup.string().required('الرجاء ادخال اسم المستخدم'),
  password: yup.string().required('الرجاء ادخال كلمة المرور'),
});
export default loginSchema;
