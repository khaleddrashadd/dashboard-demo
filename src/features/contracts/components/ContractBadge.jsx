import { cn } from '@/lib/utils';

const ContractBadge = ({ className, variant = 'default', children }) => {
  const badgeVariant = {
    default: 'bg-primary-50 text-primary',
    warn: 'bg-extended-50 text-extended-500',
    danger: 'bg-danger-50 text-danger-300',
  };
  return (
    <div
      className={cn(
        `px-[0.625rem] py-1 rounded-full w-max text-base font-semibold ${badgeVariant[variant]}`,
        className
      )}>
      {children}
    </div>
  );
};

export default ContractBadge;
