import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
function FeedList(props: any) {
  return (
    <div className="FeedList">
      <div className="FeedItem">
        <div className="detailFeed">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis minus
          pariatur harum eum facilis, illo culpa, possimus cupiditate tenetur
          provident ratione ullam nesciunt veniam labore modi nisi, laborum
          quasi et.
        </div>
        <div className="detailInfor">
          <div className="user_img">
            <AccountCircleIcon /> user account
          </div>
          <div className="like_cmt">
            <div className="user_like">
              <FavoriteIcon /> 123
            </div>
            <div className="user_comment">
              <CommentIcon /> 123
            </div>
          </div>
        </div>
      </div>

      <div className="FeedItem">
        <div className="detailFeed">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis minus
          pariatur harum eum facilis, illo culpa, possimus cupiditate tenetur
          provident ratione ullam nesciunt veniam labore modi nisi, laborum
          quasi et.
        </div>
        <div className="detailInfor">
          <div className="user_img">
            <AccountCircleIcon /> user account
          </div>
          <div className="like_cmt">
            <div className="user_like">
              <FavoriteIcon /> 123
            </div>
            <div className="user_comment">
              <CommentIcon /> 123
            </div>
          </div>
        </div>
      </div>

      <div className="FeedItem">
        <div className="detailFeed">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis minus
          pariatur harum eum facilis, illo culpa, possimus cupiditate tenetur
          provident ratione ullam nesciunt veniam labore modi nisi, laborum
          quasi et.
        </div>
        <div className="detailInfor">
          <div className="user_img">
            <AccountCircleIcon /> user account
          </div>
          <div className="like_cmt">
            <div className="user_like">
              <FavoriteIcon /> 123
            </div>
            <div className="user_comment">
              <CommentIcon /> 123
            </div>
          </div>
        </div>
      </div>

      <div className="FeedItem">
        <div className="detailFeed">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis minus
          pariatur harum eum facilis, illo culpa, possimus cupiditate tenetur
          provident ratione ullam nesciunt veniam labore modi nisi, laborum
          quasi et.
        </div>
        <div className="detailInfor">
          <div className="user_img">
            <AccountCircleIcon /> user account
          </div>
          <div className="like_cmt">
            <div className="user_like">
              <FavoriteIcon /> 123
            </div>
            <div className="user_comment">
              <CommentIcon /> 123
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedList;
