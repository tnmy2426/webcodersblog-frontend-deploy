import React from "react";
import { IconContext } from "react-icons/lib";

const ContactItem = (props) => {
  return (
    <div className='contact_item'>
      <div className='contact_info'>
        <div className='icon'>
          <IconContext.Provider value={{ className: "react_icons" }}>
            {props.icon}
          </IconContext.Provider>
        </div>
        <div className='right_items'>
          <h6>{props.title}</h6>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactItem;
