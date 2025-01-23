const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 border rounded shadow-lg">
        <p className="text-sm font-medium">{label}</p>
        <p className="text-sm text-orange-500">
          الأداء المتوقع: {payload[0].value}
        </p>
        <p className="text-sm text-green-500">
          الأداء الفعلي: {payload[1].value}
        </p>
      </div>
    );
  }
  return null;
};
export default CustomTooltip;
