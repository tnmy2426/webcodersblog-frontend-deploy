import React from "react";
import "./_personalBio.scss";
import personalPic from "../../img/personalphoto.jpg";

const PersonalBio = () => {
  return (
    <div className='personalBio'>
      <div className='personal_pic'>
        <img src={personalPic} alt='Profile Pic' />
      </div>
      <div className='personal_details'>
        <div className='left_section'>
          <p>Name</p>
          <p>Age</p>
          <p>Occupation</p>
          <p>Nationality</p>
          <p>Languages</p>
          <p>Address</p>
          <p>Mobile No</p>
          <p>Email</p>
          <p>Education</p>
        </div>
        <div className='right_section'>
          <p>: Abdullah Al Nahdi</p>
          <p>: 25</p>
          <p>: Freelancer</p>
          <p>: Bangladeshi</p>
          <p>: Bangla, English, Hindi</p>
          <p>: Dhaka, Bangladesh</p>
          <p>: +880 1312898200</p>
          <p>: al.nahdi.tnmy@gmail.com</p>
          <p>: B.Sc in CSE</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalBio;
