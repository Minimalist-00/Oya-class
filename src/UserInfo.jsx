import React from "react";
import { Container } from "react-bootstrap";

function UserInfo() {
  return (
    <div>
      <h2 className="title border-bottom mx-2 mb-3">ユーザー情報</h2>
      <Container className="info">
        <h4>住所</h4>
        <p>933-XXXX | 富山県 XX市 XXX XX-XX</p>
        <h4>電話番号</h4>
        <p>0766-XX-XXXX</p>
        <h4>メール</h4>
        <p>023-XXX@par.oyaclass.ac.jp</p>
        <h4>パスワード</h4>
        <p>※セキュリティのためパスワードは非表示となっています。</p>
      </Container>
    </div>
  );
}

export default UserInfo;
