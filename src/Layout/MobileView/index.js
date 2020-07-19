import React, {useEffect} from "react";
import { PageWrapper, Content } from "../styles";
import Header from "./Header";
import { readCookie } from "../../util";
import { connect } from "react-redux";
import { fetchProfile } from "../../Component/Profile/Data/action";
import PageLoader from "./PageLoader";
import { fetchActiveCart, fetchCart } from "../../Component/Cart/Data/action";



function PageLayout(props) {
  
  useEffect(() => {
    const userId = readCookie("userUUId");
    if(userId){
      props.fetchProfile();
      props.fetchActiveCart();
    }
  },[]);

  useEffect(() => {
    if(props?.cart?.hasActiveCart){
      props.fetchCart();
    }
  }, [props?.cart?.hasActiveCart])
  
  return (
    <PageWrapper className="container">
      <Header 
        pageName = {props.pageName} 
        backButton = {props.backButton} 
        noborder = {props.noborder || false} 
        cart = {props?.cart?.["cart"]}
      />
      <Content>
        {props.children}
      </Content>
      {props?.loading?.["loadingInProgress"] && <PageLoader />}
    </PageWrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    profile: state.profile,
    loading: state.loading,
    cart: state.cart
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProfile: () => {dispatch(fetchProfile())},
    fetchActiveCart: () => {dispatch(fetchActiveCart())},
    fetchCart: () => {dispatch(fetchCart())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageLayout);


