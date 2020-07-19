import React, {useState} from "react";
import {ServiceMListItem, ServiceMPara, CartPriceMPara, DeleteBinButton, MServiceWrapper} from "./style";
import Cancel from "../../../Assets/img/cancel.png"


export default function MServices (props){

    return<MServiceWrapper>
        {
            (props?.mServiceList ||[]).map(({name,price,quantity}) => {
                return<ServiceMListItem>
                        <ServiceMPara>{name}</ServiceMPara>
                        <p>{quantity}</p>
                        <CartPriceMPara>Rs. {price}
                            <DeleteBinButton onClick = {()=> props.deleteItem(id)} src = {Cancel}></DeleteBinButton>
                        </CartPriceMPara>
                    </ServiceMListItem>
            })
        }
        
    </MServiceWrapper>

}


