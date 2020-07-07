import React, {useEffect} from "react";
import { PageWrapper, Content } from "../styles";
import Header from "./Header";
import { readCookie } from "../../util";
import { connect } from "react-redux";
import { fetchProfile } from "../../Component/Profile/Data/action";


function PageLayout(props) {
  
  useEffect(() => {
    const userId = readCookie("userUUId");
    if(userId){
      props.fetchProfile()
    }
  },[]);
  
  return (
    <PageWrapper className="container">
      <Header pageName = {props.pageName} backButton = {props.backButton} noborder = {props.noborder || false} />
      <Content>
        {props.children}
      </Content>
    </PageWrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    profile: state.profile
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProfile: () => {dispatch(fetchProfile())},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageLayout);


