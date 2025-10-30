import React, { useState } from "react";
import RegisterForm from "./RegisterForm";
import SearchBar from "./SearchBar";
import Emaillist from "./Emaillist";
import "./assets/scss/App.scss";

import data from "./assets/json/data.js";

/* SearchBar에서 입력한 키워드로 필터링 -> Emaillist(필터링된 데이터) 렌더링 */
function App() {
    const [emails, setEmails] = useState(data);
    const searchEmail = (keyword) => {
        setEmails(
            data.filter((email) => {
                return email.firstName.indexOf(keyword) !== -1;
            })
        );
    };

    return (
        <div id={"App"}>
            <RegisterForm />
            <SearchBar searchEmail={searchEmail} />
            <Emaillist emails={emails} />
        </div>
    );
}

export default App;
