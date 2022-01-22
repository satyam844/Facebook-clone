import React from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import { SubscriptionsOutlined } from '@material-ui/icons';
import SupervisedUserCircleOutlinedIcon from '@mui/icons-material/SupervisedUserCircleOutlined';
import { Avatar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ForumIcon from '@mui/icons-material/Forum';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SvgIcon from '@mui/material/SvgIcon';

function Header() {
  return <div className="Header">
    <div className="HeaderLeft">
      <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/1200px-2021_Facebook_icon.svg.png"></img>
     
      <div className="Headerinput">
      <SearchIcon />
      <input placeholder="Search Facebook" type="text"></input>
      </div>
    </div>
    
    <div className="HeaderMiddle">
      <div className="HeaderIcon HeaderIcon__active">
<HomeIcon/>
      </div>
      <div className="HeaderIcon">
      <FlagIcon/>
      </div>
      <div className="HeaderIcon">
      <SubscriptionsOutlined/>
      </div>
      <div className="HeaderIcon">
      <SupervisedUserCircleOutlinedIcon/>
      </div>
    </div>
    <div className="HeaderRight">
     <div className="HeaderInfo">
       <Avatar/>
       <h4>satyamsss</h4>
 <IconButton> 
   <AddIcon/>
  </IconButton>
  <IconButton> 
  <ForumIcon/>
  </IconButton>
  <IconButton> 
   <NotificationsActiveIcon/>
  </IconButton>
  <IconButton> 
   <ExpandMoreIcon/>
  </IconButton>
     </div>
     </div>
  </div>;
}

export default Header;
