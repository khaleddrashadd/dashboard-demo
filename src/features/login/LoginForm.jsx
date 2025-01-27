import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { useState } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const schema = yup.object().shape({
    username: yup.string().required('الرجاء ادخال اسم المستخدم'),
    password: yup.string().required('الرجاء ادخال كلمة المرور'),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log('Form Data:', data);
    // Handle form submission
  };
  return (
    <form
      className="w-full"
      onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-6 flex flex-col gap-2 items-start">
        <Label
          htmlFor="username"
          className="block text-sm text-ivory-900">
          اسم المستخدم
        </Label>
        <Input
          {...register('username')}
          id="username"
          className={`w-full border border-ivory-300 rounded p-2 font-normal text-sm  focus-visible:ring-0 focus-visible:border-primary-500 focus-visible:ring-offset-0 ${
            errors.username
              ? 'border-danger-200 focus-visible:border-danger-200'
              : ''
          }`}
          placeholder="@username"
        />
        {!!errors.username && (
          <p className="text-danger-200 text-sm">{errors.username.message}</p>
        )}
      </div>
      <div className="mb-6 flex flex-col gap-2 items-start">
        <Label className="block text-sm text-ivory-900 mt-2">كلمة المرور</Label>

        <div className="relative w-full">
          <Input
            {...register('password')}
            type={showPassword ? 'text' : 'password'}
            className={`w-full border border-ivory-300 rounded p-2 font-normal text-sm  focus-visible:ring-0 focus-visible:border-primary-500 focus-visible:ring-offset-0  rtl:pl-9 ltr:pr-9 peer ${
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
        {!!errors.password && (
          <p className="text-danger-200 text-sm">{errors.password.message}</p>
        )}
      </div>
      <Button className="w-full py-4 h-auto">تسجيل الدخول</Button>
    </form>
  );
};

export default LoginForm;
