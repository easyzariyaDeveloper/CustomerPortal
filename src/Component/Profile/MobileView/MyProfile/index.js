import React, { useState, useEffect } from "react";
import { initialProfile } from "../../MockData";
import EditTwoToneIcon from "@material-ui/icons/EditTwoTone";
import {
  Avatar,
  makeStyles,
  Badge,
  TextField,
  Collapse,
  Button,
  Box,
} from "@material-ui/core";
import ActionButton from "../../../Common/ActionButton";

const useStyles = makeStyles((theme) => ({
  page: {
    height: "fit-content",
    paddingTop: "40px",
    paddingBottom: "30px",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    border: "none",
  },
  profile_pic: {
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  textInput: { margin: "10px 0" },
  buttonWrapper: { margin: "20px 0" },
  badge: {
    // border: "1px solid black",
    background: "white",
    opacity: 0.8,
    borderRadius: "10%",
  },
}));

export default function MyProfile() {
  const profileModel = {
    name: "",
    email: "",
    phone: "",
    old_password: "",
    new_password: "",
    confirm_password: "",
    profile_img: "",
    file: "",
  };
  const classes = useStyles();
  const [profile, setProfile] = useState(profileModel);
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  useEffect(() => {
    setProfile(initialProfile);
  }, []);
  const onChange = ({ target }) =>
    setProfile({ ...profile, [target.name]: target.value });
  const handleImageUpload = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      setProfile({ ...profile, file, file, profile_img: reader.result });
    };
    reader.readAsDataURL(file);
  };
  const field_profile = [
    {
      name: "name",
      autoFocus: true,
      fullWidth: true,
      placeholder: "Add a name",
      error: false,
      autoComplete: "name",
      required: true,
      label: "Name",
    },
    {
      name: "email",
      fullWidth: true,
      placeholder: "Add a Email ID",
      error: false,
      autoComplete: "email",
      required: true,
      label: "Email ID",
    },
    {
      name: "phone",
      fullWidth: true,
      placeholder: "Add a Mobile Number",
      error: false,
      autoComplete: "mobile",
      required: true,
      label: "Mobile Number",
      helperText: "Add with country code",
    },
  ];
  const password_field = [
    {
      name: "old_password",
      fullWidth: true,
      placeholder: "Enter Current Password",
      autoComplete: "current-password",
      required: true,
      label: "Old Password",
      type: "password",
    },
    {
      name: "new_password",
      fullWidth: true,
      placeholder: "Enter New Password",
      autoComplete: "new-password",
      required: true,
      label: "Old Password",
      type: "password",
    },
    {
      name: "confirm_password",
      autoFocus: true,
      fullWidth: true,
      placeholder: "Re-enter New Password",
      type: "password",
      autoComplete: "new-password",
      required: true,
      label: "Confirm New Password",
    },
  ];
  const variant = "standard";
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(profile);
        }}
      >
        <Box className={classes.page}>
          <Badge
            overlap="circle"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            badgeContent={
              <div className={classes.badge}>
                <label htmlFor="file-input">
                  <EditTwoToneIcon />
                </label>
                <input
                  id="file-input"
                  type="file"
                  onChange={handleImageUpload}
                  style={{ display: "none" }}
                />
              </div>
            }
          >
            <Avatar
              alt="PF"
              className={classes.profile_pic}
              src={profile.profile_img}
            />
          </Badge>
        </Box>
        {field_profile.map((field) => (
          <TextField
            key={field.name}
            name={field.name}
            autoFocus={field.autoFocus || false}
            fullWidth={field.fullWidth || false}
            placeholder={field.placeholder || ""}
            error={field.error || false}
            autoComplete={field.autoComplete}
            required={field.required || false}
            label={field.label}
            value={profile[name]}
            helperText={field.helperText || ""}
            className={classes.textInput}
            onChange={onChange}
            type={field.type || "text"}
            variant={variant}
          />
        ))}

        <Button onClick={handleExpandClick}> Change Password</Button>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          {password_field.map((field) => (
            <TextField
              key={field.name}
              name={field.name}
              autoFocus={field.autoFocus || false}
              fullWidth={field.fullWidth || false}
              placeholder={field.placeholder || ""}
              error={field.error || false}
              autoComplete={field.autoComplete}
              required={field.required || false}
              label={field.label}
              value={profile[name]}
              helperText={field.helperText || ""}
              className={classes.textInput}
              onChange={onChange}
              type={field.type || "text"}
              variant={variant}
            />
          ))}
        </Collapse>
        <Box className={classes.buttonWrapper}>
          <ActionButton label="save" use="phone" />
        </Box>
      </form>
    </>
  );
}
