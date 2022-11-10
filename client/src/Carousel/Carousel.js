import { Carousel } from "antd";
import React from "react";
const contentStyle = {
  height: "80vh",
  width: "155vh",
  opacity: 0.6,
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  //   background:
  //     "https://www.credr.com/blog/wp-content/uploads/2022/02/service-image.jpg",
  backgroundImage:
    "url('https://www.credr.com/blog/wp-content/uploads/2022/02/service-image.jpg')",
};
function Carousels() {
  return (
    <Carousel autoplay>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  );
}
export default Carousels;
