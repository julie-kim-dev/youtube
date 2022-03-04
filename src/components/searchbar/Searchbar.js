import React from "react";
import "./searchbar.css";
import { useRef } from "react";
import { navigate, useNavigate, Link } from "react-router-dom";

function Searchbar({searchResult}) {
    const inputRef=useRef();
    let navigate = useNavigate();
    
    /* enter 클릭시 호출되는 공통함수 */
    const searchfnc = () => {
        const value = inputRef.current.value; // input의 value 값을 가져온다
        searchResult(value);
        navigate(`/search?search_query=${value}`)
    }
    
    /* 서치 버튼 클릭시 호출될 함수(엔터를 치나 버튼을 누르나 출력되는 결과물은 같기 때문) */
    const inputclick = () => {
        searchfnc();
    }

    /* 인풋 박스에 enter 시 호출될 함수 */
    const inputEnter = (e) => {
        if(e.key === 'Enter'){
            searchfnc();
        }
    }
    return(
        <div className="searchArea">
            <div className="logoarea">
                <button className="btn-leftmenu"><i className="fa fa-solid fa-bars"></i></button>
                <h1><Link to="/"><img src="/images/logo.png" alt="youtube" className="logoimg" /></Link></h1>
            </div> {/* 왼쪽 */}
            <div className="searchInputArea">
                <input type="search" placeholder="검색" className="searchInput" onKeyPress={inputEnter} ref={inputRef} />
                <button className="searchbtn" onClick={inputclick}>
                    <img src="/images/searchicon.png" alt="search" />
                </button>
                <button className="micbtn"><i className="fa fa-solid fa-microphone"></i></button>
            </div> {/* 가운데 */}
            <div className="topmenuarea">
                <button className="btn-rightmenu">
                    <img src="/images/gridmenuicon.png" alt="topmenu" />
                </button>
                <button className="btn-rightmenu">
                    <i className="fa fa-solid fa-circle-dot"></i>
                </button>
                <button className="btn-rightmenu">
                    <i className="fa fa-solid fa-user"></i>
                </button>
            </div> {/* 오른쪽 */}
        </div>
    )
}

export default Searchbar;