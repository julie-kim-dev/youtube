import React from "react";
import "./video.css";
import { Link } from "react-router-dom";
import * as common from "../../common";

const Video = ({videoItem,onVideoClick,display,search}) => {
    // ({videoItem})
    const container = 'container';
    const displayClass = display === 'rowlist' ? 'list-h' : 'list-v';
    
    return(
        <li className={`${container} ${displayClass} ${search ? 'search' : ''}`}>
            <Link to="/watch">
                <div className="video" onClick={()=>onVideoClick(videoItem)}>
                    <img className="thumimg"
                    src={videoItem.snippet.thumbnails.medium.url}
                    alt="video thumbnail" />
                    <div className="titledata">
                        <div className="channelImg">
                        <img className="channelImg-thum"
                        src={videoItem.snippet.thumbnails.default.url}
                        alt="video thumbnail" />
                        </div>
                        <div>
                            <p className="title">{videoItem.snippet.title}</p>
                            <p className="channelTitle">{videoItem.snippet.channelTitle}</p>
                            <p className="publishData">{common.publishDate(videoItem.snippet.publishedAt)}</p>
                            {
                                !search && <p className="viewNum">댓글 {common.numberWithComma(videoItem.statistics.commentCount)}개</p>
                            }
                            {
                                search && <div className="description">{videoItem.snippet.description}</div>
                            }
                            {/* <p className="viewData">조회수 {common.numberWithComma(videoItem.statistics.viewCount)}회</p> */}
                        </div>
                    </div>
                </div>
            </Link>
        </li>
    );
}

export default Video;