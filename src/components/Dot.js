import React from "react";
import "../css/dot.css";

export default function Dot(props) {
  const style = { backgroundColor: props.color };
  return <div className="dot" style={style}></div>;
}
