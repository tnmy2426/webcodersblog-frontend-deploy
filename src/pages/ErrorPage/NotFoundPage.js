import React from "react";
import { Link } from "react-router-dom";
import "./NotFoundPage.scss";

const NotFoundPage = () => {
  return (
    <div className='NotFoundPage'>
      <span>404</span>
      <p>Page Not Found</p>
      <Link to='/'>Home Page</Link>
    </div>
  );
};

export default NotFoundPage;
