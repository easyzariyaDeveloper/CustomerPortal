import React, {useState} from "react";
import PageLayout from "../../Layout";
import { CartPageWrapper } from "./style";
import Services from "./BuyServices/Services";
import CartInput from "./CartInput";

export default function Cart (){
    const [activeState, setActiveState] = useState('EOR');

    return <PageLayout>
        <CartPageWrapper>
            <h1>Your Cart</h1>
            <Services id ={activeState}/>
            <CartInput />
        </CartPageWrapper>
    </PageLayout>
}