import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Card from "@/features/statistics/Card";

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

  return (
    <div className="px-6 mt-4 z-20 ">
      {/*  */}
      <div className="flex justify-between items-center mb-4">
        <h2 className=" font-bold text-2xl">الإحصائيات</h2>
        <div className=" flex flex-col gap-2">
          <h3 className="title text-ivory-900 text-sm">المحفظة</h3>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      {/*  */}
      <div className="grid grid-cols-[repeat(2,50%)] gap-4">
        {cardsData.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Statistics;
