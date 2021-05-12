import {SketchPicker} from "react-color";
import React,{useState} from "react";

export default function ColorPicker(props){
    const [colorData,setColorData] = useState({});
    const changeColor=(color,event)=>{
        props.editData(color.hex,props.idx);
        setColorData(color);

    }
    return <div style={{"paddingLeft":"45%"}}><SketchPicker onChange={changeColor} color={colorData}/></div>
}
