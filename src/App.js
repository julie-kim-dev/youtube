import './App.css';
import {useState} from "react";
import {useEffect} from "react";
import VideoList from "./components/videolist/Videolist";
import Searchbar from './components/searchbar/Searchbar';

function App() {
  const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
  const [videoItems, setVideoItems] = useState([]);
  const search = (searchValueTxt) => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${searchValueTxt}&key=${API_KEY}`, requestOptions)
      .then(response => response.json())
      .then(result => setVideoItems(result.items))
      .catch(error => console.log('error', error));
  } // 서치 함수 끝
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&regionCode=KR&key=${API_KEY}`, requestOptions)
      .then(response => response.json())
      .then(result => setVideoItems(result.items)) //items 받아와서 setVideoItems에 전달
      .catch(error => console.log('error', error));
  }, [])
  return (
    <div className="App">
      <Searchbar searchResult={search} />
      <VideoList videoItems={videoItems} />
    </div>
  );
}

export default App;
