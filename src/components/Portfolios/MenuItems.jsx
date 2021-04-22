import React from "react";

const MenuItems = (props) => {
  return (
    <div className='portfolios'>
      {props.menuItems.map((item) => {
        return (
          <div className='portfolio' key={item.id}>
            <div className='image_data'>
              <img src={item.image} alt='Portfolios' />
              <ul className='hover_items'>
                <li>
                  <a href={item.link1}>{item.icon1}</a>
                  <a href={item.link2}>{item.icon2}</a>
                </li>
              </ul>
            </div>
            <h2>
              <a href={item.link1}>{item.title}</a>
            </h2>
          </div>
        );
      })}
    </div>
  );
};

export default MenuItems;
