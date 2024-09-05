import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My First Website",
      body: "Developing website with react.",
      author: "Darth Vader",
      id: 1,
    },
    {
      title: "Experimenting with web hooks",
      body: "sample text",
      author: "mario",
      id: 2,
    },
    {
      title: "Web development tips",
      body: "Porsche 911 v. Lamborghini Huracan",
      author: "Ford",
      id: 3,
    },
  ]);

  const [name, setName] = useState("mario");

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  /* fires on every render, so any change of code */
  useEffect(() => {
    console.log("use effect ran");
    console.log(name);
  }, [name]);

  return (
    <div className="home">
      {/* blos={blogs} is a prop */}
      <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
      <button onClick={() => setName("luigi")}>change name</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
