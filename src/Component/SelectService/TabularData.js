import React from "react";
import { Packages, GeneralServices, CarCareServices } from "./mockData";
import Table from "../Common/Table";


export default function TabularData(props){
    const {activeId} = props;
    
        function formatHeaderData(id){
            let servicePackageObj = Packages[id];  
            const serviceDataList = Object.values(servicePackageObj);
            const headerContent = [];
            headerContent.push(<div> Services </div>);
            serviceDataList.forEach(({name, id}) => headerContent.push(<div key = {id}> {name}</div>));        
            return headerContent;   
        }

        function formatBodyData(id, servicesArray){
            // let packid=Packages[id];  
            // const idArray = Object.keys(packid);
            // const costArray = idArray.map(el => {
            //     return Packages.general[el].cost;
            // });
            // const durationArray = idArray.map(el => {
            //     return Packages.general[el].duration;
            // });


            // const serviceObject = servicesArray.reduce((accumlator, el) =>{
            //     let i = el["name"];
            //     let k = el["id"];
            //     accumlator = {
            //         ...accumlator,
            //         [k]: i
            //     }
            //    return accumlator;
            // },{});

            // console.log(serviceObject);
            // const arrayService = idArray.map(el =>{
            //     return Packages.general[el].services;
            // })
            // console.log(arrayService);

            // const serviceIdArray = arrayService.map(el =>{
            //     console.log(el);
            //     if(serviceObject.hasOwnProperty("el")){
            //         let i = serviceObject["el"];
            //         return i;
            //     }
            // })
            // console.log(serviceIdArray);
            const servicesObject = servicesArray.reduce((accumlator, serviceItem) => {
                const {name = "", id = ""} = serviceItem;
                accumlator = {
                    ...accumlator,
                    [id]: name
                };
                return accumlator;
            }, {});

            const packageInfo = Object.entries(Packages[id]);
            console.log(packageInfo);
            const packageGrouped = packageInfo.map((packageItem) =>{
                const [id, {name, cost, duration, services}] = packageItem;
                 return {
                     [id]: {
                         name,
                         cost,
                         duration,
                         services
                     }
                }
            });
            console.log(packageGrouped);
            const subHeader = [], servicesToPackageMap = {};
            subHeader.push("Cost and Time");

            packageGrouped.forEach((servicePacakges) => {
                let [packageId, packageInfo] = Object.entries(servicePacakges)[0];
                //packageInfo["servicesName"] = [];
                subHeader.push(<>
                    <p>
                        Rs. {packageInfo["cost"]}
                    </p>
                    <p>
                        Time: {packageInfo["duration"] / 60} hours 
                    </p>
                </>);
                
                packageInfo["services"].forEach((serviceCode) => {
                    const serviceName = servicesObject[serviceCode];
                    if(serviceName){
                        servicesToPackageMap[serviceName] = servicesToPackageMap[serviceName] ? servicesToPackageMap[serviceName] : [];
                        servicesToPackageMap[serviceName].push(packageId);
                        //packageInfo["servicesName"].push(serviceName);
                    }
                });
            });
            const response = [];
            response.push(subHeader);
            for(const[key, value] of Object.entries(servicesToPackageMap)){
                const rowItem = [];
                rowItem.push(key);
                
                if(value.includes("titanium") || value.includes("interior")){
                    rowItem[1] = "Y";
                } else {
                    rowItem[1] = "N";
                }

                if(value.includes("gold") || value.includes("polishing")){
                    rowItem[2] = "Y";
                } else {
                    rowItem[2] = "N";
                }

                if(value.includes("silver") || value.includes("teflon")){
                    rowItem[3] = "Y";
                } else {
                    rowItem[3] = "N";
                }

                if(value.includes("bronze") || value.includes("waxing")){
                    rowItem[4] = "Y";
                } else {
                    rowItem[4] = "N";
                }
                response.push(rowItem);
            }
            //console.log(response);
            return response;
        }
    
     if(activeId){
        const servicesArray = activeId == "general" ? GeneralServices : CarCareServices;
        const bodyContent = formatBodyData(activeId, servicesArray);
        const headerContent = formatHeaderData(activeId)
        return <Table
            header = {headerContent}
            body = {bodyContent}
        />
     }

    
    

    
}