import React, { useEffect } from "react";
import { baseURL } from "../../common/url";
import Topbar from "../Topbar/Topbar";
import "./feed.css";
import FeedList from "./FeedList";
function Feed(props: any) {
  const { tag } = props;
  console.log('tag///', tag);

  const [statusFilter, SetStatusFilter] = React.useState("");
  const actionClickOn = (btn: string) => {
    SetStatusFilter(btn);
  };
  const [listArticles, setListArticles] = React.useState([]);
  const request = tag ? `${baseURL}/api/articles?tag=${tag}&limit=20&offset=0` : `${baseURL}/api/articles?limit=20&offset=0`;
  // const CheckTypeOfRequest = (type: string, value:string, author?:any) => {
  //   switch (type) {
  //     case 'tag':
  //       `${baseURL}/api/articles?tag=${value}&limit=20&offset=0`
  //       break;
  //     case 'author':
  //       `${baseURL}/api/articles?favorited=${author}&limit=20&offset=0`
  //       break;
  //     default:
  //       `${baseURL}/api/articles?limit=20&offset=0`
  //       break;
  //   }
  // }
  useEffect(() => {
    fetch(request)
      .then((response) => response.json())
      .then((data) => setListArticles(data.articles));
  }, [tag]);
  return (
    <div className="Feed">
      <div className="container_main">
        <Topbar />
        <div className="FeedBar">
          <div className="feed_tit">Feeds</div>
          <div className="menu_feeds">
            <div
              className={
                statusFilter === "All"
                  ? "item_feeds active_item_feeds"
                  : "item_feeds"
              }
              onClick={() => actionClickOn("All")}
            >
              All
            </div>
            <div
              className={
                statusFilter === "Following"
                  ? "item_feeds active_item_feeds"
                  : "item_feeds"
              }
              onClick={() => actionClickOn("Following")}
            >
              Following
            </div>
            <div
              className={
                statusFilter === "Newest"
                  ? "item_feeds active_item_feeds"
                  : "item_feeds"
              }
              onClick={() => actionClickOn("Newest")}
            >
              Newest
            </div>
            <div
              className={
                statusFilter === "Popular"
                  ? "item_feeds active_item_feeds"
                  : "item_feeds"
              }
              onClick={() => actionClickOn("Popular")}
            >
              Popular
            </div>
          </div>
        </div>
        <FeedList statusFilter={statusFilter} listArticles={listArticles} />
      </div>
    </div>
  );
}

export default Feed;
