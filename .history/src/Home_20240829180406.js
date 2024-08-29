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

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log("use effect ran");
  });

  return (
    <div className="home">
      {/* blos={blogs} is a prop */}
      <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "Darth Vader")}
        title="Darth Vader's Blogs"
      />
    </div>
  );
};

export default Home;
