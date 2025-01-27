import Footer from '@/components/Footer';
import LoginForm from '@/features/login/LoginForm';
import OTPForm from '@/features/login/OTPForm';
import LoginImage from '@/features/login/LoginImage';
import { useState } from 'react';
import { STEPS } from '@/constants/steps';
import ChangePasswordForm from '@/features/login/ChangePasswordForm';

const Login = () => {
  const [step, setStep] = useState(STEPS.CHANGE_PASSWORD);
  return (
    <div className="grid place-items-center min-h-[max(100vh,35rem)] md:grid-cols-2 relative">
      <div className="flex flex-col h-full justify-center">
        {step === STEPS.LOGIN && <LoginForm setStep={setStep} />}
        {step === STEPS.OTP && <OTPForm setStep={setStep} />}
        {step === STEPS.CHANGE_PASSWORD && (
          <ChangePasswordForm setStep={setStep} />
        )}

        <div className="text-xs absolute bottom-0 rtl:right-0 ltr:left-0">
          <Footer />
        </div>
      </div>

      <div className="h-full">{<LoginImage />}</div>
    </div>
  );
};

export default Login;
