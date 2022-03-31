import React from "react";
import "../App.css";
import VideoList from "../components/videolist/VideoList";
import VideoView from "../components/videoview/Videoview";

const Watch = ({videoItems,onVideoClick,selectView, selectedWatch}) => {
    return(
        <div className="contents-wrap">
            <div className="content">
                <div className="view"> <VideoView video={selectedWatch} /> </div>
                <div className="list">
                    <VideoList
                    videoItems={videoItems}
                    onVideoClick={onVideoClick}
                    display="rowlist" />
                </div>
            </div>
        </div>
    )
}

export default Watch;