// CommonJs 사용
// 모듈 불러오기
const http = require("http");
const path = require("path");
const express = require("express");

// 서버 포트 설정
const port = 3000;

// Express 애플리케이션 생성
const application = express().use(
    // public 폴더를 정적 파일 디렉토리로 지정
    express.static(path.join(__dirname, "public"))
);

// 서버 생성
http.createServer(application)
    .on("listening", () => {
        console.log(`server starts...on ${port}`);
    })
    // 서버 실행(3000)
    .listen(port);
