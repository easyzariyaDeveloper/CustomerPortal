import React from 'react';
import { Packages } from "./mockServiceData";
import { ServiceName, ServiceInfo, ServiceCostInTable, ServiceDurationInTable } from "./styles";


export function formatPackageResponse(response = []) {
    const formattedResponse = {
        "autoCare": [],
        "doorStep": []
    }
    if (response.length > 0) {
        response.forEach((servicePackage = {}) => {
            if (servicePackage["serviceableAtHome"]) {
                formattedResponse["doorStep"] = [...formattedResponse["doorStep"], getPackageInfo(servicePackage)];
            } else {
                formattedResponse["autoCare"] = [...formattedResponse["autoCare"], getPackageInfo(servicePackage)]
            }
        })
    }
    return formattedResponse;
}

function getPackageInfo(servicePackage = {}) {
    const packageData = {
        id: servicePackage["id"],
        images: servicePackage["images"] || [],
        label: servicePackage["packageName"],
        code: servicePackage["code"],
        desc: servicePackage["desc"] || "",
        serviceMap: (servicePackage["services"] || []).reduce((accumulator, currentService) => {
            const { id = "" } = currentService;
            if (id) {
                accumulator = {
                    ...accumulator,
                    [id]: currentService
                }
            }
            return accumulator
        }, {})

    };

    return {
        ...packageData,
        packages: (servicePackage["subPackages"] || []).reduce((accumulator, subPackageData = {}) => {
            const { name = "", serviceTime = 0,
                images = [], price = "",
                code = "", customInfo = [],
                serviceIds = []
            } = subPackageData;
            accumulator = [
                ...accumulator,
                {
                    name, 
                    serviceTime,
                    images,
                    price,
                    code,
                    services : serviceIds.map((id) => packageData["serviceMap"][id] || {})
                }
            ]
            return accumulator;
        }, [])
    }
}







export function formatHeaderData(activeId){
    let servicePackageObj = Packages[activeId];  
    const serviceDataList = Object.values(servicePackageObj);
    const headerContent = [];
    headerContent.push(<ServiceName> Services </ServiceName>);
    serviceDataList.forEach(({name, id}) => headerContent.push(<ServiceName key = {id}> {name}</ServiceName>));        
    return headerContent;   
}

export function formatBodyData(id, servicesArray){
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
        subHeader.push(<ServiceInfo>
            <ServiceCostInTable>
                Rs. {packageInfo["cost"]}
            </ServiceCostInTable>
            <ServiceDurationInTable>
                Time: {packageInfo["duration"] / 60} hours 
            </ServiceDurationInTable>
        </ServiceInfo>);
        
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






