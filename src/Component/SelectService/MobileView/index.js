import React, { useState } from "react";
import { OptionsWrapper, Select, SelectServicePageWrapper } from "./styles";
import MobilePageLayout from "../../../Layout/MobileView";
import {
  Tabs,
  Packages,
  GeneralServices,
  CarCareServices,
  ElectricalServices,
} from "../mockData";
import Details from "./DetailsWrapper";
import ActionButton from "../../Common/ActionButton";

export default function Services() {
  const tabsopt1 = Tabs.map((tab) => (
    <option key={tab.id} value={tab.id}>
      {tab.label}
    </option>
  ));

  const [option1, setOption1] = useState(Tabs[0].id);
  const packs = Object.keys(Packages[option1]);
  const [option2, setOption2] = useState(Packages[option1][packs[0]].id);
  const data = Packages[option1][option2] || Packages[option1][packs[0]];
  const onTabsChange = ({ target }) => {
    const value = target.value;
    setOption1(value);
    const packs = Object.keys(Packages[value]);
    setOption2(Packages[value][packs[0]].id);
  };

  const tabsopt2 = packs.map((pack) => (
    <option key={pack} value={pack}>
      {Packages[option1][pack].name}
    </option>
  ));

  return (
    <MobilePageLayout>
      <SelectServicePageWrapper>
        <OptionsWrapper>
          <Select className="box" onChange={onTabsChange} value={option1}>
            {tabsopt1}
          </Select>
          <Select
            className="box"
            value={option2}
            onChange={({ target }) => {
              setOption2(target.value);
            }}
          >
            {tabsopt2}
          </Select>
        </OptionsWrapper>
        <Details
          data={data}
          service_map={
            option1 === Tabs[0].id
              ? GeneralServices
              : option1 === Tabs[2].id
              ? CarCareServices
              : ElectricalServices
          }
        ></Details>
        <ActionButton
          onClick={() => {
            alert("added to cart");
          }}
          label={"ADD TO CART"}
        />
      </SelectServicePageWrapper>
    </MobilePageLayout>
  );
}
