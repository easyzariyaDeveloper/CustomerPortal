import React from "react";
import {
  DetailsWrapper,
  PackName,
  Amount,
  ServiceTime,
  ListItem,
  AmountValue,
  ServiceTimeContent,
} from "./styles";

export default function Details({ data, service_map }) {
  const service_list = data.services
    ? data.services.map((service, key) => (
        <ListItem num={key + 1} key={service}>
          {service_map.find((serviceObj) => serviceObj.id === service).name}
        </ListItem>
      ))
    : "";
  return (
    <DetailsWrapper>
      <PackName>{data.name}</PackName>
      <Amount>
        {data.cost ? (
          <>
            <div>Rs</div> <AmountValue>{data.cost}</AmountValue>{" "}
          </>
        ) : (
          "Need Inspection for Quotation"
        )}
      </Amount>
      <ServiceTime>
        <ServiceTimeContent>
          {data.duration ? data.duration / 60 + " hours" : ""}
        </ServiceTimeContent>
        <ServiceTimeContent>
          {data.services ? data.services.length + " services" : " "}
        </ServiceTimeContent>
      </ServiceTime>
      {service_list}
    </DetailsWrapper>
  );
}
