import { useState } from "react";

const Home = () => {
  /*Triggers  Rerendering of state of button so it is reactive.*/
  //   const [name, setName] = useState("mario");
  //   const [age, setAge] = useState(25);

  //   const handleClick = () => {
  //     setName("luigi");
  //     setAge(30);
  //   };

  const [blogs, setBlogs] = useState([
    {
      title: "My First Website",
      body: "I love my website made with React!",
      author: "Batman",
      id: 1,
    },
    {
      title: "Web Dev Tips",
      body: "Different tools to use in Web-App Development",
      author: "Kangaroo",
      id: 2,
    },
    {
      title: "Porsche v. Ferrari",
      body: "Which car has better performance?",
      author: "Anurag",
      id: 3,
    },
  ]);
  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>
        {name} is {age} years old
      </p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default Home;
