import React,{useState} from 'react';
import EditIcon from "@material-ui/icons/Edit";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { EditAndDeleteDiv, AddressListOverlay, EditAddressCard } from './style';
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
      "& .MuiTextField-root": {
        width: "80%",
        marginLeft: "9%",
        marginTop: "30px",
        paddingBottom: "50px"
      }
    }, 
    margin: {
        marginLeft: "9%",
        marginTop: "30px",
    },
    textField: {
      width: "80%",
      size:"small",
      
    }
  }));
  

export default function EditAndDelete (props){
 const [visibilityOverlay, setVisibilityOverlay] = React.useState(false);
 const classes = useStyles();


  return<EditAndDeleteDiv>
    <IconButton onClick = {()=> setVisibilityOverlay(true)}><EditIcon /></IconButton>
    {
      visibilityOverlay ? <AddressListOverlay>
        <EditAddressCard>
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <TextField
                required
                id="outlined-required"
                label="AddressLine"
                value= {props.address}
                onChange= {(event)=>{props.changeHandler(event.target.value)}}
                variant="outlined"
                margin="dense"
                />
            </div>
        </form>
        <IconButton  onClick ={() => setVisibilityOverlay(false)}>X</IconButton>
        </EditAddressCard>
      </AddressListOverlay>: null
    }

    <IconButton onClick = {props.deleteHandler}>
        <DeleteOutlineIcon/>
    </IconButton>
  </EditAndDeleteDiv>
}