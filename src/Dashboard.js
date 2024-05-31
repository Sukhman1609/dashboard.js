import React from 'react';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { useData } from './DataContext';
import './Dashboard.css'; 

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const data = useData();

  const randomColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16);

  
  const lineChartData = {
    labels: data?.lineChartLabels || ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Monthly Revenue',
        data: data?.lineChartData || [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: randomColor(),
        borderColor: randomColor(),
        borderWidth: 2,
      },
    ],
  };

  const barChartData = {
    labels: data?.barChartLabels || ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: 'Number of Items Sold',
        data: data?.barChartData || [12, 19, 3, 5, 2, 3],
        backgroundColor: randomColor(),
        borderColor: randomColor(),
        borderWidth: 2,
      },
    ],
  };

  const doughnutChartData = {
    labels: data?.doughnutChartLabels || ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: 'Product Categories',
        data: data?.doughnutChartData || [300, 50, 100],
        backgroundColor: [randomColor(), randomColor(), randomColor()],
        borderColor: [randomColor(), randomColor(), randomColor()],
        borderWidth: 2,
      },
    ],
  };

  return (
    <div>
      <h2>Data is Shown below:</h2>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Line Chart</h5>
              <Line
                data={lineChartData}
                options={{
                  scales: {
                    x: {
                      type: 'category',                     },
                  },
                }}
              />
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Bar Chart</h5>
              <Bar
                data={barChartData}
                options={{
                  scales: {
                    x: {
                      type: 'category', 
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Doughnut Chart</h5>
              <Doughnut data={doughnutChartData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
