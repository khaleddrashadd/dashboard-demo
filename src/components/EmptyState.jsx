import notFoundImg from '@/assets/icons/not-found.svg';
const EmptyState = ({ children }) => {
  return (
    <div className="flex items-center justify-center flex-col gap-2 py-4">
      <div className="p-5">
        <img
          src={notFoundImg}
          alt="not found icon"
        />
      </div>
      {children}
    </div>
  );
};

export default EmptyState;
