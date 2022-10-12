import React from "react";
import Topbar from "../Topbar/Topbar";
import "./feed.css";
import FeedList from "./FeedList";
function Feed(props: any) {
  const [statusFilter, SetStatusFilter] = React.useState("");
  const actionClickOn = (btn: string) => {
    SetStatusFilter(btn);
  };
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
        <FeedList statusFilter={statusFilter} />
      </div>
    </div>
  );
}

export default Feed;
