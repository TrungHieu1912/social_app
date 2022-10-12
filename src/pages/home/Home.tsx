import Feed from "../../components/Feed/Feed";
import Rightbar from "../../components/Rightbar/Rightbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./home.css";

function Home(props: any) {
  return (
    <div id="home" className="main_container">
      <Sidebar />
      <Feed />
      <Rightbar />
    </div>
  );
}

export default Home;
