import React, {useState} from "react";
import {ServiceMListItem, ServiceMPara, CartPriceMPara, DeleteBinButton, MServiceWrapper} from "./style";
import Cancel from "../../../Assets/img/cancel.png"


export default function MServices (props){

    return<MServiceWrapper>
        {
            (props?.mServiceList?.items || []).map(({quantity,subPackageName,price}) => {
                return<ServiceMListItem>
                        <ServiceMPara>{subPackageName}</ServiceMPara>
                        {/* <button onClick={()=> quantity-1}>-</button> */}
                        <p>{quantity}</p>
                        
                        <CartPriceMPara>{price}

                        {(props?.mServiceList?.itemIds || []).map(item => {
                            return item.subPackageName == subPackageName? <DeleteBinButton onClick = {()=> {
                                console.log(item.itemId);
                                props.deleteItem(item.itemId)}} src = {Cancel}></DeleteBinButton>
                            : null
                        })}
                        </CartPriceMPara>
                    </ServiceMListItem>
            })
        }
        
    </MServiceWrapper>

}


