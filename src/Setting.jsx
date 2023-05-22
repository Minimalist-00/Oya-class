import React from "react";
import { Container } from "react-bootstrap";

function Setting() {
  return (
    <div>
      <h2 className="title border-bottom mx-2 mb-3">設定</h2>
      <Container className="info">
        <h4>お知らせをメールで受け取る</h4>
        <label className="radio-block">
          <input type="radio" name="notice" checked />
          <span className="radio-mark" />
          受け取る
        </label>
        <label className="radio-block">
          <input type="radio" name="notice" />
          <span className="radio-mark" />
          受け取らない
        </label>
        <div className="pb-3" />
        <h4>テーマカラー</h4>
        <label className="radio-block">
          <input type="radio" name="theme" checked />
          <span className="radio-mark" />
          ライト
        </label>
        <label className="radio-block">
          <input type="radio" name="theme" />
          <span className="radio-mark" />
          ダーク
        </label>
        <div className="pb-3" />
        <h4>文字の大きさ</h4>
        <label className="radio-block">
          <input type="radio" name="font" checked />
          <span className="radio-mark" />
          普通
        </label>
        <label className="radio-block">
          <input type="radio" name="font" />
          <span className="radio-mark" />
          大きい
        </label>
      </Container>
    </div>
  );
}

export default Setting;
