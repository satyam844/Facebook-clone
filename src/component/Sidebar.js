import React from 'react';
import "./Sidebar.css";
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import PeopleIcon from '@mui/icons-material/People';
import ChatIcon from '@mui/icons-material/Chat';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import SidebarRow from './SidebarRow';
function Sidebar() {
  return <div className="Sidebar">
 
<SidebarRow src="Avatar" title="Username"  />
<SidebarRow title="COVID-19 Information Center" Icon={LocalHospitalIcon} />
<SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
<SidebarRow title="Friends" Icon={PeopleIcon} />
<SidebarRow title="Messenger" Icon={ChatIcon} />
<SidebarRow title="Marketplace" Icon={StorefrontIcon} />
<SidebarRow title="Videos" Icon={VideoLibraryIcon} />

  </div>;
}

export default Sidebar;