import React, { useState } from "react";
import clsx from 'clsx';
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { MOBILE_NUMBER_LENGTH, isValidEmailOrPhone, isValidEmail, isValidContactNumber } from "../../utils";
import { ValidationPara } from "../style";



const useStyles = makeStyles(theme => ({
    root: {
      "& .MuiTextField-root": {
        width: "80%",
        marginLeft: "9%",
        marginTop: "30px",

      }
    }, 
    margin: {
        marginLeft: "9%",
        marginTop: "30px"
    },
    textField: {
      width: "80%",
      size:"small"
    }
  }));
  

export default function Signup(props){
    const classes = useStyles();

    const [values, setValues] = useState({
      name:'',
      email:'',
      phone: '',
      password: '',
      confirmPassword: '',
      showPassword: false,
      showConfirmPassword: false
    });

    const handleChange = (key) => (event) => {
      let value = event?.target?.value;
      if(key == 'phone'){
        value = value.length >MOBILE_NUMBER_LENGTH ? value.substring(0,MOBILE_NUMBER_LENGTH) :value;
      }
      setValues({ ...values, [key]: value });
      props.updateValue(key, value);
    };

  
    const handleClickShowPassword = (key) =>(event)=> {
      if(key === 'showPassword'){
        setValues({ ...values, [key]: !values.showPassword });
      }
      else{
        setValues({ ...values, [key]: !values.showConfirmPassword });
      }
    };

  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          required
          id="outlined-required"
          label="name"
          value= {values.name}
          onChange={handleChange('name')}
          variant="outlined"
          margin="dense"
        />
        {props?.errorObj?.name ? <ValidationPara>{props?.errorObj?.name}</ValidationPara> : null}

        <TextField
          required
          id="outlined-required"
          label="Email"
          value= {values.email}
          onChange={handleChange('email')}
          variant="outlined"
          margin="dense"
        />
        {props?.errorObj?.email ? <ValidationPara>{props?.errorObj?.email}</ValidationPara> : null}
        
        <TextField
          type="number"
          required
          id="outlined-required"
          label="Phone"
          value= {values.phone}
          onChange={handleChange('phone')}
          variant="outlined"
          margin="dense"
          inputProps={{ maxLength: 10 }}
        />
       {props?.errorObj?.phone ? <ValidationPara>{props?.errorObj?.phone}</ValidationPara> : null}

        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" size = "small">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword('showPassword')}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
        {props?.errorObj?.password ? <ValidationPara>{props?.errorObj?.password}</ValidationPara> : null}

        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" size = "small">
          <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showConfirmPassword ? 'text' : 'password'}
            value={values.confirmPassword}
            onChange={handleChange('confirmPassword')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword('showConfirmPassword')}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={135}
            
          />
        </FormControl>
        {props?.errorObj?.confirmPassword ? <ValidationPara>{props?.errorObj?.confirmPassword}</ValidationPara> : null}
      </div>
    </form>
  );
}






