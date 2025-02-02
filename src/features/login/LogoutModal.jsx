import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { CircleArrowOutDownLeft } from 'lucide-react';
import { useNavigate } from 'react-router';

const LogoutModal = ({ isVisible, onClose }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login', { replace: true });
    console.log('User logged out');
    onClose(false); // Close the modal
  };

  return (
    <>
      {/* Logout Modal */}
      <AlertDialog open={isVisible} onOpenChange={onClose}>
        <AlertDialogContent className="w-[31rem] px-6 py-8">
          <AlertDialogHeader>
            <div className="flex flex-col gap-6 items-center">
              {/* Icon */}
              <AlertDialogTitle className="bg-primary-100 rounded-full p-8">
                <CircleArrowOutDownLeft className="text-primary-500 w-[53px] h-[53px] rotate-45" />
              </AlertDialogTitle>

              {/* Title */}
              <AlertDialogDescription className="text-xl font-bold text-ivory-950">
                انت على وشك تسجيل الخروج من النظام
              </AlertDialogDescription>
            </div>
          </AlertDialogHeader>

          {/* Buttons */}
          <AlertDialogFooter className="flex flex-col gap-4 w-full">
            <AlertDialogAction
              className="w-full rounded-md"
              onClick={handleLogout}
            >
              نعم، سجل خروج
            </AlertDialogAction>
            <AlertDialogCancel
              className="w-full rounded-md"
              onClick={() => onClose(false)}
            >
              لا، ابق بالنظام
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default LogoutModal;
