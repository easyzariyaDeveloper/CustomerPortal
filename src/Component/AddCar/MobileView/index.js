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
import { base_spacing } from "../../../Assets/style-var";


const useStyles = makeStyles(theme => ({
    formControl: {
        margin: `${base_spacing * 1.5}px ${base_spacing}px`,
        minWidth: 230,
        display: `flex`
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

    return <MobilePageLayout pageName="Select Your Car">
        <MAddCarPageWrapper>
            <ImageMWrapper>
                {fetchBannerImage(vehicle)}
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
                        return <MenuItem value = {carBrand} key = {carBrand}>{carBrand}</MenuItem>
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
                        return <MenuItem 
                            value = {modelVariant.id}
                            key = {modelVariant.id}
                            >
                                {modelVariant.model}
                            </MenuItem>  
                    })
                    : undefined}
                    </Select>
                </FormControl>
                
                <FormControl className={classes.formControl} disabled = {vehicle.model == ""}>
                    <InputLabel id="demo-simple-select-label">Select Fuel Type</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={vehicle.fuelType}
                        onChange={handleChange('fuelType')}
                        autoWidth
                    >   
                    {
                        vehicle.model!=="" && props.models ? props.models.map(carType => {
                            return carType.id == vehicle.model ? carType.variants.map(variantElement=>{
                                return <MenuItem 
                                    value = {variantElement.id}
                                    key = {variantElement.id}
                                    >
                                        {variantElement.fuelType}
                                    </MenuItem>
                            }) :null
                        }):undefined
                    }
                    </Select>
                </FormControl>


                <FormControl className={classes.formControl} disabled ={vehicle.model == ""}>
                    <InputLabel id="demo-simple-select-label">Select Type</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={vehicle.type}
                        onChange={handleChange('type')}
                        autoWidth
                    >
                        {
                            vehicle.fuelType!=="" && props.models ? props.models.map(carType=>{
                                return carType.id == vehicle.model ? carType.variants.map(variantElement => {
                                    return variantElement.id == vehicle.fuelType  ?  variantElement.subCategory.map(type=> {
                                    return <MenuItem value = {type}>{type}</MenuItem> }):null
                            }):null
                        }):undefined
                    }
                    </Select>
                </FormControl>
                
                <ConfirmButton disabled = {!vehicle["brand"] || !vehicle["model"] || !vehicle["fuelType"] || !vehicle["type"]}
                onClick = {() => {
                    console.log(vehicle);
                }}> Confirm </ConfirmButton>
            </MCarCard>
            </div>
        </MAddCarPageWrapper>
    </MobilePageLayout>
}

function fetchBannerImage(vehicle){
    if(vehicle["brand"] !== "" && vehicle["model"] != "" && vehicle?.selectedCarByColourImage){
        return <CarImg src =  { vehicle["selectedCarByColourImage"]} />;
    } else if(vehicle["brand"] !== "" && vehicle["model"] != "" && vehicle?.selectedCarModelImage){
        return <CarImg src =  {vehicle["selectedCarModelImage"]} />;
    } else if(vehicle["brand"]  != "" && vehicle?.selectedBrandImage){
        return <LogoImg src = {vehicle["selectedBrandImage"]} />;
    } else {
        return null;
    }
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



