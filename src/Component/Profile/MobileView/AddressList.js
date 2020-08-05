import React, { useState } from 'react';
import { ProfileButtonWrapper, ProfileActionButton, ProfileCard, PageLink, AddressLine, AddressLineWrapper, KebabMenuCard, KebabMenuButton, AddressIcon, AddressLabel, AddressLabelWrapper } from './style';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { fetchProfile, deleteAddress } from '../Data/action';

function AddressList(props) {

  const [indexForActionButton, SetIndexForActionButton] = useState(-1);

  function setActiveActionCard(index){
    SetIndexForActionButton(indexForActionButton === index ? -1 : index)
  }


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
    props?.profile?.addressList? props?.profile?.addressList?.map((address,index) =>{
      return <ProfileCard>
          {
            <AddressLineWrapper>
              <MoreVertIcon style={{float:"right"}} onClick = {setActiveActionCard.bind(null, index)}/>

              {
                index === indexForActionButton ? <KebabMenuCard>
                    <KebabMenuButton
                      children = "Edit"
                      onClick = {() => {
                        location.href = `/address/edit-address?addressId=${address["addressId"]}&redirect=/profile/address`
                      }}
                    />

                    <KebabMenuButton 
                      onClick = {()=> {
                        props?.deleteAddress(address["addressId"]);
                        props?.fetchProfile()
                      }}
                      children = "Delete"
                    />
                  </KebabMenuCard> : null
              }
              {
                <div>
                  <AddressLabelWrapper>
                    <AddressIcon className = {`icon-${address?.addressLabel}`}/>
                    <AddressLabel
                      children = {address?.addressLabel === "home" ? "Home" : (address?.addressLabel === "office" ? "Office" : "Other")}
                    />
                  </AddressLabelWrapper>
                  <AddressLine>{address.firstLine}, {address.secondLine}</AddressLine>
                  {
                    address.landmark && <>
                      <p style = {{display:"inline-block", fontWeight: "300"}}>Landmark : </p> 
                      <AddressLine>&nbsp; {address.landmark}</AddressLine>
                    </>
                  }
                </div>
              }
            </AddressLineWrapper>
          }
      </ProfileCard>
    }) : null
  }


</div>
}

const mapStateToProps = (state) => {
  return {
    profile: state.profile
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    deleteAddress: (addressId ="") =>{dispatch(deleteAddress(addressId))},
    fetchProfile: () => {dispatch(fetchProfile())},
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddressList));




