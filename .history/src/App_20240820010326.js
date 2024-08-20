import "./App.css";

function App() {
  const title = "Welcome to Blogster";
  const likes = 50;
  const link = "http://www.google.com";

  // react converts everything to string before outputting to browser, so don't need to worry about typecasting

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
        <p>{10}</p>
        <p>{"hello everyone!"}</p>
        <p>{Math.random() * 100}</p>

        <a href={link}></a>
      </div>
    </div>
  );
}

export default App;
