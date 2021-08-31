import React from "react";

function Photo(props) {
  return <img className="circle-img" src={props.img} alt="avatar_img" />;
}

export default Photo;
