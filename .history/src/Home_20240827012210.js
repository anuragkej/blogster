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
      {blogs.map((blog) => (
        <div classname="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
