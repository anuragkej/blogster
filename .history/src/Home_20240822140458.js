const Home = (e) => {
  const handleClick = () => {
    console.log("hello, ninjas", e);
  };
  const handleClickAgain = (name, e) => {
    console.log("Hello, " + name, e.targetname);
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
