import React,{useState,useEffect} from 'react';
import Select from "./Select";
import SlideSelect from "./SlideSelect";
import ColorPicker from "./ColorPicker";

export default function Selector(props){
    let build = [];
    const [data,setData] = useState([]);
    const editData =(newData,index)=>{
        let nD = [...data];
        nD[index] = newData;
        setData(nD);
    }
    useEffect(()=>renderFormat(),[data]);
    const renderFormat=()=>{
        let values = selector.format;
        for (let step=0;step<data.length;step++){
            values = values.replaceAll("~"+step,data[step]);
        }
        props.setStyle(props.value,values);
    }
    const selector = props.selector;
    for (let step=0;step<selector.types.length;step++){
        build.push(<p>{selector.labels[step]}</p>);
        if (selector.types[step]===0){
            build.push(<Select options={selector.data[step]} update={editData} idx={step}/>);
        }else if (selector.types[step]===1){
            build.push(<SlideSelect min={selector.data[step][0]} max={selector.data[step][1]} step={selector.data[step][2]} default={selector.data[step][3]} editData={editData} idx={step}/>);
        }else if (selector.types[step]===2){
            build.push(<ColorPicker editData={editData} idx={step}/>);
        }
    }
    return(
       <div>
           {build}
       </div>
    )
}
