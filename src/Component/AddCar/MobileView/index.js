import React,{useEffect} from "react";
import MobilePageLayout from "../../../Layout/MobileView"
import { ImageMWrapper, MAddCarPageWrapper, MCarCard, ConfirmButton, LogoImg, ColorMPallete, ColorSpan, CarImg } from "./style";
import { Brands, Car } from "../mockData";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { fetchBrandForCars,fetchCarListByBrand } from "../Data/action";
import { connect } from "react-redux";


const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 230
    }
}));

function AddCar(props) {
    const classes = useStyles();
    const [vehicle, setVehicle] = React.useState({
        brand: "",
        model:"",
        type:"",
        fuelType: "",
        carColor:""
    });

    useEffect(() => {
        props.fetchBrandForCars();
    }, []);
    

    const handleChange = (prop) => (event) => {
        setVehicle({ ...vehicle, [prop]: event.target.value });
    };

    console.log(vehicle.carColor)


    return <MobilePageLayout pageName="Select Your Car">
        <MAddCarPageWrapper>
            <ImageMWrapper>
               {/* {
                   vehicle.brand !=="" && vehicle.model == ""?(Brands.map(carBrand=>{
                    return carBrand.id == vehicle.brand ? <LogoImg src = {carBrand.logo}/> : null
                   })): vehicle.brand!=="" && vehicle.model!=="" ? (Car[vehicle.brand].map(modelVariant=> {
                    return vehicle.model == modelVariant.id ? modelVariant.colorvariant.map(carColorOject => {
                        return carColorOject.id == vehicle.carColor? <CarImg src = {carColorOject.url}/>: 
                        null
                    } ):null
                })):null
               } */}
            </ImageMWrapper>

            <div style ={{width: "80%", margin: "0 auto"}}>
            <MCarCard>
                {/* <ColorMPallete>
                   {
                       vehicle.model!==""? Car[vehicle.brand].map(carBrand => {
                        return carBrand.id == vehicle.model ? carBrand.colorvariant.map(carColor =>{
                            return <ColorSpan color = {carColor.id} onClick = {()=> setVehicle({...vehicle,carColor: carColor.id})} />
                        }) :null
                    }):null
                   } 
                </ColorMPallete> */}

                <FormControl className={classes.formControl} >
                    <InputLabel id="demo-simple-select-label">Select Brand</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={vehicle.brand}
                        onChange={(event) => {
                            setVehicle({...vehicle,brand: event.target.value});
                            props.fetchCarListByBrand(event.target.value)
                        }}
                        autoWidth
                    >   
                    {props.brands? props.brands.map((carBrand) =>{
                        return <MenuItem value = {carBrand}>{carBrand}</MenuItem>
                    }) :null}
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
                    {vehicle.brand !=="" && props.models ? props.models.map(modelVariant=>{
                        return <MenuItem value = {modelVariant.id}>{modelVariant.model}</MenuItem>  
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
                        {/* {
                            vehicle.model!=="" && props.models ? Car[vehicle.brand].map(carType=>{
                                return carType.id == vehicle.model ? carType.fuelvariant.map(type => {
                                    return <MenuItem value = {type.id}>{type.name}</MenuItem> }):null
                                
                            }):undefined
                        } */}
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
                        vehicle.model!=="" && props.models? props.model.map(carType=>{
                            return carType.id == vehicle.model ? carType.variants.map(variantElement=>{
                                return <MenuItem value = {variantElement.id}>{variantElement.fuelType}</MenuItem>
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


const mapStateToProps = (state) => {
    return {
        brands: state?.brands?.brands,
        models: state?.cars?.carModel
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBrandForCars: () => { dispatch(fetchBrandForCars()) },
        fetchCarListByBrand: (brand ="") =>{dispatch(fetchCarListByBrand(brand))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCar);



