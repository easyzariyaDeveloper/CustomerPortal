import React, { useState,useEffect } from "react";
import MobilePageLayout from "../../../../Layout/MobileView";
import { withRouter } from "react-router";
import { ImageSlideShow } from "./ImageSlideShow";
import { FeatureHeader, IndividualService, BottomDiv, AddServiceButton, TickImage, ServiceTimePara, TimeDurationWrapper } from "./style";
import TimerIcon from '@material-ui/icons/Timer';
import { connect } from "react-redux";
import { fetchPackageById, addSubPackage} from "../../Data/action";
import Tick from "../../../../Assets/img/gradient tick.jpg"
import { EZCard } from "../../../Common/MobileCard";



function ServiceDescription(props) {
    const { match: { params = {} } = {} } = props;
    console.log(params["mode"], params["packageCode"]);

    const serviceId = params["mode"];
    const codeId = params["packageCode"];
    const packageId = params["packageId"];

    useEffect(() => {
        props.fetchPackageById(params["packageId"]);
    }, []);


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

                            <AddServiceButton onClick={()=> {
                                props.addSubPackage(packageId,codeId)}}>Add</AddServiceButton>

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
        packages: state?.packages?.["packages"]
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPackageById: (packageId = "") => { dispatch(fetchPackageById(packageId)) },
        addSubPackage: (packageId = "",code ="") => { dispatch(addSubPackage(packageId,code))},
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServiceDescription));