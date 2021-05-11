import React,{useState} from 'react';
import Controls from "./Controls";

export default function View(props){
    const [style,setStyle] = useState({});
    const updateStyle=(value,newStyle)=>{
        let oldStyles = {...style};
        oldStyles[value] = newStyle;
        setStyle(oldStyles);
    }
    return(
        <div>
            <p style={style}>Hello,world!</p>
            <Controls setStyle={updateStyle}/>
        </div>
    )
}

//Big plans ahead ;)

//color picker
//border
//border radius
//select view type (button, paragraph...etc.)
//set view text
//UI padding
//export CSS
//save and name style settings
//style settings don't reset when one is deleted
//remove style when deleted
//better dropdown (internally scrollable)
