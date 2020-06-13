import React, { useState } from "react";
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { TextInput,Wrapper } from "./style";

export default function PasswordWrapper(props) {
    const [visibilityState, setVisibilityState] = useState({ type: 'password' });
    const [password, setPassword] = useState("");

    const onClick = () => setVisibilityState({ type: visibilityState.type === 'text' ? 'password' : 'text' })
    return <Wrapper>
        <TextInput
            label={props.name}
            type={visibilityState.type}
            value = {password}
            onChange = {(e) => setPassword(e.target.value)}
        />
        <span onClick={onClick} style={{ paddingTop: "15px" }}>{visibilityState.type === 'password' ? <VisibilityOffIcon /> : <VisibilityIcon />}</span>
    </Wrapper>  
}