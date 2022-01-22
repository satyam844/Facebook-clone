import React from 'react';
import "./Widgets.css";
function Widgets() {
    const customStyle = {
        border : "none",
        overflow : "hidden"
    }
  return <div className="widgets" >
      <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FLeBron&tabs=timeline&width=340&height=1500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
       width="340" 
       height="100%" 
       style={customStyle}
       scrolling="no"
        frameborder="0" 
        allowfullscreen="true"
         allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
  </div>;
}

export default Widgets;
