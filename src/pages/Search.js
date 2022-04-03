import React from "react";
import "../App.css";
import Menubar from "../components/menubar/Menubar";
import VideoList from "../components/videolist/VideoList";
import VideoView from "../components/videoview/Videoview";

const Search = ({videoItems,onVideoClick,selectView}) => {
    return(
        <div className="contents-wrap">
            <div className="sidebar">
                <Menubar />
            </div>
            <div className="content">
                {/* {
                    selectView && <div className="view"> <VideoView video={selectView} /> </div>
                    //selectView가 false면 false값 리턴, selectView가 true면(값이 있는 상태) VideoView 컴포넌트 리턴
                } */}
                <div className="list">
                    <VideoList
                    videoItems={videoItems}
                    onVideoClick={onVideoClick}
                    display="rowlist"
                    search={true} //video.js의 props 받아옴
                    /> 
                </div>
            </div>
        </div>
    )
}

export default Search;