import DataCard from '@/components/DataCard';

const TotalValuesItems = () => {
  return (
    <div>
      <div className="grid grid-cols-6 gap-3 mb-3">
        <DataCard
          wrapperClass="col-span-6 sm:col-span-3 2xl:col-span-2"
          title="SR 38,854.03"
          subtitle="قيمة المحافظ"
        />
        <DataCard
          wrapperClass="col-span-6 sm:col-span-3 2xl:col-span-2"
          title="SR 38,854.03"
          subtitle="قيمة الأصل"
        />
        <DataCard
          wrapperClass="col-span-6 sm:col-span-6 2xl:col-span-2"
          title="SR 38,854.03"
          subtitle="قيمة الربح"
        />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <DataCard
          title="SR 38,854.03"
          subtitle="التحصيل"
          variant="warn"
        />
        <DataCard
          title="SR 38,854.03"
          subtitle="الربح من التحصيل"
          variant="warn"
        />
      </div>
    </div>
  );
};

export default TotalValuesItems;
