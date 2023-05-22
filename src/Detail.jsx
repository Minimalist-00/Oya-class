import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

// 学校お知らせの詳細ページ
export function Detail0(props) {
  const params = useParams();
  const id = params.id;
  const school = props.school;

  const [item, setItem] = useState(school[school.length - 1 - id]);

  return (
    <div>
      <h2 className="title border-bottom mx-2">学校からのお知らせ</h2>
      <Container>
        <p>{item.date}</p>
        <h1 className="notice-title">{item.detail}</h1>
        <p className="notice-detail">{item.com}</p>
        <div className="border-top pb-1" />
        <a href={item.url} target="_blank" className="notice-url">
          {item.url}
        </a>
      </Container>
    </div>
  );
}

// クラス内お知らせの詳細ページ
export function Detail1(props) {
  const params = useParams();
  const id = params.id;
  const myclass = props.myclass;

  const [item, setItem] = useState(myclass[myclass.length - 1 - id]);

  return (
    <div>
      <h2 className="title border-bottom mx-2">クラス内でのお知らせ</h2>
      <Container>
        <p>{item.date}</p>
        <h1 className="notice-title">{item.detail}</h1>
        <p className="notice-detail">{item.com}</p>
        <a href={item.url} target="_blank" className="notice-url">
          {item.url}
        </a>
      </Container>
    </div>
  );
}
