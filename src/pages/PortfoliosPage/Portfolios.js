import React, { useState } from "react";
import "./Portfolios.scss";

import portfolios from "./PortfoliosData";
import Title from "../../components/PageTitle/Title";
import Categories from "../../components/Portfolios/Categories";
import MenuItems from "../../components/Portfolios/MenuItems";

const allCategories = [
  "All",
  ...new Set(portfolios.map((item) => item.category)),
];
// console.log(allCategories);

const Portfolios = () => {
  const [categories, setCategories] = useState(allCategories);
  const [menuItems, setMenuItems] = useState(portfolios);

  const filter = (category) => {
    if (category === "All") {
      setMenuItems(portfolios);
      return;
    }

    const filteredData = portfolios.filter((item) => {
      return item.category === category;
    });
    setMenuItems(filteredData);
  };
  return (
    <section className='PortfolioPage'>
      <Title pageTitle='Portfolios' />
      <div className='portfolios_content'>
        <Categories filter={filter} categories={categories} />
        <MenuItems menuItems={menuItems} />
      </div>
    </section>
  );
};

export default Portfolios;
