import React, {useState} from "react";
import Slider from "react-slick";
import { makeStyles } from "@material-ui/core/styles";
import Skeleton from '@material-ui/lab/Skeleton';
import { images } from "../../mockServiceData";
import { BannerImage, BannerComponentHeight, SlideContainer, SliderItem } from "../../../Home/MobileView/style";



const properties = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "30px",
    slidesToShow: 1,
    speed: 400,
    swipe: true,
    autoplay: true,
  };
  
  const useStyles = makeStyles(theme => ({
    root: {
      "position": "absolute",
      "left": "30px",
      "bottom": "-20px"
    },
  }));



export const ImageSlideShow = (props) => {

    const [loadingList,setLoadingList] = useState(Array(images.length).fill(true));
    const classes = useStyles();

    return (
        <SlideContainer>
        <Slider {...properties}>
         {
             images.map((image, index) => {
               return <>
                   <SliderItem className="each-slide" key = {index}>
                     {loadingList[index] && <Skeleton animation="wave" height={BannerComponentHeight} width="80%" className={classes.root} />}
                     <BannerImage src = {image} style = {{"visibility": loadingList[index] ? "hidden" : "visible" }}  onLoad = {() => {
                       const newLoadingList = [...loadingList];
                       newLoadingList[index] = false;
                       setLoadingList(newLoadingList);
                     }}/> 
                   </SliderItem>
               </>
             })
         }
       </Slider>
     </SlideContainer>
    )
}

