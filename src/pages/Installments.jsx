import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import InputWrapper from "@/components/InputWrapper";
import { RotateCcw } from "lucide-react";
import Table from "@/components/testComponent/Table";
import { default as Card } from "@/features/installments/Card";
import CardSkeleton from "@/features/installments/CardSkeleton";

const Statistics = () => {
  const cardsData = [
    {
      title: "5701",
      content: "SR 535335",
      icon: "الفواتير",
      variant: "primary-500",
    },
    {
      title: "5701",
      content: "SR 535335",
      icon: "الفواتير",
      variant: "secondary-400",
    },
    {
      title: "5701",
      content: "SR 535335",
      icon: "الفواتير",
      variant: "danger-200",
    },
    {
      title: "5701",
      content: "SR 535335",
      icon: "الفواتير",
      variant: "extended-700",
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
      <div className="flex flex-col gap-4 items-start mb-4">
        <h2 className=" font-bold text-2xl">الدفعات</h2>
        <div className="grid grid-cols-2 w-full gap-4">
          {/*  */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-4">
              <InputWrapper title={"المحفظة"}>
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
              </InputWrapper>

              <InputWrapper title={"المحفظة"}>
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
              </InputWrapper>

              <InputWrapper title={"المحفظة"}>
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
              </InputWrapper>
            </div>
            <div className="flex flex-col gap-4">
              <InputWrapper title={"المحفظة"}>
                <Input type="text" id="email" placeholder="Email" />
              </InputWrapper>

              <InputWrapper title={"المحفظة"}>
                <Input type="email" id="email" placeholder="Email" />
              </InputWrapper>
              <InputWrapper title={"المحفظة"}>
                <Input type="email" id="email" placeholder="Email" />
              </InputWrapper>
            </div>
            <Button className="flex items-center bg-white border border-solid border-primary-500 rounded-md text-primary-500 hover:bg-white shadow-sm">
              <RotateCcw />
              إعادة تعيين
            </Button>
          </div>
          {/*  */}
          <div className="grid grid-rows-[max-content,1fr] grid-cols-2 gap-4shadow-lg px-4 pt-3 border border-ivory-200 rounded-md shadow-lg">
            <h3 className="text-semibold text-lg border-b border-b-solid border-[#D8D8D8] pb-3 col-start-1 col-span-full">
              إحصائيات الفواتير
            </h3>
            <div className="grid md:grid-cols-[repeat(2,1fr)] grid-cols-1 gap-4 col-start-1 col-span-full py-3">
              {cardsData.length > 0 ? (
                cardsData.map((card, index) => <Card key={index} card={card} />)
              ) : (
                <CardSkeleton />
              )}
            </div>
          </div>
          {/*  */}
          <Table className="col-start-1 col-span-full" />
        </div>
      </div>
    </div>
  );
};

export default Statistics;
