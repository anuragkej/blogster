const Home = (e) => {
  const handleClick = () => {
    console.log("hello, everyone", e);
  };
  const handleClickAgain = (name, e) => {
    console.log("Hello, " + name, e.target);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={(e) => handleClickAgain("Anurag", e)}>
        Click me Again
      </button>
    </div>
  );
};

export default Home;
