import React from "react";
import Topbar from "../Topbar/Topbar";
import "./feed.css";
import FeedList from "./FeedList";
function Feed(props: any) {
  return (
    <div className="Feed">
      <div className="container_main">
        <Topbar />
        <div className="FeedBar">
          <div className="feed_tit">Feeds</div>
          <div className="menu_feeds">
            <div className="item_feeds active_item_feeds">All</div>
            <div className="item_feeds">Following</div>
            <div className="item_feeds">Newest</div>
            <div className="item_feeds">Popular</div>
          </div>
        </div>
        <FeedList />
      </div>
    </div>
  );
}

export default Feed;
