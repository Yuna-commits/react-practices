import React from "react";
import "./assets/Form.css";

export default function Form() {
    return (
        <form
            id="loginForm"
            name="loginForm"
            method="post"
            action="/do/not/post"
            onSubmit={(event) => {
                event.preventDefault();

                console.log(
                    event.target,
                    event.target.email.value,
                    event.target.password.value
                );
            }}
        >
            <label htmlFor="email">이메일</label>
            <input id="email" name="email" type="text" />

            <label htmlFor="password">패스워드</label>
            <input id="password" name="password" type="password" />

            <input type="submit" value="로그인" />
        </form>
    );
}
