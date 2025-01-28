import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { EyeIcon, EyeOffIcon, X } from 'lucide-react';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import logo from '@/assets/images/logo.png';
import { STEPS } from '@/constants/steps';
import { useDispatch } from 'react-redux';
import { setPhoneNumber, setUsername } from '../store/loginSlice';
import { loginService } from '../services/loginService';
import loginSchema from '../schema/loginSchema';

const LoginForm = ({ setStep }) => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onLogin = async (data) => {
    return await loginService(data);
  };

  const {
    mutate,
    isPending,
    error: reqError,
  } = useMutation({
    mutationFn: onLogin,
    onSuccess({ data }, variables) {
      dispatch(setUsername(variables.username));
      dispatch(setPhoneNumber(data.data));
      setStep(STEPS.OTP);
    },
  });
  const onSubmit = (data) => mutate(data);

  return (
    <div className="flex items-center justify-center flex-col px-3">
      <div className="mb-6 xs:w-full h-[66px] w-full">
        <img
          src={logo}
          alt="logo"
          className="h-full"
        />
      </div>
      <div className="text-center flex flex-col w-full">
        <h2 className="mb-6 font-semibold text-ivory-950 text-xl">
          تسجيل الدخول إلى حسابك
        </h2>
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
              className={`w-full border border-ivory-300 rounded px-2 py-3 h-auto font-normal text-sm  focus-visible:ring-0 focus-visible:border-primary-500 focus-visible:ring-offset-0 ${
                errors.username
                  ? 'border-danger-200 focus-visible:border-danger-200'
                  : ''
              }`}
              placeholder="@username"
            />
            {!!errors.username && (
              <p className="text-danger-200 text-sm">
                {errors.username.message}
              </p>
            )}
          </div>
          <div className="mb-6 flex flex-col gap-2 items-start">
            <Label className="block text-sm text-ivory-900 mt-2">
              كلمة المرور
            </Label>

            <div className="relative w-full">
              <Input
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
            {!!errors.password && (
              <p className="text-danger-200 text-sm">
                {errors.password.message}
              </p>
            )}
          </div>

          {reqError && (
            <div className="mb-8 p-4 flex items-center gap-2 bg-danger-150 border border-danger-100 rounded-sm ">
              <div className=" border-2 border-danger-200 rounded-full">
                <X className="text-danger-200 w-6 h-6 font-bold" />
              </div>
              <p className="text-sm font-semibold text-ivory-950">
                {reqError.message}
              </p>
            </div>
          )}

          <Button
            className="w-full py-4 h-auto"
            disabled={isPending}>
            تسجيل الدخول
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
