import React, {useState} from "react";
import {DeleteBinButton, MCard, ServiceMListItem} from "./style";
import { ServiceCart } from "../mockCartData";
import {CartServicePara,CartPricePara } from "../style";



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
                        <CartServicePara>{name}
                        <p>Hyundai Creta(Diesel)</p>
                        </CartServicePara>
                        <DeleteBinButton onClick = {()=> deleteItem(id)} />
                    </ServiceMListItem>
                <h2>Amount</h2>
                <CartPricePara>Rs. {price}</CartPricePara>
                </MCard>
            })
        }
        
    </>

}