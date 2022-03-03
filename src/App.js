import './App.css';
import {useState} from "react";
import {useEffect} from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VideoList from "./components/videolist/VideoList";
import Searchbar from './components/searchbar/Searchbar';
import Videoview from './components/videoview/Videoview';
import Home from './pages/Home';
import Search from './pages/Search';
import Watch from './pages/Watch';

function App() {
  const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
  const [videoItems, setVideoItems] = useState([]);
  const [selectView,setSelectView] = useState(null);
  const selectVideo = (video) => {
    setSelectView(video); // 비디오가 받아지면 setSelectView 함수로 state 값 받아진 비디오로 업데이트
  }
  const search = (searchValueTxt) => {
    setSelectView(null)
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&regionCode=kr&type=video&maxResults=30&q=${searchValueTxt}&key=${API_KEY}`, requestOptions)
      .then(response => response.json())
      .then(result => result.items.map(item=>({...item, id:item.id.videoId})))
      .then(items => setVideoItems(items))
      .catch(error => console.log('error', error));
  } // 서치 함수 끝

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&chart=mostPopular&maxResults=20&regionCode=KR&key=${API_KEY}`, requestOptions)
      .then(response => response.json())
      .then(result => setVideoItems(result.items)) //items 받아와서 setVideoItems에 전달
      .catch(error => console.log('error', error));
  }, [])
  return (
    <div className="App">
      <BrowserRouter>
        <Searchbar searchResult={search} />
        <Routes>
          <Route path='/' element={<Home videoItems={videoItems} onVideoClick={selectVideo} selectView={selectView}/> } />
          <Route path='/Search' element={<Search videoItems={videoItems} onVideoClick={selectVideo}  selectView={selectView}/> } />
          <Route path='/Watch' element={<Watch videoItems={videoItems} onVideoClick={selectVideo} selectView={selectView}/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

/* && 단축 평가
false && 값 => false 리턴
true && 값 => 값
값 && true => true
값1 && 값2 => 값2
*/