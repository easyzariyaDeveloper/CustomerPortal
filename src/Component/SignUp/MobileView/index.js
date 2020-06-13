import React, { useState } from "react";
import MobilePageLayout from "../../../Layout/MobileView";
import { AccountBackgroundImg, AccountImgOverlay,MAccountWrapper, MAccountCard, FbLoginButton, GoogleLoginButton, SocialButtonDiv } from "./style";
import MSignUpTab from "./MSignUpTab";
import Google from "../../../Assets/img/google.jpg";
import FacebookIcon from '@material-ui/icons/Facebook';

export default function Account() {
    return<MobilePageLayout>
            <AccountBackgroundImg><AccountImgOverlay /></AccountBackgroundImg>
            <MAccountWrapper>
                <MAccountCard>
                    <MSignUpTab />

                    <SocialButtonDiv>
                        <FbLoginButton><FacebookIcon style= {{verticalAlign: "middle", paddingRight: "10px", fontSize: "30px", paddingBottom: "2px"}}  />
                            Facebook
                        </FbLoginButton>
                        <GoogleLoginButton><img style= {{verticalAlign: "sub", paddingRight: "10px"}} src = {Google}/>
                            Google
                        </GoogleLoginButton>
                    </SocialButtonDiv>

                </MAccountCard>
        </MAccountWrapper>
    </MobilePageLayout>
}