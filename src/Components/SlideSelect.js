//min
//max
//step
//default

import React,{useState} from 'react';

export default function SlideSelect(props){
    const [state, setState] = useState(props.default);
    const handleOnChange = (e) => {
        setState(e.target.value);
        props.editData(state,props.idx);
    }
    return (
            <div>{'x: ' + state}
            <input type={"range"} min={props.min} max={props.max} value={state} onChange={handleOnChange}/>
            </div>
    );
}
