import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import Header from './Header';

const recentOrders = [
  { date: '16 Mar, 2019', name: 'Elvis Presley', shipTo: 'Tupelo, MS', paymentMethod: 'VISA •••• 3719', saleAmount: 312.44 },
  { date: '16 Mar, 2019', name: 'Paul McCartney', shipTo: 'London, UK', paymentMethod: 'VISA •••• 2574', saleAmount: 866.99 },
  { date: '16 Mar, 2019', name: 'Tom Scholz', shipTo: 'Boston, MA', paymentMethod: 'MC •••• 1253', saleAmount: 100.81 },
  { date: '16 Mar, 2019', name: 'Michael Jackson', shipTo: 'Gary, IN', paymentMethod: 'AMEX •••• 2000', saleAmount: 654.39 },
  { date: '15 Mar, 2019', name: 'Bruce Springsteen', shipTo: 'Long Branch, NJ', paymentMethod: 'VISA •••• 5912', saleAmount: 212.79 },
];

function Dashboard() {
  return (
    <div className="dashboard-container">
      <Header />
      <div className="drawer">
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/managehall">Manage Halls</Link></li>
          <li><Link to="/reports">Reports</Link></li>
        </ul>
      </div>
      <main className="content">
        <h3>Dashboard</h3>
        <div className="grid-container">
          <div className="card large">
            <h4>Booking Graph</h4>
            {/* Placeholder for Line Chart */}
            <div className="chart">Line Chart Here</div>
          </div>
          <div className="card">
            <h3>Booking Sales</h3>
            <p className="amount">$3,024.00</p>
            <p>on 15 March, 2019</p>
          </div>
          <div className="card full">
            <h4>Recent Orders</h4>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Name</th>
                  <th>Location</th>
                  <th>Payment Method</th>
                  <th>Sale Amount</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.date + order.name}>
                    <td>{order.date}</td>
                    <td>{order.name}</td>
                    <td>{order.shipTo}</td>
                    <td>{order.paymentMethod}</td>
                    <td>{order.saleAmount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
