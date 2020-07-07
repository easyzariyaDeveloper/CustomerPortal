import React, {useState} from "react";
import Slider from "react-slick";
import { makeStyles } from "@material-ui/core/styles";
import Skeleton from '@material-ui/lab/Skeleton';
import Image1 from  "../slider/0.png";
import Image2 from  "../slider/1.png";
import Image3 from  "../slider/2.png";
import Image4 from  "../slider/3.png";
import { BannerImage, BannerComponentHeight, SlideContainer, SliderItem } from "./style";


const properties = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "30px",
  slidesToShow: 1,
  speed: 800,
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
   
export default function Slideshow() {
  const images = [Image1, Image2, Image3, Image4];
  // const images  = [
  //   "https://lh3.googleusercontent.com/proxy/TPDG5TUGklNY4p6LQFHIHhbcnNMpu3PY5zNYk7F-vy3z6UTJpY10KFsVPle5F-RQKgBrFB7hOK0hBAj0jcJbQjwB9GzgNUi9JGZQ9grddTsg8RyC38ANORnMc6az8V8y1w",
  //   Image1,
  //   "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.engadget.com%2F2012-03-05-android-market-4gb-app-limit.html&psig=AOvVaw0kZR0hJBj5cZBXgLtMCgan&ust=1594143792049000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJjfocWWueoCFQAAAAAdAAAAABAI",
  //   Image2,
  //   "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kirkanderson.com%2Fimage%2FI0000WbAmLKgq_D8&psig=AOvVaw0kZR0hJBj5cZBXgLtMCgan&ust=1594143792049000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJjfocWWueoCFQAAAAAdAAAAABAY",
  //   "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flickr.com%2Fphotos%2Fgeorge_pancescu%2F24405972701&psig=AOvVaw0kZR0hJBj5cZBXgLtMCgan&ust=1594143792049000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJjfocWWueoCFQAAAAAdAAAAABAd"
  // ];
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