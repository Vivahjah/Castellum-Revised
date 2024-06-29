
/* eslint-disable react/prop-types */

import { useRef, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
// import { MdOutlineChevronRight } from 'react-icons/md';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const EmployeeRiskChart = ({ data }) => {
    
    const chartRef = useRef(null);

    const chartData = {
        labels: [''],
        datasets: [
            {
                label: 'Low',
                data: [data.risk_rating.low],
                backgroundColor: ['#B1E3FF'],
                borderRadius: 5,


            },
            {
                label: 'Medium',                
                data: [data.risk_rating.medium],
                backgroundColor: ['#EF5DA8'],
                borderRadius: 5,

            },
            {
                label: 'High',
                data: [data.risk_rating.high],
                backgroundColor: ['red'],
                borderRadius: 5,
            },
        ],
    };

    const options = {
        responsive: true,
        // maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'right',
                align: 'center',
                labels: {
                    boxWidth: 10,
                },
            },

        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                beginAtZero: true,
            },
            y: {
                grid: {
                    display: false,
                },
                ticks: {
                    display: false,
                },
                beginAtZero: true,
            },
        },


        animation: {
            onComplete: () => {
                if (chartRef.current) {
                    const chart = chartRef.current;
                    const ctx = chart.ctx;
                    ctx.font = '14px Arial';
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'bottom';
                    chart.data.datasets.forEach((dataset, datasetIndex) => {
                        const meta = chart.getDatasetMeta(datasetIndex);
                        meta.data.forEach((bar, index) => {
                            const data = dataset.data[index];
                            ctx.fillText(data, bar.x, bar.y + 4);
                        });
                    });
                }
            },
        },
    };

    useEffect(() => {
        if (chartRef.current) {
            chartRef.current.update();
        }
    });




    return (
        <div>
            <Bar ref={chartRef} data={chartData} options={options} radius={[10, 10, 0, 0]} className='mt-10 ' />
            <div className="">
                <p className="text-center  font-medium text-text">
                    Total number of Employees: {data.employees_count}
                </p>
            </div>
            <div className="mt-4 space-y-2">
                <div className=" flex gap-6 items-center">
                    <p className="bg-primary h-8 w-8 text-center flex justify-center items-center text-light rounded-md">
                        {data.active_employees_count}
                    </p>
                    Active employees
                </div>
                <div className="flex gap-6 items-center ">
                    <p className="bg-primary h-8 w-8 text-center flex justify-center items-center text-light rounded-md">
                        {data.departments_count}
                    </p>
                    Departments
                </div>
                <div className="flex gap-6 items-center">
                    <p className="bg-primary h-8 w-8 text-center flex justify-center items-center text-light rounded-md">
                        {data.inactive_employees_count}
                    </p>
                    In-active Employees
                </div>
            </div>

        </div>
    );
};

export default EmployeeRiskChart;




