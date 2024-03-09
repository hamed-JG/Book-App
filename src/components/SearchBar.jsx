import React from "react";

import { IoSearchOutline } from "react-icons/io5";

import styles from "./Search.module.css";

function SearchBar({ search, setSearch, searchHandler }) {
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search Title"
        value={search}
        onChange={(e) => setSearch(e.target.value.toLocaleLowerCase().trim())}
      />
      <button onClick={searchHandler}>
        <IoSearchOutline />
      </button>
    </div>
  );
}

export default SearchBar;
