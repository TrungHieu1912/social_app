import React from "react";
import "./sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import ForumIcon from "@mui/icons-material/Forum";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
function Sidebar(props: any) {
  const menuList = [
    { id: 0, name: "Home", icon: <HomeIcon />, active: true },
    { id: 1, name: "Setting", icon: <SettingsIcon />, active: false },
    { id: 2, name: "Messages", icon: <ForumIcon />, active: false },
    { id: 3, name: "Profile", icon: <AccountCircleIcon />, active: false },
  ];
  return (
    <div className="Sidebar">
      <div className="logo_app">Cofeed</div>
      <div className="account">MENU</div>
      {menuList.map((menu, key) => (
        <div
          key={key}
          className={menu.active !== true ? "menuItem" : `menuItem active`}
        >
          <div className="icon_menu">{menu.icon}</div>
          <div>{menu.name}</div>
        </div>
      ))}
      <div className="account">ACCOUNT</div>
      <div className="account_detail">
        <div className="img_acc">
          <AccountCircleIcon />
        </div>
        <div className="acc_detail ">
          <div className="acc_name">acc</div>
          <div className="acc_mail">mail@.com</div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
