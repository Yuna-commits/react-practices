import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import ReactModal from "react-modal";
import styled from "styled-components";

import noImage from "./assets/images/no-image.png";
import "./assets/scss/App.scss";
import * as styles from "./assets/scss/Modal.scss";

const ItemList = styled.ul``;
const Item = styled.li``;

ReactModal.setAppElement("body");

export default function App() {
    const [items, setItems] = useState(null);

    const fetchItems = async () => {
        try {
            // fetch(url, options) : API(/item) 호출
            const response = await fetch("/item", {
                method: "get",
                headers: {
                    Accept: "application/json",
                },
                body: null,
            });

            if (!response.ok) {
                throw new Error(response.status);
            }
            // 응답을 JSON 객체로 변환
            const jsonResult = await response.json();

            if (jsonResult.result === "fail") {
                throw new Error(jsonResult.message);
            }
            // 서버에서 받은 데이터 저장
            setItems(jsonResult.data);
        } catch (err) {
            console.error(err);
        }
    };

    // 처음 마운트 될 때 한 번만 fetchItems() 호출
    useEffect(() => {
        fetchItems();
    }, []);

    return (
        <div id={"App"}>
            <h1>AJAX: Restful API</h1>

            <h2 onClick={() => fetchItems()}>Items</h2>
            <ItemList>
                {/* items가 존재할 때만 렌더링 */}
                {items?.map((item, index) => (
                    <Item key={item.id}>
                        <h4>
                            <b>{item.name}</b>
                            <button>[Delete] (delete)</button>
                        </h4>
                        <div>
                            <span>{index + 1}</span>
                            <i>{item.type}</i>
                            <ins
                                style={{
                                    backgroundImage: `url(${
                                        item.image || noImage
                                    })`,
                                }}
                            />
                        </div>
                    </Item>
                ))}
            </ItemList>
        </div>
    );
}
