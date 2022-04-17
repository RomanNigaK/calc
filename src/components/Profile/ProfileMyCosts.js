import React, { useState } from "react";
import { useSelector } from "react-redux";
import Costs from "../Costs/Costs";
import CostsForm from "./CostsForm";
// import { uuid } from "uuidv4";
import styles from "./Profile.module.css";

/* ---------------------------------------- */
const filters = {
  all: (items) => items,
  general: (items) => {
    return items.filter((item) => item.general === 1);
  },
  other: (items) => {
    return items.filter((item) => item.general === 0)
  },
};

/* ---------------------------------------- */
const switcher = (currFilter, ownFilter) => {
  return currFilter === ownFilter ? styles.filter_active : styles.filter;
};

/* ---------------------------------------- */
function CostItem({ item }) {
  // const uid = uuid();
  return(
    <li key={ item.index } className={styles.item}>
      <span className={styles.item__name}>{item.name}</span>
      <input className={styles.item__input} type="text" defaultValue={item.colt} />
    </li>
  )
}

/* ---------------------------------------- */
export default function ProfileMyCosts() {
  const products = useSelector((state) => state.productsreduce.products);
  const [ currFilter, setFilter ] = useState("all");
  const filtered = filters[currFilter](products);
  console.log(products);

  const choiceFilter = (e) => {
    setFilter(
      e.target.dataset.filterType
    );
  }

  return (
    <>
      <div className={styles.dashboard}>
        <button onClick={choiceFilter} className={switcher(currFilter, "all")} data-filter-type="all">Все</button>
        <button onClick={choiceFilter} className={switcher(currFilter, "general")}  data-filter-type="general">Только основные</button>
        <button onClick={choiceFilter} className={switcher(currFilter, "other")}  data-filter-type="other">Другое</button>
      </div>
      <CostsForm products={filtered} />
    </>
  );
}
