import React, {useState} from "react";
import {ServiceMListItem, ServiceMPara, CartPriceMPara, DeleteBinButton, MServiceWrapper} from "./style";
import Cancel from "../../../Assets/img/delete.svg"


export default function MServices (props){

    return<MServiceWrapper>
        {
            (props?.mServiceList?.items || []).map(({quantity,name,price, subPackageName}) => {
                return<ServiceMListItem>
                        <ServiceMPara>{name}</ServiceMPara>                
                        <CartPriceMPara>
                            &#8377; {price}
                            {(props?.mServiceList?.itemIds || []).map(item => {
                                return item.subPackageName == subPackageName ? <DeleteBinButton onClick = {()=> {
                                    props.deleteItem(item.itemId)}} src = {Cancel}></DeleteBinButton>
                                : null
                            })}
                        </CartPriceMPara>
                    </ServiceMListItem>
            })
        }
        
    </MServiceWrapper>

}


