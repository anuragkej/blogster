const Home = (e) => {
  let name = "Mario";
  const handleClick = () => {
    console.log("hello, everyone", e);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{name}</p>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={(e) => handleClickAgain("Anurag", e)}>
        Click me Again
      </button>
    </div>
  );
};

export default Home;
