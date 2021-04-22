import React from "react";

const Categories = ({ filter, categories }) => {
  return (
    <div className='category_buttons'>
      {categories.map((category, id) => {
        return (
          <button
            type='button'
            key={id}
            onClick={() => filter(category)}
            className='portfolio_btn'
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
