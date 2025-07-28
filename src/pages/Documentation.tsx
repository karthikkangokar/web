import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Code, 
  ArrowRight, 
  CheckCircle2, 
  Database, 
  User, 
  CreditCard,
  RefreshCw
} from 'lucide-react';

export const Documentation = () => {
  const [activeTab, setActiveTab] = useState<string>('balance');

  const tabs = [
    { id: 'balance', label: 'Balance', icon: <Database className="h-4 w-4" /> },
    { id: 'transfer', label: 'Fund Transfer', icon: <ArrowRight className="h-4 w-4" /> },
    { id: 'statement', label: 'Statement', icon: <FileText className="h-4 w-4" /> },
    { id: 'reconcile', label: 'Reconciliation', icon: <RefreshCw className="h-4 w-4" /> }
  ];

  const codeExamples = {
    balance: `// Get account balance
const response = await finapify.accounts.getBalance({
  accountNumber: '1234567890',
  bankCode: 'HDFC'
});

console.log(\`Current Balance: ₹\${response.balance}\`);
console.log(\`Available Balance: ₹\${response.availableBalance}\`);`,

    transfer: `// Initiate fund transfer
const transfer = await finapify.payments.createTransfer({
  fromAccount: '1234567890',
  toAccount: '0987654321',
  amount: 5000.00,
  bankCode: 'SBI',
  transferType: 'NEFT',
  remarks: 'Invoice payment #INV-001',
  referenceId: 'TXN-' + Date.now()
});

console.log(\`Transfer Status: \${transfer.status}\`);
console.log(\`Transaction ID: \${transfer.transactionId}\`);`,

    statement: `// Fetch account statement
const statement = await finapify.accounts.getStatement({
  accountNumber: '1234567890',
  bankCode: 'AXIS',
  fromDate: '2023-01-01',
  toDate: '2023-01-31',
  format: 'JSON'
});

// Process transactions
statement.transactions.forEach(transaction => {
  console.log(\`\${transaction.date}: ₹\${transaction.amount} - \${transaction.description}\`);
});`,

    reconcile: `// Auto-reconcile bank statement with accounts
const reconciliation = await finapify.reconciliation.process({
  accountNumber: '1234567890',
  bankCode: 'FEDERAL',
  fromDate: '2023-01-01',
  toDate: '2023-01-31',
  erpReference: 'tally-ledger-123'
});

console.log(\`Matched Transactions: \${reconciliation.matchedCount}\`);
console.log(\`Unmatched Transactions: \${reconciliation.unmatchedCount}\`);`
  };

  const apiFeatures = [
    "RESTful API with JSON responses",
    "OAuth 2.0 authentication",
    "Comprehensive error handling",
    "Rate limiting information",
    "Webhooks for real-time notifications",
    "Sandbox environment for testing"
  ];

  return (
    <section className="pt-32 pb-20">
      <div className="container">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center mb-4">
            <div className="bg-primary-100 p-2 rounded-full">
              <Code className="h-6 w-6 text-primary-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">
            Technical API <span className="gradient-text">Documentation</span>
          </h1>
          <p className="text-lg text-slate-600">
            Explore our comprehensive API documentation with code examples, endpoint references, and integration guides.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* API Features */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-2xl font-semibold mb-6 text-slate-900">API Features</h2>
            
            <div className="bg-slate-50 rounded-xl p-6 mb-8">
              <ul className="space-y-4">
                {apiFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6 border border-primary-200">
              <h3 className="text-lg font-semibold mb-4 text-slate-900">Getting Started</h3>
              <p className="text-slate-700 mb-4">
                Our API documentation provides everything you need to integrate with our platform. Create an account to get your API keys and start exploring.
              </p>
              <div className="flex space-x-4">
                <div className="bg-white p-3 rounded-lg shadow-sm flex items-center">
                  <User className="h-5 w-5 text-primary-600 mr-2" />
                  <span className="text-sm font-medium text-slate-700">Register</span>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm flex items-center">
                  <CreditCard className="h-5 w-5 text-primary-600 mr-2" />
                  <span className="text-sm font-medium text-slate-700">Get API Key</span>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm flex items-center">
                  <Code className="h-5 w-5 text-primary-600 mr-2" />
                  <span className="text-sm font-medium text-slate-700">Integrate</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Code Examples */}
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-6 text-slate-900">Code Examples</h2>
            
            <div className="bg-slate-950 rounded-xl overflow-hidden">
              {/* Tabs */}
              <div className="flex border-b border-slate-800">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`flex items-center px-4 py-3 text-sm font-medium transition-colors ${activeTab === tab.id ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-white hover:bg-slate-800/50'}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.icon}
                    <span className="ml-2">{tab.label}</span>
                  </button>
                ))}
              </div>
              
              {/* Code Content */}
              <div className="p-6">
                <pre className="text-sm text-slate-300 font-mono overflow-x-auto">
                  <code>{codeExamples[activeTab as keyof typeof codeExamples]}</code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
