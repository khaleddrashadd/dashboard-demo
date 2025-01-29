import * as yup from 'yup';

const passwordSchema = yup.object().shape({
  password: yup
    .string()
    .required('كلمة المرور مطلوبة')
    .min(8, 'يجب أن تكون مكونة من 8 أحرف على الأقل')
    .matches(/[A-Z]/, 'يجب أن تحتوي على حرف واحد كبير')
    .matches(/[a-z]/, 'يجب أن تحتوي على حرف واحد صغير')
    .matches(/\d/, 'يجب أن تحتوي على رقم واحد')
    .matches(/[@$!%*?&#]/, 'يجب أن تحتوي على رمز واحد'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'كلمة المرور غير متطابقة'),
});

export default passwordSchema;
