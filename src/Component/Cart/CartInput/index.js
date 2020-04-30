import React, {useState} from "react";
import { CartInputWrapper, SelectCity } from "../style";
import InputText from "../../Common/InputText/InputText";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


export default function CartInput (props){
    const [date, setDate] = useState({date: new Date()});
    const onChange = value => setDate({ value });
    
    return <CartInputWrapper>
        <Calendar 
            changed = {onChange}
            value = {date["date"]}
        />         
        <SelectCity>
            <option value="Bangalore">Bangalore</option>
            <option value="Chennai">Chennai</option>
            <option value="Ranchi">Ranchi</option>
            <option value="Patna">Patna</option>
        </SelectCity> 
    </CartInputWrapper>
}


