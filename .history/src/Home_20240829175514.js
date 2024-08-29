import { useState } from "react";
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

  return (
    <div className="home">
      {/* blos={blogs} is a prop */}
      <BlogList blogs={blogs} title="All Blogs!" />
      <BlogList
        blogs={blogs.filter((blogs) => blogs.author === "Darth Vader")}
        title="Darth Vader's Blogs"
      />
    </div>
  );
};

export default Home;
