import React from "react";
import MobilePageLayout from "../../../Layout/MobileView";
import { AccountBackgroundImg, AccountImgOverlay,MAccountWrapper, MAccountCard} from "./style";
import MSignUpTab from "./MSignUpTab";


export default function Account() {
    return<MobilePageLayout>
            <AccountBackgroundImg><AccountImgOverlay /></AccountBackgroundImg>
            <MSignUpTab />
            {/* <MAccountWrapper>
                <MAccountCard>
                    
                </MAccountCard>
        </MAccountWrapper> */}
    </MobilePageLayout>
}