import React, { useEffect, useState } from "react";
import "./Blogs.scss";
import Title from "../../components/PageTitle/Title";
import Blog from "../../components/Blog/Blog";
import axios from "axios";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/`);
      console.log(res.data);
      setBlogs(res.data);
    } catch (err) {}
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <section className='BlogsPage'>
      <Title pageTitle='Blogs' />
      <div className='blogs_content'>
        <Blog blogs={blogs} />
      </div>
    </section>
  );
};

export default Blogs;
