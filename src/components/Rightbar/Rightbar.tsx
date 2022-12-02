import React, { useEffect, useState } from "react";
import { baseURL } from "../../common/url";
import "./rightbar.css";

function Rightbar(props: any) {
  const { chooseTag, tag } = props;
  const [listTag, setlistTag] = useState<Array<string>>([]);
  useEffect(() => {
    fetch(`${baseURL}/api/tags`)
      .then((response) => response.json())
      .then((data) => setlistTag(data.tags as Array<string>));
  }, []);

  return (
    <div className="RightbarContainer">
      <div className="rightbar_menu">
        <div className="search">search</div>
        <div className="noti">noti</div>
        <div className="upload">upload</div>
        <div className="lightmod">lightmod</div>
      </div>
      <div className="RightbarTag">
        {listTag.map((item, key) => (
          <div key={key} className={tag === item ? 'activeTag itemTag' : 'itemTag'} onClick={() => chooseTag(item)}>
            #{item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rightbar;
