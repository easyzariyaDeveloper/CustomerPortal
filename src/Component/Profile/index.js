import React, { useState } from "react";
import MenuBox from "./Menu/index";
import { ProfilePageWrapper } from "./styles";
import PageLayout from "../../Layout";
import MyProfile from "./MyProfile";
import MyCars from "./MyCar";
import AddressList from "./AddressList";
import OrderHistory from "./OrderHistory";
export default function index({ location }) {
  const params = location.pathname.split("/");
  const [page, setPage] = useState(parseInt(params.pop()) || 1);
  const currentDisplay = () => {
    switch (page) {
      case 1:
        return <MyProfile />;
      case 2:
        return <MyCars />;
      case 3:
        return <AddressList />;
      case 4:
        return <OrderHistory />;
      default:
        return <h1>You reached wrong place</h1>;
    }
  };
  return (
    <PageLayout>
      <ProfilePageWrapper>
        <MenuBox active_page={page} onClick={(id) => setPage(id)} />
        {currentDisplay()}
      </ProfilePageWrapper>
    </PageLayout>
  );
}
