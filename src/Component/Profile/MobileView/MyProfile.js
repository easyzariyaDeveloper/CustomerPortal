import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import EditIcon from "@material-ui/icons/Edit";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { ChangePasswordDiv, SaveProfileButton, SaveDiv } from "./style";

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
    size: "small"
  }
}));


const profileDetails = { 'Name': 'name', 'Email': 'email', 'Phone Number': 'phone' };
const profileDetailsArray = Object.entries(profileDetails);


export default function MyProfile() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    phone: "",
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
    showOldPassword: false,
    showNewPassword: false,
    showConfirmNewPassword: false,
  });


  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };


  const handleClickShowPassword = (prop) => (event) => {
    if (prop === 'showOldPassword') {
      setValues({ ...values, [prop]: !values.showOldPassword });
    }
    else if(prop === 'showNewPassword') {
      setValues({ ...values, [prop]: !values.showNewPassword });
    }
    else{
      setValues({ ...values, [prop]: !values.showConfirmNewPassword });
    }
  };


  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
    <div className={classes.root}>
      <div>{
        profileDetailsArray.map(element => {
          return (<FormControl
            className={clsx(classes.margin, classes.textField)}
            variant="outlined" size="small"
          >
            <InputLabel htmlFor="outlined-adornment-name">{element[0]}</InputLabel>
            <OutlinedInput
              id="outlined-adornment-name"
              type={element[0] === "Phone Number" ? "number" : "text"}
              value={values["element[1]"]}
              onChange={handleChange(element[1])}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton edge="end">
                    <EditIcon />
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={element[0].length * 9}
            />
          </FormControl>
          )
        })}
      </div>

      <ChangePasswordDiv>Change Password</ChangePasswordDiv>

      <div>
        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" size="small">
          <InputLabel htmlFor="outlined-adornment-password">Old Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showOldPassword ? 'text' : 'password'}
            value={values.oldPassword}
            onChange={handleChange('oldPassword')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword('showOldPassword')}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showOldPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={100}
          />
        </FormControl>

        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" size="small">
          <InputLabel htmlFor="outlined-adornment-password">New Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showNewPassword ? 'text' : 'password'}
            value={values.newPassword}
            onChange={handleChange('newPassword')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword('showNewPassword')}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showNewPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={100}

          />
        </FormControl>

        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" size="small">
          <InputLabel htmlFor="outlined-adornment-password">Confirm New Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showConfirmNewPassword ? 'text' : 'password'}
            value={values.ConfirmNewPassword}
            onChange={handleChange('ConfirmNewPassword')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword('showConfirmNewPassword')}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showConfirmNewPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={155}

          />
        </FormControl>
      </div>
    </div>
      <SaveDiv>
        <SaveProfileButton>Save</SaveProfileButton>
      </SaveDiv>
    </div>
  );
  
}
