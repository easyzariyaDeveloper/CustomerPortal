import React, {useState} from "react";
import {ServiceMListItem, ServiceMPara, CartPriceMPara, DeleteBinButton, MServiceWrapper} from "./style";



export default function MServices (props){

    return<MServiceWrapper>
        {
            props.mServiceList.map(serviceObject => {
                const{name,id,price} = serviceObject;
                return<ServiceMListItem>
                        <ServiceMPara>{name}</ServiceMPara>
                        <CartPriceMPara>Rs. {price}
                            <DeleteBinButton onClick = {()=> props.deleteItem(id)}> X </DeleteBinButton>
                        </CartPriceMPara>
                    </ServiceMListItem>
            })
        }
        
    </MServiceWrapper>

}


