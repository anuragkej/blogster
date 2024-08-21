const Home = () => {
  const handleClick = () => {
    console.log("hello, ninjas");
  };
  const handleClickAgain = (name) => {
    console.log("Hello, " + name);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => handleClickAgain("Anurag")}>Click me Again</button>
    </div>
  );
};

export default Home;
