import React, {useState, useEffect} from "react";
import { Slide } from 'react-slideshow-image';
import Skeleton from '@material-ui/lab/Skeleton';
import Image1 from  "../slider/0.png";
import Image2 from  "../slider/1.png";
import Image3 from  "../slider/2.png";
import Image4 from  "../slider/3.png";
import { BannerImage, BannerComponentHeight } from "./style";



const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
};
   
export default function Slideshow() {
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
      const timeOut = setTimeout(() => {
        setIsLoading(false);
        clearTimeout(timeOut);
      }, 100000);
    },[]);

    return (
      <div className="slide-container">
        {
          isLoading ?  <Skeleton animation="wave" height={BannerComponentHeight} width="80%"/> : <Slide {...properties}>
          {
              [Image1, Image2, Image3, Image4].map((image, index) => {
                return <div className="each-slide" key = {index}>
                    <BannerImage src = {image} /> 
                </div>
              })
          }
        </Slide>
        }
      </div>
    )
}