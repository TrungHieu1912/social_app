import React, { useEffect, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./feed.css";
import { baseURL } from "../../common/url";
interface ArticlesInterface {
  author: any;
  body: any;
  createdAt: any;
  description: any;
  favorited: any;
  favoritesCount: any;
  slug: any;
  tagList: any;
  title: any;
  updatedAt: any;
}
function FeedList(props: any) {
  const { statusFilter } = props;
  console.log("statusFilter", statusFilter);

  const [listArticles, setListArticles] = useState([]);
  useEffect(() => {
    fetch(`${baseURL}/api/articles?limit=20&offset=0`)
      .then((response) => response.json())
      .then((data) => setListArticles(data.articles));
  }, []);
  // console.log("listArticles", listArticles);

  return (
    <div className="FeedList">
      {listArticles.map((article: ArticlesInterface) => (
        <div key={article.slug} className="FeedItem">
          <div className="detailFeed">
            <span className="detailFeed_content">
              <div className="detailFeed_title">{article.title}</div>
              <div>{article.description}</div>
            </span>
            <div className="tags_list">
              {article.tagList.map((item: any, key: any) => (
                <div key={key}> #{item}</div>
              ))}
            </div>
          </div>
          <div className="detailInfor">
            <div className="user_img">
              <AccountCircleIcon />{" "}
              <span className="user_img_name">user account</span>
            </div>
            <div className="like_cmt">
              <div
                className={
                  !article.favorited ? "user_like" : "user_liked user_like"
                }
              >
                <FavoriteIcon /> {article.favoritesCount}
              </div>
              <div className="user_comment">
                <CommentIcon />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FeedList;
