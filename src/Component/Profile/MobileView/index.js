import React, { useState } from "react";
import MobilePageLayout from "../../../Layout/MobileView";
import AddressList from "./AddressList";
import CarList from "./CarList";
import MyProfile from "./MyProfile";
const pageRender = (page) => {
  switch (page) {
    case 1:
      return (
        <MobilePageLayout pageName="My Profile">
          <MyProfile />
        </MobilePageLayout>
      );
    case 2:
      return (
        <MobilePageLayout pageName="My Cars">
          <CarList />
        </MobilePageLayout>
      );
    case 3:
      return (
        <MobilePageLayout pageName="My Addresses">
          <AddressList />
        </MobilePageLayout>
      );
    default:
      return <MobilePageLayout pageName="profile"></MobilePageLayout>;
  }
};
export default function Profile({ location, history }) {
  const page_id = location.pathname.split("/")[2];
  // console.log(history);
  // if (!page_id) history.push("profile/1");
  const [page, setPage] = useState(parseInt(page_id));

  return pageRender(page);
}
