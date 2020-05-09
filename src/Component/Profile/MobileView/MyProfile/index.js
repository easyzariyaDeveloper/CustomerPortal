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
  return (
    <>
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
      <TextField
        name="name"
        fullWidth
        value={profile.name}
        onChange={onChange}
        label="Name"
        className={classes.textInput}
      />
      <TextField
        name="email"
        fullWidth
        value={profile.email}
        onChange={onChange}
        label="Email ID"
        className={classes.textInput}
      />
      <TextField
        name="phone"
        fullWidth
        value={profile.phone}
        onChange={onChange}
        label="Mobile Number"
        className={classes.textInput}
      />
      <Button onClick={handleExpandClick}> Change Password</Button>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <TextField
          name="old_password"
          fullWidth
          value={profile.old_password}
          onChange={onChange}
          label="Old Password"
          type="password"
          className={classes.textInput}
        />
        <TextField
          name="new_passsword"
          fullWidth
          value={profile.new_password}
          onChange={onChange}
          label="New Password"
          type="password"
          className={classes.textInput}
        />
        <TextField
          name="confirm_password"
          fullWidth
          value={profile.confirm_password}
          onChange={onChange}
          label="Confirm New Password"
          type="password"
          className={classes.textInput}
        />
      </Collapse>
      <Box className={classes.buttonWrapper}>
        <ActionButton label="save" use="phone" size="full-width" />
      </Box>
    </>
  );
}
