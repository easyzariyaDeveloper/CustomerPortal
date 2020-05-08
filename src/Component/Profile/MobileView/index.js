import React, { useState } from "react";
import MobilePageLayout from "../../../Layout/MobileView";
import AddressList from "./AddressList";
import { Addresses } from "../MockData";
export default function Profile({ location }) {
  const [page, setPage] = useState(3);
  return (
    <MobilePageLayout>
      <AddressList Addresses={Addresses} />
    </MobilePageLayout>
  );
}
