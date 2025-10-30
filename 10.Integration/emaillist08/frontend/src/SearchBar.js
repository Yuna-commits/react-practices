import React from "react";
import { Search_Bar } from "./assets/scss/SearchBar.scss";

function SearchBar({ searchEmail }) {
    return (
        <div className={Search_Bar}>
            <input
                type="text"
                placeholder="찾기"
                onChange={(event) => {
                    searchEmail(event.target.value);
                }}
            />
        </div>
    );
}

export default SearchBar;
