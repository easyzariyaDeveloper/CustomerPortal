import React from "react";
import TabularData from "./TabularData";
import CardData from "./CardData";

export const Tabs = [{
    label : "General Services",
    id : "general",
    Component: TabularData
},{
    label: "AC & Electrical",
    id: "acAndElectrical",
    Component: CardData
},{
    label: "Car Care",
    id: "carCare",
    Component: TabularData
}];

export const Packages = {
   general : {
       titanium: {
            name: "Titanium Pack",
            cost: 3299,
            duration: 360,
            id: "titanium",
            services: ["EOR", "OFR", "FFC", "AFR", "CEWC", "RBPS", "FBPS", "CC", "BWT"]
       },
       gold: {
           name: "Gold Pack",
           cost: 2499,
           duration: 240,
           id: "gold",
           services: ["EOR", "OFR", "FFC", "AFR", "CEWC", "RBPS"]
       },
       silver: {
            name: "Silver Pack",
            cost: 1599,
            duration: 180,
            id: "silver",
            services: ["EOR", "OFR", "FFC", "AFR", "CC"]
        },
        bronze: {
            name: "Bronze Pack",
            cost: 899,
            duration: 120,
            id: "bronze",
            services: ["EOR", "OFR", "FFC"]
        }
   },
   carCare: {
        interior: {
            name: "Deep Interior",
            cost: 999,
            duration: 180,
            id: "interior",
            services: ["IV", "UCP", "SR", "OR", "FSOC"]
       },
       polishing: {
            name: "buffing and polishing",
            cost: 699,
            duration: 120,
            id: "polishing",
            services: ["IV","UCP", "SR","PCR"]
       },
       teflon: {
            name: "Teflon Coating",
            cost:299,
            duration: 90,
            id: "teflon",
            services: ["IV","UCP", "SR"]
        },
        waxing: {
            name: "Car Waxing",
            cost: 199,
            duration: 60,
            id: "teflon",
            services: ["UCP"]
        }
   },
   acAndElectrical: {
       fullService: {
           name: "Full AC Services",
           cost: 3499,
           duration: 240,
           id: "full",
           services: ["AGF", "CCC", "COT", "CC", "AI"]
       },
       generalAcService: {
            name: "General AC Services",
            cost: 1150,
            duration: 180,
            id: "general",
            services: ["AGF", "CCC", "COT"]
        },
        electrical: {
            name: "General Electrical Services",
            cost: 1150,
            duration: 240,
            id: "generalElectrical",
            services: ["FWC", "WR", "HTBR"]
        },
        dentReplacement: {
            name: "Denting & Replacement",
            id: "generalElectrical",
        },
        batteryReplacement: {
            name: "Battery Replacement",
            id: "batteryReplacement",
        },
   }
}

export const GeneralServices = [{
    name: "Engine Oil Replacement",
    id: "EOR"
},{
    name: "Oil Filter Replacement",
    id: "OFR"
},{
    name: "Air Filter Replacement",
    id: "AFR"
},{
    name: "Fuel Filter Checking",
    id: "FFC"
},{
    name: "Car Electrical Wiring Checking",
    id: "CEWC"
},{
    name: "Rear Break Pads Servicing",
    id: "RBPS"
},{
    name: "Front Break Pads Servicing",
    id: "FBPS"
},{
    name: "Car Cleaning",
    id: "CC"
},{
    name: "Battery Water Topup",
    id: "BWT"
}];

export const CarCareServices = [{
    name: "Interior Vaccuming",
    id: "IV"
},{
    name: "Upholestry Cleaning and Polishing",
    id: "UCP"
},{
    name: "Stain Removal",
    id: "SR"
},{
    name: "Odor Removal",
    id: "OR"
},{
    name: "Minor Scratch Removal",
    id: "MSR"
},{
    name: "Pre Coating & Rubbing ",
    id: "PCR"
},{
    name: "Full Sanitization Of Car",
    id: "FSOC"
}];


export const ElectricalServices = [{
    name: "AC Gas Filling",
    id: "AGF"
},{
    name: "Cool Coil Cleaning",
    id: "CCC"
},{
    name: "Compressor Oil Topup",
    id: "COT"
},{
    name: "Condenser Cleaning",
    id: "CC"
},{
    name: "AC Inspection",
    id: "AI"
},{
    name: "Filter Vent and Cleaning",
    id: "FVC"
},{
    name: "Full Wire Check (for rat entry)",
    id: "FWC"
},{
    name: "Wire Repair",
    id: "WR"
},{
    name: "Headlight and Taillight Blub Replacement",
    id: "HTBR"
}]
