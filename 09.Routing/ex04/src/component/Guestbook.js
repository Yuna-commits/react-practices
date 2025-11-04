import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router";

export default function Guestbook() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            /* Access Denied 응답을 받은 경우 */

            // 화면을 error/401 페이지로 새롭게 로드, 상태유지 x (사용 x)
            // window.location.href = "/error/401";

            // 렌더링 컴포넌트 전환, 상태유지 o (사용 o)
            navigate("/error/401");
        }, 3000);
    }, []);

    return (
        <div>
            <h1>Guestbook</h1>
            <ul>
                <li>
                    <Link to={"/"}>[Main]</Link>
                </li>
                <li>
                    <NavLink className="menu" to={"/guestbook"}>
                        [Guestbook]
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/gallery"}>[Gallery]</NavLink>
                </li>
            </ul>
        </div>
    );
}
