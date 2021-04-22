import React from "react";
import "./_skill.scss";

const Skill = (props) => {
  return (
    <div className='skill_content'>
      <h5>{props.skillTitle}</h5>
      <div className='skill_bar'>
        <p>{props.skillProgress}</p>
        <div className='skill_progress_bar'>
          <div className='outer_progress'>
            <div
              className='inner_progress'
              style={{ width: props.width }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
