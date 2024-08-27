const Home = (e) => {
  let name = "Luigi";
  const handleClick = () => {
    console.log("hello, everyone", e);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{name}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default Home;
