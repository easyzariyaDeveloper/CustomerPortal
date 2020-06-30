import React from "react";
import { Slide } from 'react-slideshow-image';
import Image1 from  "../slider/0.png";
import Image2 from  "../slider/1.png";
import Image3 from  "../slider/2.png";
import Image4 from  "../slider/3.png";
import { BannerImage } from "./style";

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
};
   
export default function Slideshow() {
    return (
      <div className="slide-container">
        <Slide {...properties}>
          {
              [Image1, Image2, Image3, Image4].map((image, index) => {
                return <div className="each-slide" key = {index}>
                    <BannerImage src = {image} /> 
                </div>
              })
          }
        </Slide>
      </div>
    )
}