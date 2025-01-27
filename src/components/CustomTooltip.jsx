const CustomTooltip = ({ active, payload, showKey = true, customData }) => {
  if (active && payload && payload.length) {
    const data = customData && customData.length ? customData : payload;
    return (
      <div className="bg-white p-2 border rounded shadow-lg">
        {data.map((entry, index) => (
          <div
            className="flex items-center gap-1"
            key={index}
            style={{ color: entry.color }}>
            {showKey && <span>{entry.name}:</span>}
            <span>{entry.value.toLocaleString()}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};
export default CustomTooltip;
