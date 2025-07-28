import React from 'react';

export const Dashboard = () => {
  const banks = [
    { name: 'Canara Bank', balance: '₹50,000', status: 'connected' },
  ];

  const erpPlatforms = ['Tally', 'ERPNext', 'Zoho'];

  const transactions = [
    { id: 1, date: '2023-10-01', bank: 'Canara Bank', platform: 'Tally', amount: '₹5,000' },
    { id: 2, date: '2023-10-02', bank: 'Canara Bank', platform: 'Zoho', amount: '₹10,000' },
  ];

  const kycCompleted = false;
  const clientId = '12345';
  const secret = 'abcde';
  const businessId = '67890';

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Connected Banks</h2>
        <ul>
          {banks.map((bank, index) => (
            <li key={index} className="mb-2">
              <span className="font-medium">{bank.name}</span>: {bank.balance}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">ERP Platforms</h2>
        <ul>
          {erpPlatforms.map((platform, index) => (
            <li key={index} className="mb-2">
              <button className="btn btn-primary">{platform}</button>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Transactions</h2>
        <div className="mb-4">
          <label className="block mb-2">Filter by:</label>
          <select className="mr-2">
            <option>Time</option>
            <option>Bank</option>
            <option>Platform</option>
          </select>
        </div>
        <ul>
          {transactions.map((transaction) => (
            <li key={transaction.id} className="mb-2">
              {transaction.date} - {transaction.bank} - {transaction.platform} - {transaction.amount}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Profile</h2>
        {!kycCompleted && (
          <div className="mb-4">
            <span className="text-red-500">Complete KYC</span>
          </div>
        )}
        <div>
          <p>Client ID: {clientId}</p>
          <p>Secret: {secret}</p>
          <p>Business ID: {businessId}</p>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
