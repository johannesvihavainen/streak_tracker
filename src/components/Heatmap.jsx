export default function Heatmap({ days, completionData }) {
    return (
        <div className="heatmap">
            {Array.from({ length: days }, (_, index) => {
                const completionCount = completionData[index] || 0
                return (
                    <div
                        key={index}
                        className={`day-box heat-${completionCount}`}
                        title={`Day ${index + 1}: ${completionCount} tasks done`}
                    >
                        {index + 1}
                    </div>
                )
            })}
        </div>
    )
}