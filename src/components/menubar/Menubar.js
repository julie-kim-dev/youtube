import React from "react";
import "./menubar.css";

function Menubar(){
    return(
        <div className="menubar-area">
            <button className="menu-btn">
                <i className="fas fa-home"></i>
                홈
            </button>
            <button className="menu-btn">
                <i className="fas fa-fire"></i>
                인기
            </button>
            <button className="menu-btn">
                <i className="fas fa-globe"></i>
                탐색
            </button>
            <button className="menu-btn">
                <i className="fa fa-youtube"></i>
                구독
            </button>
            <button className="menu-btn">
                <i className="fas fa-box"></i>
                보관함
            </button>
        </div>
    )
}

export default Menubar;