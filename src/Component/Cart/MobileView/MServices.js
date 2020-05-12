import React, {useState} from "react";
import {DeleteBinButton, MCard, ServiceMListItem,CartServiceMPara,CartPriceMPara} from "./style";
import { ServiceCart } from "../mockCartData";
import {CarInCart} from "../style";



export default function MServices (props){
    const[mServiceList, setMServiceList] = useState(ServiceCart);

    const deleteItem = (id) => {
        const mFilteredList = mServiceList.filter(serviceObj => serviceObj["id"] != id);
        setMServiceList(mFilteredList);
    }

    return<>
        {
            mServiceList.map(serviceObject => {
                const{name,id,price} = serviceObject;
                return<MCard>
                    <ServiceMListItem>
                        <CartServiceMPara>{name}</CartServiceMPara>
                        <DeleteBinButton onClick = {()=> deleteItem(id)} />
                    </ServiceMListItem>
                    <CarInCart>Hyundai Creta(Diesel)</CarInCart>
                <h2 style={{display: "inline-block", padding: "10px", fontSize: "14px", paddingLeft: "4px", paddingBottom: "5px"}}>Amount</h2>
                <CartPriceMPara>Rs. {price}</CartPriceMPara>
                </MCard>
            })
        }
        
    </>

}


