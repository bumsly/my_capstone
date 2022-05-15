import axios from "axios";
import React, { useState, useEffect } from "react";
import FacebookLoginButton from "../component/FacebookLoginButton";

function Login() {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  const onClickLogin = () => {
    console.log("click login");
  };

  useEffect(() => {
    axios
      .get("/user_inofrm/login")
      .then((res) => console.log(res))
      .catch();
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "400px",
          height: "600px",
          border: "2px solid #333",
          borderRadius: "1rem",
        }}
      >
        <span>Login</span>
        <ul>
          <li>
            <label htmlFor="input_id">ID : </label>
            <input
              type="text"
              name="input_id"
              value={inputId}
              onChange={handleInputId}
              placeholder="ID"
            ></input>
          </li>
          <li>
            <label htmlFor="input_pw">PW : </label>
            <input
              type="text"
              name="input_pw"
              value={inputPw}
              onChange={handleInputPw}
              placeholder="PW"
            ></input>
          </li>
          <li>
            <button type="button" onClick={onClickLogin}>
              확인
            </button>
          </li>
          <li>
            <button>아이디 찾기</button>
            <button>비밀번호 찾기</button>
          </li>
        </ul>
        <p>KLIP으로 로그인</p>
        <FacebookLoginButton />
      </div>
    </div>
  );
}

export default Login;
