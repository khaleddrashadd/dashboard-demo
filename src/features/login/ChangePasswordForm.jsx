import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import * as yup from 'yup';
import ValidationCheckList from './ValidationCheckList';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { Label } from '@/components/ui/label';
import TermsModal from './TermsModal';

const ChangePasswordForm = () => {
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

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
    <div className="flex flex-col items-center justify-center px-3">
      <h2 className="mb-6 font-semibold text-ivory-950 text-xl">
        تعيين كلمة مرور جديدة
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 w-full">
        <div className="space-y-2">
          <Label
            className="block text-sm text-ivory-900"
            htmlFor="password">
            كلمة المرور
          </Label>
          <div className="relative w-full">
            <Input
              id="password"
              {...register('password')}
              type={showPassword ? 'text' : 'password'}
              className={`w-full border border-ivory-300 rounded px-2 py-3 h-auto font-normal text-sm  focus-visible:ring-0 focus-visible:border-primary-500 focus-visible:ring-offset-0  rtl:pl-9 ltr:pr-9 peer ${
                errors.password
                  ? 'border-danger-200 focus-visible:border-danger-200'
                  : ''
              }`}
              placeholder="أدخل كلمة المرور"
            />

            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="absolute rtl:left-0 ltr:right-0 top-0 h-full px-3 py-2 hover:bg-transparent peer-placeholder-shown:cursor-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:opacity-60"
              onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? (
                <EyeIcon
                  className="h-4 w-4"
                  aria-hidden="true"
                />
              ) : (
                <EyeOffIcon
                  className="h-4 w-4"
                  aria-hidden="true"
                />
              )}
            </Button>
          </div>
          <p className="text-red-500 text-sm">{errors.password?.message}</p>
        </div>

        <ValidationCheckList password={password} />

        <div className="space-y-2">
          <Label
            className="block text-sm text-ivory-900"
            htmlFor="confirmPassword">
            تأكيد كلمة المرور
          </Label>
          <div className="relative w-full">
            <Input
              id="confirmPassword"
              {...register('confirmPassword')}
              type={showPassword ? 'text' : 'password'}
              className={`w-full border border-ivory-300 rounded px-2 py-3 h-auto font-normal text-sm  focus-visible:ring-0 focus-visible:border-primary-500 focus-visible:ring-offset-0  rtl:pl-9 ltr:pr-9 peer ${
                errors.password
                  ? 'border-danger-200 focus-visible:border-danger-200'
                  : ''
              }`}
              placeholder="أدخل كلمة المرور"
            />

            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="absolute rtl:left-0 ltr:right-0 top-0 h-full px-3 py-2 hover:bg-transparent peer-placeholder-shown:cursor-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:opacity-60"
              onClick={() => setShowConfirmPassword((prev) => !prev)}>
              {showConfirmPassword ? (
                <EyeIcon
                  className="h-4 w-4"
                  aria-hidden="true"
                />
              ) : (
                <EyeOffIcon
                  className="h-4 w-4"
                  aria-hidden="true"
                />
              )}
            </Button>
          </div>
          <p className="text-red-500 text-sm">
            {errors.confirmPassword?.message}
          </p>
        </div>

        <Button className="h-auto py-4 w-full lg:w-[450px]">
          تأكيد كلمة المرور
        </Button>
      </form>
      <TermsModal />
    </div>
  );
};

export default ChangePasswordForm;
