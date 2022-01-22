import React from 'react';
import Story from './Story';
import "./StoryReel.css";
function StoryReel() {
  return <div className="StoryReel">
      <Story profileSrc="https://manilastandard.net/wp-content/uploads/2021/11/38402_justin_bieber.jpg"
       title="Justin" image="https://static01.nyt.com/images/2020/02/24/arts/24billboard-item/24billboard-item-mediumSquareAt3X.jpg" 
      />
      <Story profileSrc="https://i.pinimg.com/564x/b8/71/9f/b8719fe6d302f415bd2412fec08510d4--eminem-quotes-eminem-rap.jpg" title="Eminem" image="https://townsquare.media/site/812/files/2022/01/attachment-eminem-nft.jpg"/>
      <Story  profileSrc="https://servercarlosesverde.nyc3.digitaloceanspaces.com/elevenglobal/wp-content/uploads/2021/02/19170002/musktwitter.jpg" title="Elon" image="https://img.etimg.com/thumb/msid-85447193,width-650,imgsize-709966,,resizemode-4,quality-100/this-is-not-the-first-time-the-spacex-ceo-has-complained-about-an-apple-product-.jpg"/>
      <Story  profileSrc="https://i.pinimg.com/736x/16/92/f8/1692f86bca18042f13db0f629b30ec75.jpg" title="Messi" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgcL9OkNQty6-LPoYSW6Ktv6ZIK7Zuq69Bdg&usqp=CAU"/>
      <Story  profileSrc="https://st1.bollywoodlife.com/wp-content/uploads/2021/10/Jin-6.png" title="Jin" image="https://imgix.bustle.com/uploads/getty/2020/9/30/e0bf7bbf-34be-431c-bdd6-c5abb8500ee7-getty-1210044368.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg"/>
  </div>;
}

export default StoryReel;
