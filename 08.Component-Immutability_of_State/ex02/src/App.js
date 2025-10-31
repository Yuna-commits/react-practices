import React, { useState, useEffect } from "react";
import data from "./assets/json/data.js";
import update from "react-addons-update";

export default function App() {
    const [order, setOrder] = useState(data);
    const [payment, setPayment] = useState(data.payment);
    const [goods, setGoods] = useState(data.goods);

    useEffect(() => {
        console.log("Order Updated", order);
    }, [order]);

    useEffect(() => {
        console.log("Payment Updated", payment);
    }, [payment]);

    useEffect(() => {
        console.log("Goods Updated", goods);
    }, [goods]);

    return (
        <div id="App">
            <button
                onClick={() => {
                    /*
                     violation!!! : 불변성(Immutability) 위반
                     - 객체의 내용만 바뀌고 참조는 그대로!
                     -> 참조가 바뀌지 않으면 상태가 바뀌지 않았다고 판단, 렌더링 x
                     -> 새로운 객체를 만들어야 상태 변화가 일어났다고 인식
                     */
                    // order.receive = "서울시 서초구 논현동...";
                    // setOrder(order);

                    /*
                    solution 1
                    -> order를 복사한 새로운 객체 orderUpdated에 변경된 값 덮어씌우기
                    -> orderUpdated는 새로운 참조 주소를 가짐
                    */
                    // const orderUpdated = Object.assign({}, order, {
                    //     receive: "서울시 서초구 논현동...",
                    // });
                    // setOrder(orderUpdated);

                    // solution 2 (recommended)
                    const orderUpdated = update(order, {
                        receive: {
                            $set: "서울시 서초구 논현동...",
                        },
                    });
                    setOrder(orderUpdated);
                }}
            >
                {"배송지 수정"}
            </button>
            <br />
            <br />
            <button
                /*
                violation!!! - 중첩 객체
                Object.assign({}, order)은 얕은 복사만 수행
                -> 원래의 참조를 공유하기 때문에 payment.method를 바꾸면 원래의 order.payment도 함께 변경
                -> 참조가 같다고 인식하여 렌더링 x
                */
                onClick={() => {
                    // const orderUpdated = Object.assign({}, order);
                    // orderUpdated.payment.method = "Mobile";
                    // setPayment(orderUpdated.payment);

                    /*
                    solution 1
                    -> 새로운 orderUpdated 객체 생성
                    -> 하지만 내부 필드 payment는 order.payment와 참조 공유 중!
                    -> order.payment를 복사한 새로운 객체 orderUpdated.payment 생성
                    -> 참조가 달라졌음을 인식 가능
                    */
                    // const orderUpdated = Object.assign({}, order);
                    // orderUpdated.payment = Object.assign({}, order.payment, {
                    //     method: "Mobile",
                    // });
                    // setPayment(orderUpdated.payment);

                    // solution 2
                    const orderUpdated = update(order, {
                        payment: {
                            // where
                            method: {
                                // where
                                $set: "Mobile",
                            },
                        },
                    });
                    setPayment(orderUpdated.payment);
                }}
            >
                {"결제수단 변경"}
            </button>
            <br />
            <br />
            <button
                /*
                violation!!!
                */
                onClick={() => {
                    /*
                    상태 불변성 위반
                    -> .push()는 기존 배열을 직접 수정
                    */
                    // goods.push({
                    //     no: "p002-002",
                    //     name: "블루양말",
                    //     price: 1000,
                    //     amount: 10,
                    // });
                    // setGoods(goods);

                    /*
                    solution 1
                    -> concat() : 기존 배열을 건드리지 않고 새 배열 반환
                    */
                    // const goodsUpdated = goods.concat([
                    //     {
                    //         no: "p002-002",
                    //         name: "블루양말",
                    //         price: 1000,
                    //         amount: 10,
                    //     },
                    // ]);
                    // setGoods(goodsUpdated);

                    /*
                    solution 2
                    -> 전개 연산자(...)
                    */
                    // const goodsUpdated2 = [
                    //     ...goods,
                    //     {
                    //         no: "p002-003",
                    //         name: "핑크양말",
                    //         price: 1000,
                    //         amount: 10,
                    //     },
                    // ];
                    // setGoods(goodsUpdated2);

                    // solution 3
                    const orderUpdated3 = update(goods, {
                        $unshift: [
                            {
                                no: "p002-002",
                                name: "블루양말",
                                price: 1000,
                                amount: 10,
                            },
                            {
                                no: "p002-003",
                                name: "핑크양말",
                                price: 1000,
                                amount: 10,
                            },
                        ],
                    });
                    setGoods(orderUpdated3);
                }}
            >
                {"상품추가"}
            </button>
        </div>
    );
}
