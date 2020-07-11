import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import MobilePageLayout from "../../../../Layout/MobileView";
import { MServiceListWrapper, ServiceListCard, ServiceListImages, PackageName, PackagesDetails, LeftDiv, RightDiv, ServiceListCardWrapper, CostPara, AddButton, ServiceMenu, ButtonDiv, TimerPara, TickImg, ServiceCount, ListImg} from "./style";
import { connect } from "react-redux";
import { fetchPackages, addSubPackage, removeSubPackage } from "../../Data/action";
import defaultImg from "../../../../Assets/img/gold.jpg";
import Tick from "../../../../Assets/img/gradient tick.jpg"
import Lists from "../../../../Assets/img/lists.jpg"
import TimerIcon from '@material-ui/icons/Timer';
import { makeStyles } from "@material-ui/core/styles";
import { base_spacing } from "../../../../Assets/style-var";


export const ObjectList = (array) => array.reduce((accumulator, service) => {
    const { name = "", id = "" } = service;
    accumulator = {
        ...accumulator,
        [id]: name
    };
    return accumulator;
}, {});


const useStyles = makeStyles(theme => ({
    formControl: {
        margin: `0px ${base_spacing }px ${base_spacing}px`,
        minWidth: 120,
        display: `flex`
    }
}));


function ServiceList(props) {
    const { match: { params = {} } = {} } = props;
    console.log(params["mode"], params["type"]);

    useEffect(() => {
        props.fetchPackages(props.selectedCarId);
    }, []);

    const [packageState, addPackage] = useState(null);
    const serviceId = params["mode"];
    const serviceKeyId = params["type"]

console.log(serviceId,serviceKeyId)
    if (serviceId) {

        return <MobilePageLayout>
            <MServiceListWrapper>
                {
                    props.packages[serviceId].map(pack => {
                        return pack.id == serviceKeyId ? pack.packages.map(subPacks => {
                            const { name, serviceTime, images, price, code, services } = subPacks;
                            return <ServiceListCard key = {code}>
                                <ServiceListCardWrapper href = {`/service-description/${serviceId}/${code}`}>
                                <LeftDiv>
                                    <ServiceListImages src={images ? images[0] : defaultImg} alt="image" />
                                    <CostPara>Rs.{price}</CostPara>
                                </LeftDiv>
                                <RightDiv>
                                    <PackagesDetails>
                                        <PackageName>{name}</PackageName>
                                        <TimerPara>
                                            <TimerIcon style = {{color: "#4B4B4B", fontSize:"12px", marginRight: "5px"}}/>
                                            {serviceTime > 0 ? serviceTime / 60 : 0}hour
                                        </TimerPara>

                                        
                                        <ServiceMenu>{services[0].name}<TickImg src= {Tick}/></ServiceMenu>
                                        <ServiceMenu>{services[1].name}<TickImg src= {Tick}/></ServiceMenu>
                                        <ServiceMenu>{services[2].name}<TickImg src= {Tick}/></ServiceMenu>
                                        {services.length - 3 > 0 ? <ServiceCount>+{services.length - 3} more services</ServiceCount> : ""}
                                    </PackagesDetails>
                                </RightDiv>

                                <ButtonDiv>
                                    <ListImg src =  {Lists} />
                                    {props.subPackages?<AddButton onClick={() => props.removeSubPackage()}>Remove</AddButton>:<AddButton onClick={() => props.addSubPackage({code},{name})}>ADD</AddButton>}
                                </ButtonDiv>
                                </ServiceListCardWrapper>
                            </ServiceListCard>
                        }) : null
                    })
                }
            </MServiceListWrapper>
        </MobilePageLayout>
    }

}



const mapStateToProps = (state) => {
    return {
        inProgress: state?.packages?.["inProgress"],
        packages: state?.packages?.["packages"],
        selectedCarId: state?.profile?.selectedCarId,
        subPackages: state?.subPackages?.subPackageLabel
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPackages: (carId = "") => { dispatch(fetchPackages(carId)) },
        addSubPackage: (code = "",subPackage ="") => { dispatch(addSubPackage(code,subPackage)) },
        removeSubPackage: () => { dispatch(removeSubPackage()) }

    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServiceList));
