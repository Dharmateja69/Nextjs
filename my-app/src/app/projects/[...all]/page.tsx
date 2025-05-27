const Catchingallroutes = async ({ params }: { params: { all: string[] } }) => {
  const { all } = await params;
  return (
    <div>
      <h1>Project {all}</h1>
      all routes
      {all.map((index) => (
        <li key={index}>{index}</li>
      ))}
    </div>
  );
};

export default Catchingallroutes;
