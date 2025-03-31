const Dashboard = () => {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
        <h2 className="text-4xl font-extrabold text-white mb-6">Dashboard</h2>
        <p className="text-lg text-white mb-4">Welcome to your personal dashboard</p>
        <div className="bg-white p-6 rounded-lg shadow-xl w-96">
          <p className="text-lg text-gray-700">Here you can manage your skin health data, consultations, and more.</p>
        </div>
      </div>
    );
  };
  
  export default Dashboard;
  