import React,{useEffect, useRef} from "react";
import MobilePageLayout from "../../../Layout/MobileView"
import { ImageMWrapper, MAddCarPageWrapper, MCarCard, ConfirmButton, LogoImg, ColorMPallete, ColorSpan, CarImg } from "./style";
import clsx from 'clsx';
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { fetchBrandForCars,fetchCarListByBrand, addCar, getCarById } from "../Data/action";
import { connect } from "react-redux";
import { base_spacing } from "../../../Assets/style-var";
import CircularProgress from '@material-ui/core/CircularProgress';
import OutlinedInput from "@material-ui/core/OutlinedInput";
import{useStyles} from "../../../Assets/common-styled";


const useStylesForDropDown = makeStyles(theme => ({
    formControl: {
        margin: `${base_spacing * 1.5}px ${base_spacing*3}px`,
        minWidth: 230,
        display: `flex`
    }
}));

function AddCar(props) {
    const classes = useStylesForDropDown();
    const classForText = useStyles();
    const preSelectCarId = useRef(new URLSearchParams(window.location.search).get("carId"));

    const [vehicle, setVehicle] = React.useState({
        brand: "",
        model:"",
        carName:"",
        type:"",
        fuelVariantId: "",
        fuelType: "",
        carColor:"",
        registration:"",
        makeYear:"",
    });
    // const enableAddCarForProfile = useRef(props?.location?.search.includes("referral=profile"));
    const enableAddCarForProfile = true;

    function addCar (){
        const carDetails = {
            "carId": vehicle?.model,
            "carName":vehicle?.carName,
            "color":vehicle?.carColor,
            "fuelVariantId": vehicle?.fuelVariantId,
            "variantName" : vehicle?.fuelType,
            
            // "variantName":vehicle?.type,
            // "registration":vehicle?.registration,
            // "makeYear":vehicle?.makeYear,
        };
        props.addCar(carDetails, () => {
            const redirectURL = new URLSearchParams(window.location.search).get("redirect");
            if(redirectURL){
                window.location.href = redirectURL;
            }
        });
    }

    useEffect(() => {
        if(preSelectCarId.current) {
            props.getCarById(preSelectCarId.current, (vehicleData) => {
                setVehicle({
                    brand: vehicleData?.brand,
                    model: vehicleData?.id,
                    carName: vehicleData?.model,
                    colorPalletes: vehicleData?.colours
                });
            });
        } else {
            props.fetchBrandForCars();
        }
    }, []);

    const handleChange = (prop) => (event) => { 
        if(prop == "model"){
            const selectedCars = props?.models.find(({id}) =>  id  === event.target.value);
            
            let updateVehicleData =  {
                ...vehicle,
                [prop]: event.target.value,
                colorPalletes: selectedCars.colours,
                selectedImage: selectedCars?.colours.length > 0 ? selectedCars.colours[0]?.file :  "",
                carName: selectedCars?.model,
                
            }
            setVehicle(updateVehicleData);
           
            // localStorage.setItem("carSelectedPackage",event.target.value);
        } 

        else if(prop == "fuelVariantId"){
            const findFuelType = props?.models.map(({id,variants}) => {
                return id == vehicle?.model ? variants.find(fuelVariant=> {
                    return fuelVariant.id == event.target.value
                }): null
            });

            const selectedFuelType = findFuelType.find(el => el!=null).fuelType;

            setVehicle({...vehicle,[prop]: event.target.value,fuelType: selectedFuelType});
            
        }
        else {
            setVehicle({ ...vehicle, [prop]: event.target.value });
        }
    };
    console.log(vehicle)

    return <MobilePageLayout pageName="Select Your Car">
        <MAddCarPageWrapper>
            <ImageMWrapper>
                {fetchBannerImage(vehicle)}
            </ImageMWrapper>

            <div style ={{width: "80%", margin: "0 auto"}}>
            <MCarCard>
                <ColorMPallete>
                    {
                        (vehicle.model != "" && vehicle["colorPalletes"] && vehicle["colorPalletes"].length > 0) ? 
                        vehicle["colorPalletes"].map(({colourCode, file}) => {
                            return <ColorSpan 
                                color = {colourCode.startsWith("#")  ? `${colourCode}` :  `#${colourCode}`} 
                                onClick = {() => setVehicle({...vehicle, selectedImage: file})}
                            />
                        }) : null
                    }
                </ColorMPallete>

                <FormControl className={classes.formControl} disabled = {preSelectCarId.current}>
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
                        {props.inProgress? <CircularProgress style={{size: 10}}/>: !props.inProgress && props.brands? props.brands.map((carBrand) =>{
                            return <MenuItem value = {carBrand} key = {carBrand}>{carBrand}</MenuItem>
                        }) :null}
                    </Select>
                </FormControl>
                
                <FormControl className={classes.formControl} disabled = {vehicle.brand=="" || preSelectCarId.current}>
                    <InputLabel id="demo-simple-select-label">Select Model</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={vehicle.model}
                        onChange= {handleChange('model')}
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
                        value={vehicle.fuelVariantId}
                        onChange={handleChange('fuelVariantId')}
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

                {
                    enableAddCarForProfile? <div>
                    <FormControl className={clsx(classForText.textField)} variant="outlined" size="small">
                      <InputLabel htmlFor="outlined-adornment-name">Registration Number</InputLabel>
                      <OutlinedInput
                        required
                        id="outlined-adornment-name"
                        label= "Registration Number"
                        value={vehicle.registration}
                        onChange={handleChange('registration')}
                      />
                    </FormControl>
                    <FormControl className={clsx(classForText.textField)} variant="outlined" size="small">
                    <InputLabel htmlFor="outlined-adornment-name">Make Year</InputLabel>
                    <OutlinedInput
                      required
                      id="outlined-adornment-name"
                      label= "Make Year"
                      value={vehicle.makeYear}
                      onChange={handleChange('makeYear')}
                    />
                  </FormControl> </div>:null
                }
                
                <ConfirmButton disabled = {!vehicle["brand"] || !vehicle["model"] || !vehicle["fuelType"]}
                onClick = {addCar}> Confirm </ConfirmButton>
            </MCarCard>
            </div>
        </MAddCarPageWrapper>
    </MobilePageLayout>
}

function fetchBannerImage(vehicle){
    if(vehicle["brand"] !== "" && vehicle["model"] == "" && vehicle?.selectedImage){
        return <CarImg src =  { vehicle["selectedImage"]} />;
    } else if(vehicle["brand"] !== "" && vehicle["model"] != "" && vehicle?.selectedImage){
        return <CarImg src =  {`data:image/png;base64,${vehicle["selectedImage"]}`} />;
    } else {
        return null;
    }
}


const mapStateToProps = (state) => {
    return {
        inProgress: state?.brands?.inProgress,
        brands: state?.brands?.brands,
        models: state?.cars?.carModel
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBrandForCars: () => { dispatch(fetchBrandForCars()) },
        fetchCarListByBrand: (brand ="") => { dispatch(fetchCarListByBrand(brand)) },
        addCar: (cardDetails, callback) => {dispatch(addCar(cardDetails, callback))},
        getCarById: (carId = "", callBack) => { dispatch(getCarById(carId, callBack))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCar);


