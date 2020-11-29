import React, {useEffect} from "react";
import { PageWrapper, Content } from "../styles";
import Header from "./Header";
import { readCookie } from "../../util";
import { connect } from "react-redux";
import { fetchProfile } from "../../Component/Profile/Data/action";
import PageLoader from "./PageLoader";
import { fetchActiveCart, fetchCart } from "../../Component/Cart/Data/action";
import Alert from '@material-ui/lab/Alert';
import { logout } from "../../Component/SignUp/Data/action";



function PageLayout(props) {
  
  useEffect(() => {
    const userId = readCookie("userUUId");
    const isVerifiedUser = readCookie("isVerifiedUser") === "true";
    if(userId && isVerifiedUser){
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
        pageName = {props?.pageName?.toLowerCase()} 
        backButton = {props.backButton} 
        noborder = {props.noborder || false} 
        cart = {props?.cart?.["cart"]}
        logout = {props?.logout}
      />

      {props?.errorMessage && 
      <Alert variant="filled" severity="error">
        {props?.errorMessage}
      </Alert>
      }
      {props?.message && 
      <Alert variant="filled" severity="success">
        {props?.message}
      </Alert>
      }
      
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
    cart: state.cart,
    errorMessage: state.loading?.error?.message,
    message: state.loading?.message
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProfile: () => {dispatch(fetchProfile())},
    fetchActiveCart: () => {dispatch(fetchActiveCart())},
    fetchCart: () => {dispatch(fetchCart())},
    logout: () => {dispatch(logout())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageLayout);


