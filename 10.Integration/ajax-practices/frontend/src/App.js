import React, { useEffect, useState } from "react";

// style
import Modal from "react-modal";
import ReactModal from "react-modal";
import styled from "styled-components";

// API
import axios from "axios";
import serialize from "form-serialize";
import update from "react-addons-update";

// static resource
import noImage from "./assets/images/no-image.png";
import "./assets/scss/App.scss";
import * as styles from "./assets/scss/Modal.scss";

const ItemList = styled.ul``;
const Item = styled.li``;

ReactModal.setAppElement("#root");

function App(props) {
    // -----------------------------
    // 상태 정의
    // -----------------------------
    const [items, setItems] = useState(null);
    const [modalData, setModalData] = useState({
        itemType: "",
        itemName: "",
        open: false,
    });

    // -----------------------------
    // 서버에서 전체 아이템 목록 가져오기 (GET /item)
    // -----------------------------
    const fetchItems = async () => {
        try {
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

            // json 응답 받기
            const jsonResult = await response.json();

            // 실패
            if (jsonResult.result === "fail") {
                throw new Error(jsonResult.message);
            }

            // 성공 - 아이템 목록을 상태에 저장
            setItems(jsonResult.data);
        } catch (err) {
            console.error(err);
        }
    };

    // -----------------------------
    // 아이템 등록 (POST /item, JSON)
    // -----------------------------
    const addItem = async (item) => {
        try {
            const response = await fetch("/item", {
                method: "post",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(item), // 객체 -> JSON 문자열 변환
            });

            if (!response.ok) {
                throw new Error(response.status);
            }

            // json 응답 받기
            const jsonResult = await response.json();

            // 실패
            if (jsonResult.result === "fail") {
                throw new Error(jsonResult.message);
            }

            // 성공 - 새로운 아이템을 기존 리스트 맨 앞에 추가
            setItems([jsonResult.data, ...items]);
        } catch (err) {
            console.error(err);
        }
    };

    // -----------------------------
    // 이미지 업로드 포함 등록 (POST /item, multipart/form-data)
    // -----------------------------
    const addItemWithImage = async (item) => {
        try {
            const formData = new FormData();
            formData.append("name", item.name);
            formData.append("type", item.type);
            formData.append("file", item.file);

            const response = await axios.post("/item", formData, {
                Accept: "application/json",
                "Content-Type": "multipart/form-data",
            });

            const jsonResult = response.data;

            // 실패
            if (jsonResult.result === "fail") {
                throw new Error(jsonResult.message);
            }

            // 성공 - 새로운 아이템을 기존 리스트 맨 앞에 추가
            setItems([jsonResult.data, ...items]);
        } catch (err) {
            console.error(err);
        }
    };

    // -----------------------------
    // 아이템 삭제 (DELETE /item/{id})
    // -----------------------------
    const deleteItem = async (id) => {
        try {
            const response = await axios.delete(`/item/${id}`);
            const jsonResult = response.data;

            if (jsonResult.result === "fail") {
                throw new Error(jsonResult.message);
            }

            // 성공 - 해당 id를 제외한 나머지 아이템을 다시 상태에 저장
            jsonResult.data && setItems(items.filter((item) => item.id !== id));
        } catch (err) {
            console.error(err);
        }
    };

    // -----------------------------
    // 컴포넌트 마운트 시 1회만 fetchItems() 실행
    // -----------------------------
    useEffect(() => {
        fetchItems();
    }, []);

    // -----------------------------
    // 렌더링
    // -----------------------------
    return (
        <div id={"App"}>
            <h1>AJAX: Restful API</h1>
            <div>
                {/* -------------------------
                    일반 아이템 등록 폼
                -------------------------- */}
                <form
                    onSubmit={(event) => {
                        event.preventDefault();

                        // 예외처리
                        Array.from(event.target, (el) => {
                            if (el.name !== "" && el.value === "") {
                                throw new Error(
                                    `validation ${el.name} is empty`
                                );
                            }
                            return null;
                        });

                        // form 데이터를 {name: value} 형태로 객체화(직렬화)
                        const item = serialize(event.target, { hash: true });

                        addItem(item);
                    }}
                >
                    <select name={"type"}>
                        <option>CLOTHE</option>
                        <option>MUSIC</option>
                        <option>CAR</option>
                        <option>BEAUTY</option>
                        <option>MOVIE</option>
                        <option>BOOK</option>
                        <option>FOOD</option>
                    </select>
                    &nbsp;
                    <input type={"text"} name={"name"} placeholder={"name"} />
                    <input type={"submit"} value={"[Create] (post)"} />
                </form>

                {/* -------------------------
                    이미지 포함 등록 폼
                -------------------------- */}
                <form
                    onSubmit={(event) => {
                        event.preventDefault();

                        // 예외처리
                        Array.from(event.target, (el) => {
                            if (el.name !== "" && el.value === "") {
                                throw new Error(
                                    `validation ${el.name} is empty`
                                );
                            }
                            return null;
                        });

                        // form 데이터를 {name: value} 형태로 객체화(직렬화)
                        const item = serialize(event.target, { hash: true });
                        item.file = event.target.file.files[0];

                        addItemWithImage(item);
                    }}
                >
                    <select name={"type"}>
                        <option>CLOTHE</option>
                        <option>MUSIC</option>
                        <option>CAR</option>
                        <option>BEAUTY</option>
                        <option>MOVIE</option>
                        <option>BOOK</option>
                        <option>FOOD</option>
                    </select>
                    &nbsp;
                    <input type={"text"} name={"name"} placeholder={"name"} />
                    <input type={"file"} name={"file"} />
                    <input type={"submit"} value={"[Create] (post)"} />
                </form>
            </div>

            {/* -------------------------
                아이템 목록 렌더링
            -------------------------- */}
            <h2 onClick={() => fetchItems()}>Items</h2>
            <ItemList>
                {items?.map((item, index) => (
                    <Item key={item.id}>
                        <h4>
                            {/* 수정 내용 표시, 클릭하면 모달창 열림 */}
                            <b
                                onClick={async () => {
                                    const response = await axios.get(
                                        `/item/${item.id}`
                                    );
                                    const jsonResult = response.data;

                                    setModalData(
                                        update(modalData, {
                                            open: { $set: true },
                                            itemType: {
                                                $set: jsonResult.data.type,
                                            },
                                            itemName: {
                                                $set: jsonResult.data.name,
                                            },
                                        })
                                    );
                                }}
                            >
                                {item.name}
                            </b>
                            <button onClick={() => deleteItem(item.id)}>
                                [Delete] (delete)
                            </button>
                        </h4>
                        <div>
                            <span>{index + 1}</span>
                            <i>{item.type}</i>
                            <ins
                                style={{
                                    backgroundImage: `url(${
                                        // image가 없으면 noImage 사용
                                        item.image || noImage
                                    })`,
                                }}
                            />
                        </div>
                    </Item>
                ))}
            </ItemList>

            {/* -------------------------
                아이템 수정 모달창
            -------------------------- */}
            <Modal
                isOpen={modalData.open}
                onRequestClose={() => {
                    setModalData(
                        update(modalData, {
                            open: { $set: false },
                        })
                    );
                }}
                className={styles.Modal}
                overlayClassName={styles.Overlay}
                style={{ content: { width: 350 } }}
            >
                <h3>Update Item</h3>
                <form>
                    <label>Type</label>
                    &nbsp;
                    {/* 이전 입력값 표시, 수정 */}
                    <select
                        name={"type"}
                        value={modalData.itemType}
                        onChange={(event) => {
                            setModalData(
                                update(modalData, {
                                    itemType: { $set: event.target.value },
                                })
                            );
                        }}
                    >
                        <option>CLOTHE</option>
                        <option>MUSIC</option>
                        <option>CAR</option>
                        <option>BEAUTY</option>
                        <option>MOVIE</option>
                        <option>BOOK</option>
                        <option>FOOD</option>
                    </select>
                    <br />
                    <br />
                    <label>Name</label>
                    &nbsp;
                    {/* 이전 입력값 표시, 수정 */}
                    <input
                        type={"text"}
                        name={"name"}
                        placeholder={"name"}
                        value={modalData.itemName}
                        onChange={(event) => {
                            setModalData(
                                update(modalData, {
                                    itemName: { $set: event.target.value },
                                })
                            );
                        }}
                    />
                    <hr />
                    <input type={"submit"} value={"[Update] (put)"} />
                </form>
            </Modal>
        </div>
    );
}

export default App;
