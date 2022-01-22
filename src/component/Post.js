import { Avatar } from '@mui/material';
import React from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import "./Post.css";
import NearMeIcon from '@mui/icons-material/NearMe';
import ChatBubbleOutlinedIcon from '@mui/icons-material/ChatBubbleOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

function Post({profilePic,image,username,timestamp,message}) {
  return <div className="post" >
<div className="post_top">
<Avatar 
     src={profilePic}
     className = "post_avatar"
 />
 <div className="post_topInfo" >
     <h3>{username}</h3>
     <p>Timestamp...</p>
 </div>
</div>
<div className="post_bottom" >
<p>{message}</p>
</div>
<div className="post_image">
    <img src={image}></img>
</div>

<div className="post_options" >
    <div className="post_option" >
<ThumbUpIcon />
<p>Like</p>
    </div>
    <div className="post_option" >
<ChatBubbleOutlinedIcon />
<p>Comment</p>
    </div>
    <div className="post_option" >
<NearMeIcon />
<p>Share</p>
    </div>
    <div className="post_option" >
<AccountCircleIcon />
<ExpandMoreOutlinedIcon/>
    </div>
</div>
  </div>;
}

export default Post;
