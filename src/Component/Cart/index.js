import React, { useState } from "react";
import PageLayout from "../../Layout";
import { CartPageWrapper, CartHeader, Overlay} from "./style";
import Services from "./BuyServices/Services";
import { ServiceCart } from "./mockCartData";
import SelectAddress from "./SelectAddress";

export default function Cart() {
    const [serviceList, setServiceList] = useState(ServiceCart);
    const [overlayVisible, setOverlayVisibility] = useState(false);
    const [address, setAddress] = useState({});

    
    const deleteItem = (id) => {
        const filteredServiceList = serviceList.filter((service) => service["id"] != id);
        setServiceList(filteredServiceList);
    }

    return <PageLayout>
        <CartPageWrapper>
            <CartHeader>Your Cart</CartHeader>
            <Services 
                ServiceList={serviceList} 
                deleteItem = {deleteItem}
                setVisibilityForOverlay = {setOverlayVisibility}
                address= {address}
            />
        </CartPageWrapper>
        {
            overlayVisible ? <Overlay>
                <SelectAddress 
                    setVisibilityForOverlay = {setOverlayVisibility}
                    setAddress = {setAddress}
                />
            </Overlay> : null
        }
    </PageLayout>
}