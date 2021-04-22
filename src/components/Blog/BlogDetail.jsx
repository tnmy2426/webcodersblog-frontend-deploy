import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./_blogDetails.scss";

const BlogDetail = (props) => {
  const [blog, setBlog] = useState({});

  //time date formatting
  const dateFromData = blog.date_created;
  const DATE_OPTIONS = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  // console.log(dateFromData);
  const dateFormat = new Date(dateFromData).toLocaleDateString(
    "en-US",
    DATE_OPTIONS
  );
  console.log(dateFormat);

  useEffect(() => {
    const slug = props.match.params.id;

    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/blog/${slug}`
        );
        setBlog(res.data);
      } catch (err) {}
    };

    fetchData();
  }, [props.match.params.id]);

  const capitalizeFirstLetter = (word) => {
    if (word) return word.charAt(0).toUpperCase() + word.slice(1);
    return "";
  };

  const createBlog = () => {
    return { __html: blog.description };
  };
  console.log(createBlog());

  return (
    <section className='BlogDetail'>
      <h1 className='blog_title'>{capitalizeFirstLetter(blog.title)}</h1>
      <div className='blog_summary'>{blog.summury}</div>
      <div className='blog_image'>
        <img src={blog.blog_picture} alt={blog.title} />
        <div className='date_publishd'>
          Publish Date: <span>{dateFormat}</span>
        </div>
      </div>

      <div
        className='blog_description'
        dangerouslySetInnerHTML={createBlog()}
      />
      <div className='back_btn'>
        <Link to='/blogs'> Back To Blogs</Link>
      </div>
    </section>
  );
};

export default BlogDetail;
