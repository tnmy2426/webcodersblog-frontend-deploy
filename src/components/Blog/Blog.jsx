import React from "react";
import { Link } from "react-router-dom";
import DemoImg from "../../img/portfoliosPic/port1.PNG";

const Blog = ({ blogs }) => {
  const capitalizeFirstLetter = (word) => {
    if (word) return word.charAt(0).toUpperCase() + word.slice(1);
    return "";
  };

  return (
    <div className='blogs'>
      {blogs.map((blog, id) => {
        return (
          <div className='blog' key={id}>
            <div className='blog_image'>
              <img src={blog.image} alt='Portfolios' />
              {/* <img src={DemoImg} alt='demo' /> */}
              <div className='hover_details'>
                <Link to={`/blogs/${blog.slug}`}>Read More</Link>
              </div>
            </div>
            <h2>
              <Link to={`/blogs/${blog.slug}`}>
                {capitalizeFirstLetter(blog.title)}
              </Link>
            </h2>
          </div>
        );
      })}
    </div>
  );
};

export default Blog;
