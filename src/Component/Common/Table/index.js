import React from "react";
import {TableWrapper, TableRow, TableHead, TableBody} from "./style";

export default function Table(props) {
    if(Array.isArray(props.header) && Array.isArray(props.body)){
        return <TableWrapper>
            <TableRow>
                {
                    props.header.map((head, index) => {{
                        return <TableHead 
                            key = {index} 
                            index = {index}
                            onClick = {props.headerClick ? () => props.headerClick(index) : null}
                        >
                            {head}
                        </TableHead>        
                    }})
                }
            </TableRow>
            {
                props.body.map((bodyContent, index) => {
                    return <TableRow
                        key = {index}
                        index = {index}
                    >
                        {
                            bodyContent.map((columnContent, innerIndex) => {
                                return <TableBody  
                                    key = {index} 
                                    onClick = {props.bodyClick ? () => props.bodyClick(index, innerIndex) : null}
                                >
                                {columnContent}
                                </TableBody>
                            })
                        }  
                    </TableRow>      
                })
            }
            </TableWrapper>
    }
    
}