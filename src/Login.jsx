import React from "react";
import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";

function Login(proops) {
  return (
    <div>
      <div className="frame-border">
        <h1 className="mt-4">こんにちは！</h1>
        <h2>Oya classにログイン</h2>
        <div className="button01 row pb-5">
          <Link to="loginParent">
            <p className="col-9 py-1">保護者の方はこちら</p>
            <div className="col-1" />
            <LoginIcon className="col-2" />
          </Link>
        </div>
        <div className="button01 row">
          <Link to="loginTeacher">
            <p className="col-9 py-1">教職員はこちら</p>
            <div className="col-1" />
            <LoginIcon className="col-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
