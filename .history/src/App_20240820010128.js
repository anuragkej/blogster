import "./App.css";

function App() {
  const title = "Welcome to Blogster";
  const likes = 50;

  // react converts everything to string before outputting to browser, so don't need to worry about typecasting

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
        <p>{10}</p>
      </div>
    </div>
  );
}

export default App;
