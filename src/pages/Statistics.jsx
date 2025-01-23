import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Card from "@/features/statistics/Card";
import CardSkeleton from "@/features/statistics/CardSkeleton";

const Statistics = () => {
  const cardsData = [
    { title: "Alarm", content: "This is the alarm card.", icon: "alarm" },
    {
      title: "Badge Checked",
      content: "This is the badge checked card.",
      icon: "badge_checked",
    },
    { title: "Badge", content: "This is the badge card.", icon: "badge" },
    { title: "Coins", content: "This is the coins 'card.", icon: "coins" },
    {
      title: "Document Checked",
      content: "This is the document checked card.",
      icon: "document_checked",
    },
    {
      title: "Multi Tool",
      content: "This is the multi-tool card.",
      icon: "multi_tool",
    },
    {
      title: "Notebook",
      content: "This is the notebook card.",
      icon: "notebook",
    },
    {
      title: "Received Call",
      content: "This is the received call card.",
      icon: "received_call",
    },
    {
      title: "Sent Call",
      content: "This is the sent call card.",
      icon: "sent_call",
    },
  ];

  const portfolios = [
    {
      id: 1,
      name: "Portfolio",
    },
    {
      id: 2,
      name: "Portfolio",
    },
    {
      id: 3,
      name: "Portfolio",
    },
    {
      id: 4,
      name: "Portfolio",
    },
  ];

  const handlePortfolioChange = (selectedId) => {
    console.log("Selected Portfolio ID:", selectedId);
  };

  return (
    <div className="px-6 mt-4 z-20 ">
      {/*  */}
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center mb-4">
        <h2 className=" font-bold text-2xl">الإحصائيات</h2>
        <div className=" flex flex-col gap-2 bg-primary-50 rounded-lg shadow-md p-3">
          <h3 className="title text-ivory-900 text-sm">المحفظة</h3>
          <Select onValueChange={handlePortfolioChange}>
            <SelectTrigger className="w-[180px] bg-white">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              {portfolios.map((item) => (
                <SelectItem value={item.id} key={item.id}>
                  {item.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      {/*  */}
      <div className="grid md:grid-cols-[repeat(2,1fr)] grid-cols-1 gap-4">
        {cardsData.length > 0 ? (
          cardsData.map((card, index) => <Card key={index} card={card} />)
        ) : (
          <CardSkeleton />
        )}
      </div>
    </div>
  );
};

export default Statistics;
