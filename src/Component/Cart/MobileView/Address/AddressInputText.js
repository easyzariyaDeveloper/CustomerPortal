import React from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Tagdiv, ButtonDiv, SubmitButton } from "../Map/style";


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: '5px 10%',
            width: '80%',
        },
    },
}));

export default function AddressInputText(props) {
    const classes = useStyles();
    const [userAddress, setUserAddress] = React.useState({
        flat: "",
        locality: "",
        landmark: ""
    });

    const onChange = (prop) => (event) => {
        setUserAddress({ ...userAddress, [prop]: event.target.value });
    };

    return <div >
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <TextField required size="small" id="standard-name" label="Flat" value={userAddress.flat} onChange={onChange('flat')} />
            </div>
            <div>
                <TextField required size="small" id="standard-name" label="Locality" value={userAddress.locality} onChange={onChange('locality')} />
            </div>

            <div>
                <TextField required size="small" id="standard-name" label="Landmark" value={userAddress.landmark} onChange={onChange('landmark')} />
            </div>
        </form>
        
        <ButtonDiv>
            <SubmitButton>Submit</SubmitButton>
        </ButtonDiv>
    </div>

}