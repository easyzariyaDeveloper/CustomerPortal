import React from 'react';
import {PageLink} from "./style";
import { ProfileButtonWrapper, ProfileActionButton, ProfileCard } from '../style';
import { withRouter } from 'react-router-dom';

function AddressList(props) {

  return <ProfileCard>
    <ProfileButtonWrapper>
      <ProfileActionButton>
        <PageLink href = "/address/add-address">
          Add Address
        </PageLink>
      </ProfileActionButton>
    </ProfileButtonWrapper>
  </ProfileCard>
}


export default withRouter(AddressList);




