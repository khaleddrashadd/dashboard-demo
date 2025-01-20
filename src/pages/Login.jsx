import TermsAndConditions from '../components/TermsAndConditions';
import { useState } from 'react';
import Footer from '@/components/Footer';
import LoginForm from '@/features/login/LoginForm';
import LoginImage from '@/features/login/LoginImage';

const Login = () => {
  const [isTermsVisible, setIsTermsVisible] = useState(false);
  return (
    <div className="grid place-items-center min-h-screen md:grid-cols-2 relative">
      <div className="flex flex-col h-full justify-center">
        {!isTermsVisible ? (
          <LoginForm onShowTerms={() => setIsTermsVisible(true)} />
        ) : (
          <TermsAndConditions onHideTerms={() => setIsTermsVisible(false)} />
        )}
        <div className="text-xs absolute bottom-0 rtl:right-0 ltr:left-0">
          <Footer />
        </div>
      </div>

      <div className="h-full">
        <LoginImage />
      </div>
    </div>
  );
};

export default Login;
