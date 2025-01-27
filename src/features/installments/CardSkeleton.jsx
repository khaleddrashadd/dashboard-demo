import { Skeleton } from "@/components/ui/skeleton";

const CardSkeleton = () => {
  return (
    <>
      <Skeleton className="w-full h-full" />
      <Skeleton className="w-full h-full" />
      <Skeleton className="w-full h-full" />
      <Skeleton className="w-full h-full" />
    </>
  );
};

export default CardSkeleton;
