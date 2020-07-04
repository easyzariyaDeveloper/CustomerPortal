import React,{useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { SelfDropWrapper,SaveButton } from "./style";


const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}));

export default function SelfDrop() {
  const classes = useStyles();
  const [storeAddress, setStoreAddress] = useState({
      state: "",
      city:"",
      workshop:""
  });

  const handleChange =(props)=> event => {
    setStoreAddress({...storeAddress,[props]:event.target.value})
  };

  return (<div>
    <SelfDropWrapper>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Select state</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                margin="dense"
                value={storeAddress.state}
                onChange={handleChange('state')}
            >
                <MenuItem value={'karnataka'}>Karnataka</MenuItem>
                <MenuItem value={'bihar'}>Bihar</MenuItem>
                <MenuItem value={'jharkhand'}>Jharkhand</MenuItem>
             </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Select City</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                margin="dense"
                value={storeAddress.city}
                onChange={handleChange('city')}
            >
                <MenuItem value={'bangalore'}>Bangalore</MenuItem>
                <MenuItem value={'patna'}>Patna</MenuItem>
                <MenuItem value={'ranchi'}>Ranchi</MenuItem>
            </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Select Workshop</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                margin="dense"
                value={storeAddress.workshop}
                onChange={handleChange('workshop')}
            >
                <MenuItem value={'marathali'}>Marathali</MenuItem>
                <MenuItem value={'whitefield'}>Whitefield</MenuItem>
                <MenuItem value={'electronicCity'}>Electronic City</MenuItem>
            </Select>
      </FormControl>
    </SelfDropWrapper>

    <SaveButton>Submit</SaveButton>
    </div>
  );
}
