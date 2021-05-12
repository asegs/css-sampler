import {Button} from "reactstrap";
import React,{useState} from "react";
import Select from "./Select";
import {options} from "./Options";
import Selector from "./Selector";

export default function StyleRow(props){
    const [styleName,setStyleName] = useState("");
    const [style,setStyle] = useState({});
    const [selector,setSelector] = useState({});
    const updateStyle =(styleName)=>{
        let s = options[styleName];
        setStyle(s);
        setStyleName(styleName);
        props.edit(s,props.idx);
    }
    const updateSelector=(selectorName)=>{
        let newSelector = {}
        style.selectors.forEach(selector=>{
            if (selector.name === selectorName){
                newSelector = selector;
            }
        });
        setSelector(newSelector);
    }
    const [showing,setShowing] = useState(true);
    if (showing) {
        return (
            <div>
                <Button color={"primary"} onClick={()=>setShowing(!showing)}>{styleName!== "" ? styleName+" v" : "Hide v"}</Button>
                <Select options={Object.keys(options)} update={updateStyle}/>
                {'selectors' in style ?
                    <Select options={style.selectors.map(x => x.name)} update={updateSelector}/> : ""}
                {'name' in selector ?
                    <Selector selector={selector} setStyle={props.setStyle} value={style.value}/> : ""}
                <Button onClick={() => props.deleteStyle(props.idx, style.value)}>x</Button>
            </div>
        )
    }else{
        return (
            <Button color={"primary"} onClick={()=>setShowing(!showing)}>{styleName!== "" ? styleName+" >" : "Show >"}</Button>
        )
    }
}
