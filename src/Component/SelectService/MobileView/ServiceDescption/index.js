import React, { useState,useEffect } from "react";
import MobilePageLayout from "../../../../Layout/MobileView";
import { withRouter } from "react-router";
import { ImageSlideShow } from "./ImageSlideShow";
import { FeatureHeader, IndividualService, BottomDiv, AddServiceButton, TickImage, ServiceTimePara, TimeDurationWrapper } from "./style";
import TimerIcon from '@material-ui/icons/Timer';
import { connect } from "react-redux";
import { fetchPackages} from "../../Data/action";
import Tick from "../../../../Assets/img/gradient tick.jpg"
import { EZCard } from "../../../Common/MobileCard";



function ServiceDescription(props) {
    const { match: { params = {} } = {} } = props;
    console.log(params["mode"], params["type"]);

    const serviceId = params["mode"];
    const codeId = params["type"];

    useEffect(() => {
        props.fetchPackages();
    }, []);


   // const packSelected = pack == "general" ? GeneralServices : pack == "acAndElectrical" ? ElectricalServices : CarCareServices;

    if (serviceId) {
        return <MobilePageLayout>
        { props.packages[serviceId].map(pack => {
            return pack.packages.map(subPack => {
                return subPack.code == codeId ? (<div>
                    <ImageSlideShow price={subPack.price} name={subPack.name} />
                    <EZCard>
                        <FeatureHeader>What is included?</FeatureHeader>

                            {
                                subPack.services.map(seviceId => {
                                    return <IndividualService><TickImage src = {Tick}/> {seviceId.name}</IndividualService>
                                })
                            }
                    </EZCard>

                        <BottomDiv>
                            <TimeDurationWrapper>
                                <TimerIcon style={{ color: "white", fontSize: "25px", verticalAlign: "bottom" }} />
                                <ServiceTimePara>{subPack.serviceTime > 0 ? subPack.serviceTime / 60 : 0}hour</ServiceTimePara>
                            </TimeDurationWrapper>

                            <AddServiceButton>Add</AddServiceButton>

                        </BottomDiv>
                        </div> ):null   
            })
            })}
            </MobilePageLayout>
    }
}


const mapStateToProps = (state) => {
    return {
        inProgress: state?.packages?.["inProgress"],
        packages: state?.packages?.["packages"],
        selectedCarId: state?.profile?.selectedCarId,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPackages: (carId = "") => { dispatch(fetchPackages(carId)) },
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServiceDescription));