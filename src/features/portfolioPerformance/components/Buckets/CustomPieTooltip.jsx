const CustomPieTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border rounded shadow-lg">
        <p
          className="text-sm"
          style={{ color: payload[0].payload.color }}>
          {payload[0].name}: {payload[0].value.toFixed(2)}%
        </p>
      </div>
    );
  }
  return null;
};
export default CustomPieTooltip;
