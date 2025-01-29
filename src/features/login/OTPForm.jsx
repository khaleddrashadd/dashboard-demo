import { Button } from '@/components/ui/button';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import { Label } from '@/components/ui/label';
import { STEPS } from '@/constants/steps';
import { REGEXP_ONLY_DIGITS } from 'input-otp';
import { ArrowRight } from 'lucide-react';
import OTPCounter from './OTPCounter';
import * as yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const OTPForm = ({ setStep }) => {
  const schema = yup.object().shape({
    otp: yup
      .string()
      .required('الرجاء ادخال رمز التحقق')
      .length(6, 'رمز التحقق يجب ان يتكون من 6 ارقام')
      .matches(REGEXP_ONLY_DIGITS, 'رمز التحقق يجب ان يتكون من ارقام فقط'),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center flex-col px-3">
      <div className="flex flex-col w-full">
        <div className="flex items-center gap-2 mb-4">
          <Button
            variant="ghost"
            className="p-0 hover:bg-transparent"
            onClick={() => setStep(STEPS.LOGIN)}>
            <ArrowRight />
          </Button>
          <h2 className="font-semibold text-ivory-950 text-xl">
            إعادة تعيين كلمة المرور
          </h2>
        </div>
        <div className="mb-6">
          <span className="block text-ivory-950">
            الرجاء إدخال رمز التحققق المكون من 6 أرقام المرسل إلى
          </span>
          <span className="block text-secondary-400 underline">
            {`\u202A +966 ** *** **65`}
          </span>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-2 items-start mb-8">
            <Label className="text-sm text-ivory-900">رمز التحقق</Label>
            <Controller
              name="otp"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <InputOTP
                  {...field}
                  maxLength={6}
                  pattern={REGEXP_ONLY_DIGITS}>
                  <InputOTPGroup
                    dir="ltr"
                    className="gap-2">
                    <InputOTPSlot
                      index={0}
                      className={errors.otp ? 'border-danger-200' : ''}
                    />
                    <InputOTPSlot
                      index={1}
                      className={errors.otp ? 'border-danger-200' : ''}
                    />
                    <InputOTPSlot
                      index={2}
                      className={errors.otp ? 'border-danger-200' : ''}
                    />
                    <InputOTPSlot
                      index={3}
                      className={errors.otp ? 'border-danger-200' : ''}
                    />
                    <InputOTPSlot
                      index={4}
                      className={errors.otp ? 'border-danger-200' : ''}
                    />
                    <InputOTPSlot
                      index={5}
                      className={errors.otp ? 'border-danger-200' : ''}
                    />
                  </InputOTPGroup>
                </InputOTP>
              )}
            />
            {errors.otp && (
              <span className="text-xs text-danger-200">
                {errors.otp.message}
              </span>
            )}
            <OTPCounter />
          </div>
          <Button className="w-full h-auto py-4">تأكيد</Button>
        </form>
      </div>
    </div>
  );
};

export default OTPForm;
