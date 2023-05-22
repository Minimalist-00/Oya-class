import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Look0, Look1 } from "./Look.jsx";
import Home from "./Home";
import Login from "./Login.jsx";
import LoginParent from "./LoginParent.jsx";
import LoginTeacher from "./LoginTeacher.jsx";
import Album from "./Album.jsx";
import Setting from "./Setting.jsx";
import UserInfo from "./UserInfo.jsx";
import { Detail0, Detail1 } from "./Detail.jsx";
import Home_Teacher from "./Home_Teacher.jsx";
import Post from "./Post.jsx";
import PostFinish from "./PostFinish.jsx";
import Preparation from "./Preparation.jsx";
import DesignProposal from "./DesignProposal.jsx";
import CircularProgress from "@mui/material/CircularProgress";

export function ScrollTop() {
  //画面遷移時 スクロール位置をページ最上部に固定
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [school, setSchool] = useState(null);
  const [myclass, setMyclass] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [teacherlogin, setTeacherlogin] = useState(null);
  const [parentslogin, setParentslogin] = useState(null);

  const getSchool = () => {
    //学校のお知らせに関するデータベースの処理
    const url =
      "https://2120017app1.azurewebsites.net/api/HttpTrigger1?code=Azv1e-WFwEAAy3qt1k1XPV1yr06pBiO-d7K0Rla-Zeq4AzFuJDB5yg==";

    fetch(url, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/x-www-form-urlencoded",
      },
    })
      .then((response) =>
        response.json().then((res) => {
          console.log(res);
          setSchool(res);
          setIsLoaded(true);
        })
      )
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    setSchool(getSchool());
  }, []);

  const getMyclass = () => {
    //クラスのお知らせに関するデータベースの処理
    const url =
      "https://2120017app1.azurewebsites.net/api/HttpTrigger_c?code=dUMz0tilMD9ycNNq9Sn1EjagNlgpdHLiCSjSoPAt88jxAzFuki6Ffw==";

    fetch(url, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/x-www-form-urlencoded",
      },
    })
      .then((response) =>
        response.json().then((res) => {
          console.log(res);
          setMyclass(res);
          setIsLoaded(true);
        })
      )
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    setMyclass(getMyclass());
  }, []);

  /*
  保護者のログイン関係　未完成の処理
  const getParentslogin = () => {
    const url = 'https://2120017app1.azurewebsites.net/api/loginGet?code=5ltSKhVwazavyl3xWuVFUO11vm5fNGTRlJtzs5R2fahRAzFumf_f5A==';

    fetch(url,
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-type': 'application/x-www-form-urlencoded'
        }
      })
      .then(response => response.json().then(res => {
        console.log(res);
        setParentslogin(res);
        setIsLoaded(true);
      }))
      .catch(err => console.error(err));
  };
  useEffect(
    () => {
      setParentslogin(getParentslogin());
    }, []
  );

  教師のログイン関係　未完成の処理
  const getTeacherlogin = () => {
    const url = 'https://2120017app1.azurewebsites.net/api/loginGet?code=5ltSKhVwazavyl3xWuVFUO11vm5fNGTRlJtzs5R2fahRAzFumf_f5A==';

    fetch(url,
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-type': 'application/x-www-form-urlencoded'
        }
      })
      .then(response => response.json().then(res => {
        console.log(res);
        setTeacherlogin(res);
        setIsLoaded(true);
      }))
      .catch(err => console.error(err));
  };
  useEffect(
    () => {
      setTeacherlogin(getTeacherlogin());
    }, []
  );
  */

  if (isLoaded == false) {
    //データベース取得までの表示
    return (
      <div className="center-block text-center loding">
        <div className="preparation-icon center-block pt-5">
          <CircularProgress color="inherit" />
        </div>
        <h1 className="mt-5 h4 fw-bold">ページを読み込んでいます</h1>
        <p className="mt-4">
          時間がかかることがあります
          <br />
          しばらくお待ちください
        </p>
      </div>
    );
  } else {
    //データベース取得後の表示
    return (
      <BrowserRouter>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="/" element={<Login />} />
            <Route
              path="/home"
              element={<Home school={school} myclass={myclass} />}
            />
            <Route path="/look0" element={<Look0 school={school} />} />
            <Route path="/look1" element={<Look1 myclass={myclass} />} />
            <Route path="/album" element={<Album />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/userInfo" element={<UserInfo />} />
            <Route path="/detail0/:id" element={<Detail0 school={school} />} />
            <Route
              path="/detail1/:id"
              element={<Detail1 myclass={myclass} />}
            />
            <Route
              path="/Home_Teacher"
              element={<Home_Teacher school={school} myclass={myclass} />}
            />
            <Route path="/post" element={<Post myclass={myclass} />} />
            <Route path="/postFinish" element={<PostFinish />} />
            <Route
              path="/loginParent"
              element={<LoginParent parentslogin={parentslogin} />}
            />
            <Route
              path="/loginTeacher"
              element={<LoginTeacher teacherlogin={teacherlogin} />}
            />
            <Route path="/Preparation" element={<Preparation />} />
            <Route path="/DesignProposal" element={<DesignProposal />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
