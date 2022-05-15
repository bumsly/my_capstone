// import React from "react";
import "../css/Main.css";

function Main() {
  return (
    <div>
      <div className="beginning main_frame">
        <div className="main_frame2">
          <div className="space"></div>
          <div className="title">
            <p style={{ fontSize: "36px" }}>게임 소개란</p>
            <span>환영합니다!</span>
            <span>게임 제목</span>
          </div>
          <ul>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>

      <div className="overview main_frame">
        <div className="main_frame2">
          <div className="space"></div>
          <p style={{ fontSize: "36px" }}>게임 Overview</p>
        </div>
      </div>
      <div className="concept_view main_frame">
        <div className="main_frame2">
          <div className="space"></div>
          <p style={{ fontSize: "36px" }}>게임 컨셉 설명</p>
        </div>
      </div>
      <div className="coin_view main_frame">
        <div className="main_frame2">
          <div className="space"></div>
          <p style={{ fontSize: "36px" }}>게임과 코인, 투자 설명</p>
        </div>
      </div>
      <div className="roadmap main_frame">
        <div className="main_frame2">
          <div className="space"></div>
          <p style={{ fontSize: "36px" }}>로드맵</p>
        </div>
      </div>
      <div className="play_view main_frame">
        <div className="main_frame2">
          <div className="space"></div>
          <p style={{ fontSize: "36px" }}>실제 플레이 영상</p>
        </div>
      </div>
      <div className="footer">
        <div className="main_frame2">
          <p style={{ fontSize: "36px" }}>개발자 정보, 연락처</p>
        </div>
      </div>
    </div>
  );
}

export default Main;
