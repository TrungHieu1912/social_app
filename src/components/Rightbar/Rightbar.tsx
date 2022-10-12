import React, { useEffect, useState } from "react";
import "./rightbar.css";

function Rightbar(props: any) {
  const [listTag, setlistTag] = useState<Array<string>>([]);
  const baseURL = "https://api.realworld.io";
  useEffect(() => {
    fetch(`${baseURL}/api/tags`)
      .then((response) => response.json())
      .then((data) => setlistTag(data.tags as Array<string>));
  }, []);
  console.log("list", listTag);

  return (
    <div className="Rightbar">
      Rightbar
      <div className="RightbarTag">
        <div className="itemTag">itemTag</div>
        {listTag.map((item, key) => (
          <div key={key} className="itemTag">
            {item}
          </div>
        ))}
        <div className="itemTag">itemTag</div>
        <div className="itemTag">itemTag</div>
        <div className="itemTag">itemTag</div>
      </div>
    </div>
  );
}

export default Rightbar;
