import React, { useState } from "react";
import PageLayout from "../../Layout";
import { CartPageWrapper, CartHeader, Overlay} from "./style";
import Services from "./BuyServices/Services";
import { ServiceCart } from "./mockCartData";
// import Map from "./Map";


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
        {/* {
            overlayVisible ? <Overlay>
                <Map 
                    setVisibilityForOverlay = {setOverlayVisibility}
                    setAddress = {setAddress}
                    //google={props.google}
                    center={{lat: 12.9716, lng: 77.5946}}
                    height='400px'
                    width = '80%'
                    zoom={15}
                />
            </Overlay> : null
        } */}
    </PageLayout>
}