import wallet from '@/assets/icons/stats/wallet.svg?react';
import document_checked from '@/assets/icons/stats/document_checked.svg?react';
import notebook from '@/assets/icons/stats/notebook.svg?react';
import coins from '@/assets/icons/stats/coins.svg?react';
import badge_checked from '@/assets/icons/stats/badge_checked.svg?react';
import alarm from '@/assets/icons/stats/alarm.svg?react';
import badge from '@/assets/icons/stats/badge.svg?react';
import multi_tool from '@/assets/icons/stats/multi_tool.svg?react';
import sent_call from '@/assets/icons/stats/sent_call.svg?react';
import received_call from '@/assets/icons/stats/received_call.svg?react';
import document from '@/assets/icons/stats/document.svg?react';
import zap from '@/assets/icons/stats/zap.svg?react';
import document_invalid from '@/assets/icons/stats/document_invalid.svg?react';
{
  /* <Wallet />; */
  // <Notebook />;
  // <BadgeCheck />;
  // <AlarmClock />;
  // <PhoneOutgoing />;
  // <PhoneIncoming />;
  // <Zap />;
  // <SwatchBook />;
  // <FileX2 />;
  // <FileCheck2 />;
}
const Card = ({ cardsData }) => {
  const iconComponents = {
    wallet,
    document_checked,
    document_invalid,
    notebook,
    coins,
    badge_checked,
    alarm,
    badge,
    multi_tool,
    sent_call,
    received_call,
    document,
    zap,
  };

  const dataKeys = [
    'activeContracts',
    'closeAccountacts',
    'totalOutstandingPrincipal',
    'remainingOutstandingPrincipal',
    'totalAmountPaid',
    'delinquentAmount',
    'paidRisk',
    'advanceAmount',
    'paritiallyAmount',
    'activeTickets',
    'contractUpdateErrors',
    'incommpCalls',
    'outgoingCalls',
  ];

  console.log(cardsData);

  return (
    <>
      {cardsData.length > 0 &&
        dataKeys.map((key) => {
          const card = cardsData.find((item) => item[key]);
          if (card) {
            const { title, content, icon } = card[key]; // Destructure the card data
            const IconComponent = iconComponents[icon] || null;
            return (
              <div
                key={key}
                className="shadow-md border-r-[4px] rounded-lg border-secondary-400 relative overflow-hidden
                grid grid-cols-[max-content,1fr] items-center gap-x-3 py-4 px-5"
              >
                <div className="col-start-1 col-span-1 row-start-1 row-span-2 w-16 h-16 bg-[#DFF4F1BD] rounded-md flex justify-center items-center shadow-sm">
                  {<IconComponent className="w-9 h-10" />}
                </div>

                <IconComponent className="opacity-20 absolute left-0 bottom-0 w-10 h-14 translate-y-3" />

                <h3 className="font-semibold text-xl">{content || '--'}</h3>
                <p className="text-[18px] text-[#878787]">{title || '--'}</p>
              </div>
            );
          }
          return null; // Skip if no matching card is found
        })}
    </>
  );
};

export default Card;
