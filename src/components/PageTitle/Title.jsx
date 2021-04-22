import React from "react";
import "./_title.scss";

const Title = (props) => {
  return (
    <div className='PageTitle'>
      <h2 className='title'>{props.pageTitle}</h2>
    </div>
  );
};

export default Title;
