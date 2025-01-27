const CustomDot = (props) => {
  const { cx, cy, stroke, opacity } = props;

  return (
    <svg
      x={cx - 10}
      y={cy - 10}
      width={20}
      height={20}
      opacity={opacity}
      viewBox="0 0 20 20">
      {/* Outer transparent circle */}
      <circle
        cx={10}
        cy={10}
        r={10}
        fill={stroke}
        fillOpacity={0.2}
      />
      {/* Inner solid circle */}
      <circle
        cx={10}
        cy={10}
        r={5}
        fill={stroke}
      />
    </svg>
  );
};
export default CustomDot;
