import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import InsertLinkIcon from "@mui/icons-material/InsertLink";

function Post(props) {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [date, setDate] = useState("");
  const [url, setUrl] = useState("");

  function handleChange1(event) {
    setDate(event.target.value);
  }

  function handleChange2(event) {
    setText1(event.target.value);
  }

  function handleChange3(event) {
    setText2(event.target.value);
  }

  function handleChange4(event) {
    setUrl(event.target.value);
  }

  const onClick = () => {
    fetch(
      "https://2120017app1.azurewebsites.net/api/HttpTrigger2?code=OeZVB_KVefxh1Biv-yytpbJw88sL10YgpQfizID-9we_AzFur4mQqg==",
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        method: "POST",
        body: JSON.stringify({
          date: date,
          detail: text1,
          com: text2,
          url: url,
        }),
      }
    );
  };

  return (
    <div>
      <h2 className="title border-bottom mx-2">お知らせを投稿</h2>
      <Container className="pt-2">
        <form action="/postFinish">
          <div>
            <div className="mb-3">
              <div className="mb-1">投稿日</div>
              <div>
                <input
                  className="post-date"
                  value={date}
                  onChange={handleChange1}
                  type="date"
                  id="date"
                  name="date"
                />
              </div>
            </div>
            <div className="mb-3">
              <div className="mb-1">タイトル</div>
              <div>
                <input
                  className="post-form"
                  value={text1}
                  onChange={handleChange2}
                  type="nvarchar"
                  id="detail"
                  name="detail"
                />
              </div>
            </div>
            <div className="mb-3">
              <div className="mb-1">内容</div>
              <div>
                <textarea
                  className="post-textarea"
                  value={text2}
                  onChange={handleChange3}
                  type="nvarchar"
                  id="com"
                  name="com"
                />
              </div>
            </div>
            <div className="mb-4">
              <div className="mb-1">
                URL
                <InsertLinkIcon className="ms-1" />
              </div>
              <div>
                <input
                  className="post-form"
                  value={url}
                  onChange={handleChange4}
                  type="nvarchar"
                  id="url"
                  name="url"
                />
              </div>
            </div>
            <div>
              <Link to="/postFinish">
                <input
                  className="post-button"
                  type="button"
                  onClick={onClick}
                  value="投稿する"
                />
              </Link>
            </div>
          </div>
        </form>
      </Container>
    </div>
  );
}

export default Post;
