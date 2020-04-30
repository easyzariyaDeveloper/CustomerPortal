import React, {useState} from "react";
import {ServiceCart} from "../mockCartData";
import {ServiceCartWrapper, AddToCartService} from "../style"


export default function Services(props){
    return <ServiceCartWrapper>
        {
            ServiceCart.map(serviceName => {
                let {name, id, price} = serviceName;
                if(props.id === id){
                    return <AddToCartService>
                        <p>{name}</p>
                        <p>{price}</p>
                    </AddToCartService>
                        
                }
            })
        }
    </ServiceCartWrapper>
}