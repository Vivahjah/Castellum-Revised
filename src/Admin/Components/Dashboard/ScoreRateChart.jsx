const ScoreRateChart = ({ value}) => {
   
    const radius = 80;
    const strokeWidth = 20;
    const normalizedRadius = radius - strokeWidth * 0.5;
    const circumference = normalizedRadius * 2 * Math.PI;
    const startAngle = 90;
    const strokeDashoffset = value ? circumference - (value / 100) * circumference : circumference;
    const rotation = `rotate(${startAngle} ${radius} ${radius})`;
  
    // Determine color based on value
    const fillColor = value ? "#FA053E" : "#EFEFFD"; // Grey if no score or score is 0
    const textColor = value ? "#51c5cf" : "#CCCCCC";
  
    return (
      <div className="flex mt-8 justify-center items-center">
        <svg height={radius * 2} width={radius * 2}>
          <circle
            stroke="#EEF2F5"
            fill="transparent"
            strokeWidth={strokeWidth}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          <circle
            stroke={fillColor}
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference + ' ' + circumference}
            style={{ strokeDashoffset, transform: rotation }}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            transform={`rotate(${-startAngle} ${radius} ${radius})`} 
          />
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            stroke={textColor}
            strokeWidth="0px"
            dy=".3em"
            fontSize={radius * 0.4}
            className="text-xl font-bold font-raleway"
          >
            {value}%
          </text>
        </svg>
      </div>
    );
  };
  
  export default ScoreRateChart;
  