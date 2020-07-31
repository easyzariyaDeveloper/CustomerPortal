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
import { MOBILE_NUMBER_LENGTH, isValidEmailOrPhone } from "../../utils";
import { ValidationPara} from "../style";





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
  

export default function Login(props){
    const classes = useStyles();

    
    const [values, setValues] = useState({
      user:'',
      password: '',
      showPassword: false,
    });

    const handleChange = (key) => (event) => {
      let value =  event?.target?.value;
      if(key === 'user' && !isValidEmailOrPhone(value)){
        value = value.length > MOBILE_NUMBER_LENGTH ? value.substring(0,MOBILE_NUMBER_LENGTH) : value;
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
      <div style = {{marginTop:"45px"}}>
        <TextField
          required
          id="outlined-required"
          label="Email/Phone"
          value= {values.user}
          onChange={handleChange('user')}
          variant="outlined"
          margin="dense"
        />
        {props?.loginErrorObj?.user ? <ValidationPara>{props?.loginErrorObj?.user}</ValidationPara> : null}

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
        {props?.loginErrorObj?.password ? <ValidationPara>{props?.loginErrorObj?.password}</ValidationPara> : null}
      </div>
    </form>
  );
}






