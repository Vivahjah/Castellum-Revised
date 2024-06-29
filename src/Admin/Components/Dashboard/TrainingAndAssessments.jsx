/* eslint-disable react/prop-types */
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const TrainingAndAssessments = ({ data }) => {
    // Custom formatter for the legend text to style it dynamically
    const renderColorfulLegendText = (value, entry) => {
        const { color } = entry;
        return <span style={{ color, fontSize: '16px' }}>{value}</span>;
    };



    return (
        <div className="flex justify-center">
            <BarChart
                width={1000}
                height={450}
                data={data}
                margin={{
                }}
                background={{ color: "transparent" }}
            >
                <Legend
                    formatter={renderColorfulLegendText}
                    align="right"
                    verticalAlign="top"
                    wrapperStyle={{
                        paddingBottom: '20px', // Adds space at the bottom        

                        fontSize: '16px', // Increase font size for better readability
                        marginBottom: '20px'
                    }}
                />
                <CartesianGrid strokeDasharray="4 4" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} />
                <Tooltip wrapperStyle={{ backgroundColor: 'transparent' }} />
                <Bar dataKey="learning_campaigns" name="Learning" fill="#FA053E" radius={[10, 10, 0, 0]} barSize={50} />
                <Bar dataKey="phishing_campaigns" name="Assessment" fill="#EF5DA8" radius={[10, 10, 0, 0]} barSize={50} />
            </BarChart>
        </div>
    );
};

export default TrainingAndAssessments;
