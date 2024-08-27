import { useState } from "react";

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

  return (
    <div className="home">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
