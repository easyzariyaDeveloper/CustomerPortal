import React from "react";
import {OverLay, LoaderDiv, WaitingText} from "../styles";
import Loader from "../../Assets/img/loader.gif"

export default function PageLoader(props){
    return <OverLay>
        <LoaderDiv>
            <img src= {Loader}/>
            <WaitingText>Please Wait</WaitingText>
        </LoaderDiv>
    </OverLay>
}