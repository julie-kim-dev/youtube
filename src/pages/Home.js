import React from "react";
import "../App.css";
import Menubar from "../components/menubar/Menubar";
import VideoList from "../components/videolist/VideoList";
import VideoView from "../components/videoview/Videoview";

const Home = ({videoItems,onVideoClick,selectView}) => {
    return(
        <div className="contents-wrap">
            <div className="sidebar">
                <Menubar />
            </div>
            <div className="content">
                {/* { 필요 없어서 주석처리함
                    selectView && <div className="view"> <VideoView video={selectView} /> </div>
                } */}
                <div className="list">
                    <VideoList
                    videoItems={videoItems}
                    onVideoClick={onVideoClick}
                    display="collist" />
                </div>
            </div> {/* e:content */}
        </div>
    )
}

export default Home;