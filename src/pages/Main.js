// import React from "react";
import "../css/Main.css";

function Main() {
  return (
    <div>
      <div class="beginning main_frame">
        <div class="main_frame2">
          <div class="space"></div>
          <div class="title">
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

      <div class="overview main_frame">
        <div class="main_frame2">
          <div class="space"></div>
          <p style={{ fontSize: "36px" }}>게임 Overview</p>
        </div>
      </div>
      <div class="concept_view main_frame">
        <div class="main_frame2">
          <div class="space"></div>
          <p style={{ fontSize: "36px" }}>게임 컨셉 설명</p>
        </div>
      </div>
      <div class="coin_view main_frame">
        <div class="main_frame2">
          <div class="space"></div>
          <p style={{ fontSize: "36px" }}>게임과 코인, 투자 설명</p>
        </div>
      </div>
      <div class="roadmap main_frame">
        <div class="main_frame2">
          <div class="space"></div>
          <p style={{ fontSize: "36px" }}>로드맵</p>
        </div>
      </div>
      <div class="play_view main_frame">
        <div class="main_frame2">
          <div class="space"></div>
          <p style={{ fontSize: "36px" }}>실제 플레이 영상</p>
        </div>
      </div>
      <div class="footer">
        <div class="main_frame2">
          <p style={{ fontSize: "36px" }}>개발자 정보, 연락처</p>
        </div>
      </div>
    </div>
  );
}

export default Main;
