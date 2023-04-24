import React from'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from "react-burger-menu";

export default props =>{
    return(
        <Menu {...props}>
            <div className="menu-item" ><Link to="/Look0">学校からのお知らせ</Link></div>
            <div className="menu-item" ><Link to="/Look1">クラス内でのお知らせ</Link></div>
            <div className="menu-item" ><Link to="/Album">アルバム</Link></div>
        </Menu>
    );
}