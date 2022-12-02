import { useEffect, useState } from "react";
import { baseURL } from "../../common/url";
import Feed from "../../components/Feed/Feed";
import Rightbar from "../../components/Rightbar/Rightbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./home.css";

function Home(props: any) {
  // useEffect(() => {
  //   fetch(`${baseURL}/api/user`)
  //     .then((response) => response.json())
  //     .then((data) => console.log('get user', data));
  // }, []);\
 const [tag, setTag] = useState<string>('');
  const chooseTag = (item:string)=>{
    setTag(item);
  }
  console.log('item tag', tag);
  return (
    <div id="home" className="main_container">
      <Sidebar />
      <Feed tag={tag}/>
      <Rightbar chooseTag={chooseTag} tag={tag}/>
    </div>
  );
}

export default Home;
