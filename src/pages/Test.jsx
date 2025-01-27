import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import * as yup from 'yup';
import { Check, Loader } from 'lucide-react';

function PasswordForm() {
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

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(passwordSchema),
  });

  const password = watch('password', ''); // Watch password for live updates

  const onSubmit = (data) => {
    console.log('Form Data:', data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4">
      <div>
        <label className="block text-sm font-medium">كلمة المرور</label>
        <Input
          type="password"
          {...register('password')}
        />
        <p className="text-red-500 text-sm">{errors.password?.message}</p>
      </div>

      <ValidationChecklist password={password} />

      <div>
        <label className="block text-sm font-medium">تأكيد كلمة المرور</label>
        <Input
          type="password"
          {...register('confirmPassword')}
        />
        <p className="text-red-500 text-sm">
          {errors.confirmPassword?.message}
        </p>
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        تأكيد كلمة المرور
      </button>
    </form>
  );
}

function ValidationChecklist({ password }) {
  const validations = [
    {
      check: password.length >= 8,
      text: 'يجب أن تكون مكونة من 8 أحرف على الأقل',
    },
    { check: /[A-Z]/.test(password), text: 'يجب أن تحتوي على حرف واحد كبير' },
    { check: /[a-z]/.test(password), text: 'يجب أن تحتوي على حرف واحد صغير' },
    { check: /\d/.test(password), text: 'يجب أن تحتوي على رقم واحد' },
    { check: /[@$!%*?&#]/.test(password), text: 'يجب أن تحتوي على رمز واحد' },
  ];

  return (
    <ul className="space-y-2 text-sm">
      {validations.map((v, idx) => (
        <li
          key={idx}
          className={`flex items-center gap-2 ${
            v.check ? 'text-secondary-600' : 'text-ivory-900 font-normal'
          }`}>
          {v.check ? (
            <div className="p-1 bg-secondary-600 rounded-full">
              <Check className="w-4 h-4 text-white" />
            </div>
          ) : (
            <div className="p-1 bg-ivory-300 rounded-full">
              <Loader className="w-4 h-4 text-white" />
            </div>
          )}
          {v.text}
        </li>
      ))}
    </ul>
  );
}

export default PasswordForm;
