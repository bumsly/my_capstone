function Login() {
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
            <input placeholder="ID"></input>
          </li>
          <li>
            <input placeholder="PW"></input>
          </li>
          <li>
            <button>확인</button>
          </li>
          <li>
            <span>아이디 찾기</span>
            <span>비밀번호 찾기</span>
          </li>
        </ul>
        <div>KLIP으로 로그인</div>
      </div>
    </div>
  );
}

export default Login;
