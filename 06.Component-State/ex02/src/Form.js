import React, { useState } from "react";
import "./assets/Form.css";

export default function Form() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [validEmail, setValidEmail] = useState(false);
    const [agreeProvChecked, setAgreeProvChecked] = useState(false); // Default false

    return (
        <form
            id="joinForm"
            name="joinForm"
            method="post"
            action="/do/not/post"
            onSubmit={(event) => {
                event.preventDefault();

                console.log({
                    name,
                    email,
                    birthYear: event.target.birthYear.value,
                });
            }}
        >
            <label htmlFor="name">이름</label>
            <input
                id="name"
                name="name"
                type="text"
                value={name}
                /*
                - onChange : 사용자가 값을 입력할 때마다 실행
                - event.target : 이벤트가 발생한 주체 (<input>)
                - event.target.value : 현재 입력된 문자열 값
                */
                onChange={(event) => {
                    // 10자 제한
                    setName(event.target.value.substring(0, 10));
                }}
            />

            <label htmlFor="email">이메일</label>
            <input
                id="email"
                name="email"
                type="text"
                value={email}
                onChange={(event) => {
                    setEmail(event.target.value);
                    // 이메일 형식
                    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                    const valid = reg.test(event.target.value);

                    setValidEmail(valid);
                }}
            />

            <span>
                {email === "" ? null : validEmail ? <b>{"O"}</b> : <b>{"X"}</b>}
            </span>

            <label htmlFor="password">패스워드</label>
            <input id="password" name="password" type="password" value={""} />

            <fieldset>
                <legend>성별</legend>
                <label>여</label>{" "}
                <input
                    type="radio"
                    name="gender"
                    value={"female"}
                    defaultChecked={true}
                />
                <label>남</label>{" "}
                <input
                    type="radio"
                    name="gender"
                    value={"male"}
                    defaultChecked={false}
                />
            </fieldset>

            <label htmlFor="birthYear">생년</label>
            <select id="birthYear" name="birthYear">
                <option value="1984">1984년</option>
                <option value="1985">1985년</option>
                <option value="1986">1986년</option>
                <option value="1987">1987년</option>
                <option value="1988">1988년</option>
                <option value="1989">1989년</option>
                <option value="1990">1990년</option>
            </select>

            <label htmlFor="birthYear">자기소개</label>
            <textarea value={""} />

            <fieldset>
                <legend>약관동의</legend>
                <input
                    id="agree-prov"
                    type="checkbox"
                    name="agreeProv"
                    value={"yes"}
                    checked={agreeProvChecked}
                    onChange={(event) => {
                        setAgreeProvChecked(!agreeProvChecked);
                    }}
                />
                <label>서비스 약관에 동의합니다.</label>
            </fieldset>

            <input type="submit" value="가입" />
        </form>
    );
}
