import React from "react";
import MobilePageLayout from "../../../Layout/MobileView"
import { ImageMWrapper, MAddCarPageWrapper, MCarCard, ConfirmButton, LogoImg, ColorMPallete, ColorSpan, CarImg } from "./style";
import { Brands, Car } from "../mockData";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";



const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 230
    }
}));

export default function AddCar() {
    const classes = useStyles();
    const [vehicle, setVehicle] = React.useState({
        brand: "",
        model:"",
        type:"",
        fuelType: "",
        carColor:""
    });
    

    const handleChange = (prop) => (event) => {
        setVehicle({ ...vehicle, [prop]: event.target.value });
    };

    console.log(vehicle.carColor)
// vehicle.brand!=="" && vehicle.model!=="" ? (Car[vehicle.brand].map(modelVariant=> {
//     return vehicle.model==modelVariant.id ? <LogoImg src = {modelVariant.colorvariant[2].url}/>:null
// })):null


// vehicle.brand !==""?(Brands.map(carBrand=>{
//     return carBrand.id == vehicle.brand ? <LogoImg src = {carBrand.logo}/> : null
//    })): null


// vehicle.model==modelVariant.id && vehicle.carColor == modelVariant[colorvariant.id]?
//                      <LogoImg src = {modelVariant[colorvariant.url]}/>:null

    return <MobilePageLayout pageName="Select Your Car">
        <MAddCarPageWrapper>
            <ImageMWrapper>
               {
                   vehicle.brand !=="" && vehicle.model == ""?(Brands.map(carBrand=>{
                    return carBrand.id == vehicle.brand ? <LogoImg src = {carBrand.logo}/> : null
                   })): vehicle.brand!=="" && vehicle.model!=="" ? (Car[vehicle.brand].map(modelVariant=> {
                    return vehicle.model == modelVariant.id ? modelVariant.colorvariant.map(carColorOject => {
                        return carColorOject.id == vehicle.carColor? <CarImg src = {carColorOject.url}/>: 
                        null
                    } ):null
                })):null
               }
            </ImageMWrapper>

            <div style ={{width: "80%", margin: "0 auto"}}>
            <MCarCard>
                <ColorMPallete>
                   {
                       vehicle.model!==""? Car[vehicle.brand].map(carBrand => {
                        return carBrand.id == vehicle.model ? carBrand.colorvariant.map(carColor =>{
                            return <ColorSpan color = {carColor.id} onClick = {()=> setVehicle({...vehicle,carColor: carColor.id})} />
                        }) :null
                    }):null
                   } 
                </ColorMPallete>

                <FormControl className={classes.formControl} >
                    <InputLabel id="demo-simple-select-label">Select Brand</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={vehicle.brand}
                        onChange={handleChange('brand')}
                        autoWidth
                    >   
                    {Brands.map((carBrand) =>{
                        return <MenuItem value = {carBrand.id}>{carBrand.name}</MenuItem>
                    })}
                    </Select>
                </FormControl>

                <FormControl className={classes.formControl} disabled = {vehicle.brand==""}>
                    <InputLabel id="demo-simple-select-label">Select Model</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={vehicle.model}
                        onChange={handleChange('model')}
                        autoWidth
                    >   
                    {vehicle.brand!==""? Car[vehicle.brand].map(modelVariant=>{
                        return <MenuItem value = {modelVariant.id}>{modelVariant.modelname}</MenuItem>  
                    })
                    : undefined}
                    </Select>
                </FormControl>

                <FormControl className={classes.formControl} disabled = {vehicle.model==""}>
                    <InputLabel id="demo-simple-select-label">Select Type</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={vehicle.type}
                        onChange={handleChange('type')}
                        autoWidth
                    >
                        {
                            vehicle.model!==""? Car[vehicle.brand].map(carType=>{
                                return carType.id == vehicle.model ? carType.fuelvariant.map(type => {
                                    return <MenuItem value = {type.id}>{type.name}</MenuItem> }):null
                                
                            }):undefined
                        }
                    </Select>
                </FormControl>

                <FormControl className={classes.formControl} disabled = {vehicle.type==""}>
                    <InputLabel id="demo-simple-select-label">Select Fuel Type</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={vehicle.fuelType}
                        onChange={handleChange('fuelType')}
                        autoWidth
                    >   
                    {
                        vehicle.type!==""? Car[vehicle.brand].map(carType=>{
                            return carType.id == vehicle.model ? carType.variant[vehicle.type].map(variantElement=>{
                                return <MenuItem value = {variantElement}>{variantElement}</MenuItem>
                            }) :null
                            
                        }):undefined
                    }
                    </Select>
                </FormControl>

                <ConfirmButton disabled = {vehicle.fuelType==""}>Confirm</ConfirmButton>
            </MCarCard>
            </div>
        </MAddCarPageWrapper>
    </MobilePageLayout>
}








