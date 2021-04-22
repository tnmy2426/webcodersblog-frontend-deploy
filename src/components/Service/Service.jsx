import React from "react";
import "./_service.scss";

const Service = (props) => {
  return (
    <div className='service_container hover_effect'>
      <div className='service_content'>
        <img src={props.serviceIcon} alt={props.serviceIconName} />
        <h5>{props.serviceTitle}</h5>
        <p>{props.serviceText}</p>
      </div>
    </div>
  );
};

export default Service;
