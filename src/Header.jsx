import React from "react";
import { Link, Outlet } from "react-router-dom";
import Menu from "./Menu.jsx";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

export function Header(props) {
  return (
    <div>
      <header className="header">
        <div className="header__inner px-3">
          <h1>
            <Link to="/home" className="logo">
              Oya class
            </Link>
          </h1>
          <div>
            <Link to="/setting" className="setIcon">
              <SettingsIcon style={{ color: "white" }} />
            </Link>
            <Link to="/userInfo" className="userIcon">
              <AccountCircleIcon style={{ color: "white" }} />
            </Link>
          </div>
        </div>
        <Menu
          width={230}
          left
          customBurgerIcon={<MenuOpenIcon className="burger-bars-color" />}
        />
      </header>
      <body className="container pt-4 h-100 main-bg-color">
        <Outlet />
      </body>
    </div>
  );
}
