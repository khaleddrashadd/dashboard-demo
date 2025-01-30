import notFoundImg from '@/assets/icons/not-found.svg';
import { cn } from '@/lib/utils';
const EmptyState = ({ children, className }) => {
  return (
    <div
      className={cn(
        'flex items-center justify-center flex-col gap-2 py-4',
        className
      )}
    >
      <div className="p-5">
        <img src={notFoundImg} alt="not found icon" />
      </div>
      {children}
    </div>
  );
};

export default EmptyState;
