import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ForumIcon from "@mui/icons-material/Forum";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import React from "react";
import { baseURL } from "../../common/url";
import "./sidebar.css";

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Sidebar(props: any) {
  const [open, setOpen] = React.useState(false);
  const [data, setdata] = React.useState<any>('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const menuList = [
    { id: 0, name: "Home", icon: <HomeIcon />, active: true },
    { id: 1, name: "Setting", icon: <SettingsIcon />, active: false },
    { id: 2, name: "Messages", icon: <ForumIcon />, active: false },
    { id: 3, name: "Profile", icon: <AccountCircleIcon />, active: false },
  ];

  const validateInput = (e: any) => {
    e.preventDefault();
    const databody = {
      "user": {
        "username": e.target.fname.value,
        "email": e.target.fname.value,
        "password": e.target.Password.value,
      }
    }
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(databody as any)
    };
    fetch(`${baseURL}/api/users`, requestOptions)
      .then(response => response.json())
      .then(data => setdata(data))
      if(data.errors){
        console.log('data.errors', data.errors);
      }
  }

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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <form onSubmit={validateInput}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                CREATE AN ACCOUNT
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <TextField id="Usename-basic" label="Usename" variant="outlined" name='fname' />
                <TextField id="Email-basic" label="Email" variant="outlined" name='femail' />
                <TextField id="Password-basic" label="Password" variant="outlined" name='Password' />
              </Typography>
              <Button type="submit">submit</Button>
            </form>
          </div>
        </Box>

      </Modal>
      <div className="account">ACCOUNT</div>
      <div className="account_detail">
        <div className="img_acc">
          <AccountCircleIcon />
        </div>
        <div className="acc_detail" onClick={handleOpen}>
          <div className="acc_name">acc</div>
          <div className="acc_mail">mail@.com</div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
