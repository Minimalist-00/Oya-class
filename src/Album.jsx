import React from "react";
import { Link } from "react-router-dom";

const tentativeAlbum = [
  { id: 0, date: "2023.02.18", title: "修学旅行", img: "IMG_8914" },
  { id: 1, date: "2023.01.12", title: "社会科見学", img: "IMG_8910" },
  { id: 2, date: "2022.10.24", title: "音楽祭", img: "IMG_8915" },
  { id: 3, date: "2022.09.17", title: "運動会", img: "IMG_8916" },
  { id: 4, date: "2022.06.19", title: "やがえふ", img: "IMG_8917" },
  { id: 5, date: "2022.05.06", title: "遠足", img: "IMG_8918" },
  { id: 6, date: "2022 - 2023", title: "日常生活", img: "IMG_8919" },
  { id: 7, date: "2022 - 2023", title: "その他", img: "IMG_8920" },
];

function Album() {
  const albumList = tentativeAlbum.map((album) => {
    return (
      <div className="col ps-4 pb-4">
        <img
          className="w-100 pb-1 border album-top-img"
          src={album.img + ".jpg"}
          onClick={() => alert("アルバムのページは現在準備中です。")}
        />
        <p className="album">
          {album.date}
          <br />
          {album.title}
        </p>
      </div>
    );
  });

  return (
    <div className="mb-3">
      <h1 className="title pb-3 mx-2">アルバム</h1>
      <div className="row row-cols-2 pb-2">{albumList}</div>
    </div>
  );
}

export default Album;
