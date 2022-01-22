import React from 'react';
import "./Feed.css";
import Post from './Post';
import MessageSender from './MessageSender';
import StoryReel from './StoryReel';
function Feed() {
  return <div className="Feed" >
      <StoryReel />
     
      {/* Story Reel */}
<MessageSender/>
<Post 
image="https://cdn.cnn.com/cnnnext/dam/assets/211019083118-04-bitcoin-file-exlarge-169.jpg"
username="@realBuffett"
timestamp="This is a timestamp"
message="Bitcoin is ingenious"
profilePic="https://imageio.forbes.com/specials-images/dam/imageserve/9e2c3b55d3634cba9f2e2b21787e7489/0x0.jpg?format=jpg&width=1200&fit=bounds"   />
<Post 
  profilePic="https://cdn.vox-cdn.com/thumbor/yZUBvIZkn8eY9NDr47NTTe87M88=/0x0:5136x3424/1200x800/filters:focal(2533x486:3353x1306)/cdn.vox-cdn.com/uploads/chorus_image/image/69417819/GettyImages_813884326.0.jpg"
  message="Getting ready for new marriage"
  timestamp="This is a timestamp"
  username="@badassBezoz"
   />
<Post   />
  </div>;
}

export default Feed;
