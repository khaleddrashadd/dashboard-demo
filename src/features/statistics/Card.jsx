import React, { Suspense } from "react";

const Card = ({ card }) => {
  const IconComponent = React.lazy(() =>
    import(`@/assets/icons/stats/${card.icon}.svg?react`)
  );

  return (
    <div
      className="shadow-md border-r-[4px] rounded-lg border-secondary-400 relative overflow-hidden 
    grid grid-cols-[max-content,1fr] items-center gap-x-3 py-4 px-5"
    >
      <div className="col-start-1 col-span-1 row-start-1 row-span-2 w-16 h-16 bg-[#DFF4F1BD] rounded-md flex justify-center items-center shadow-sm">
        <Suspense>
          {card.icon && <IconComponent className="w-9 h-10" />}
        </Suspense>
      </div>

      <Suspense>
        {card.icon && (
          <IconComponent className="opacity-20 absolute left-0 bottom-0 w-10 h-14  translate-y-3" />
        )}
      </Suspense>
      <h3 className="font-semibold text-xl">{card.title}</h3>
      <p className="text-[18px] text-[#878787]">{card.content}</p>
    </div>
  );
};

export default Card;
