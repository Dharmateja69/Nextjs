const Dashboard = async () => {
  //   if (2 < 5) {
  //     throw new Error("Error in Dashboard");
  //   }
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve("Content is currently loading...");
    }, 4000)
  );
  return <div>Dashboard</div>;
};

export default Dashboard;
