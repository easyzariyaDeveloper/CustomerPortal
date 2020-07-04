import React from 'react';
import {PageLink} from "./style";
import { ProfileButtonWrapper, ProfileActionButton } from '../style';

export default function AddressList(props) {
  return <>
    <ProfileButtonWrapper>
      <ProfileActionButton>
        <PageLink href = "/address/add-address">
          Add Address
        </PageLink>
      </ProfileActionButton>
    </ProfileButtonWrapper>
  </>
}




