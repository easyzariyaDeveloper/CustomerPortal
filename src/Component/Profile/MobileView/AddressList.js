import React from 'react';
import { ProfileButtonWrapper, ProfileActionButton, ProfileCard, PageLink, AddressLine, AddressLineWrapper } from './style';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";

function AddressList(props) {

  return <div>
  <ProfileCard>
    <ProfileButtonWrapper>
      <ProfileActionButton>
        <PageLink href = "/address/add-address">
          Add Address
        </PageLink>
      </ProfileActionButton>
    </ProfileButtonWrapper>
  </ProfileCard>
  {
    props?.profile?.addressList.map(address =>{
      return <ProfileCard>
          {
            <AddressLineWrapper>
              Flat/House No:<AddressLine>{address.firstLine}</AddressLine>
              Address: <AddressLine>{address.secondLine}</AddressLine>
              Landmark: <AddressLine>{address.landmark}</AddressLine>
            </AddressLineWrapper>
          }
      </ProfileCard>
    })
  }


</div>
}

const mapStateToProps = (state) => {
  return {
    profile: state.profile
  }
}


export default withRouter(connect(mapStateToProps, null)(AddressList));




