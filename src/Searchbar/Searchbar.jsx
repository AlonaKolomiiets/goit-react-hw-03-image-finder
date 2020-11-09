import styles from "./Searchbar.module.css";
import React, { useState } from "react";

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");
  const handleOnChange = ({ target: { value } }) => {
    setQuery(value);
  };
  return (
    <header className={styles.searchbar}>
      <form
        className={styles.searchForm}
        onSubmit={(event) => {
          event.preventDefault();
          onSubmit(query);
        }}
      >
        <button type="submit" className={styles.searchFormButton}>
          <span className={styles.searchFormButtonLabel}>Search</span>
        </button>

        <input
          onChange={handleOnChange}
          className={styles.searchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="query"
        />
      </form>
    </header>
  );
};

export default Searchbar;
