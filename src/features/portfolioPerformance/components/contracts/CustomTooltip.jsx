const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border rounded shadow-lg">
        {payload.map((entry, index) => (
          <p
            key={index}
            style={{ color: entry.color }}>
            {entry.value.toLocaleString()}
          </p>
        ))}
      </div>
    );
  }
  return null;
};
export default CustomTooltip;
