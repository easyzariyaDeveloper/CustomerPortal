import React from "react";
import MenuBox from "./Menu/index";
import { ProfilePageWrapper } from "./styles";
import PageLayout from "../../Layout";
import MyProfile from "./MyProfile";
import MyCars from "./MyCar";
import AddressList from "./AddressList";
import OrderHistory from "./OrderHistory";
export default function index({ location }) {
  const params = location.pathname.split("/");
  const page = params.pop();
  const currentDisplay = () => {
    switch (page) {
      case "cars":
        return <MyCars />;
      case "addresses":
        return <AddressList />;
      case "orders":
        return <OrderHistory />;
      default:
        return  <MyProfile />;
    }
  };
  return (
    <PageLayout>
      <ProfilePageWrapper>
        <MenuBox active_page={location.pathname} />
        {currentDisplay()}
      </ProfilePageWrapper>
    </PageLayout>
  );
}
