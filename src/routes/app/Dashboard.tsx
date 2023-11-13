const Dashboard = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="stats shadow stats-horizontal">
        <div className="stat">
          <div className="stat-title">Total New Customers</div>
          <div className="stat-value">0</div>
          <div className="stat-desc">New customers today</div>
        </div>
        <div className="stat">
          <div className="stat-title">Total Main Products</div>
          <div className="stat-value">0</div>
          <div className="stat-desc">All main products</div>
        </div>
        <div className="stat">
          <div className="stat-title">Total Suppliers</div>
          <div className="stat-value">0</div>
          <div className="stat-desc">All Zingati Suppliers</div>
        </div>
        <div className="stat">
          <div className="stat-title">Total New Orders</div>
          <div className="stat-value">0</div>
          <div className="stat-desc">New orders today</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
