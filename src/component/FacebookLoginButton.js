import React from "react";
import FacebookLogin from "react-facebook-login";

const handleFacebookLogin = (response) => {
  // presenter에 props로 전달
  console.log(response);
};

function FacebookLoginButton({ requestLogin }) {
  return (
    <FacebookLogin
      appId="394926115965394" // facebook developer 페이지에 생성한 앱의 아이디
      autoLoad={false}
      fields="name,email,picture" // 페이스북에서 가져올 필드
      callback={handleFacebookLogin} // 콜백함수 지정( container에 생성 )
      icon="fa-facebook-square" // 아이콘 지정
      disableMobileRedirect={true}
      render={(renderProps) => (
        <button onClick={renderProps.onClick}>페이스북 로그인</button>
      )}
      onFail={() => {
        alert("비정상적인 결과입니다. 다시 시도해주세요!");
      }}
    />
  );
}

export default FacebookLoginButton;
