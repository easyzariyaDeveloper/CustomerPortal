import React from 'react';
import { Fade } from 'react-slideshow-image';
import { images } from "../../mockServiceData";
import { ImageContentDiv } from './style';



const fadeProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    onChange: (oldIndex, newIndex) => {
        console.log(`fade transition from ${oldIndex} to ${newIndex}`);
    }
    
}

export const ImageSlideShow = (props) => {
    return (
        <div className="slide-container">
            <Fade {...fadeProperties}>
                {images.map(el => {
                    return <div className="each-fade">
                        <div className="image-container">
                            <img style= {{width: "100%", height: "max-content"}}
                                src={el} />
                            <ImageContentDiv>
                               <p>{props.name}</p> 
                               <p>Rs.{props.cost}</p>
                            </ImageContentDiv>
                        </div>
                    </div>
                })}
            </Fade>
        </div>
    )
}

