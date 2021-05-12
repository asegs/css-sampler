import React,{useState} from 'react';
import Controls from "./Controls";
import Select from "./Select";

export default function View(props){
    const [style,setStyle] = useState({});
    const [display,setDisplay] = useState("Paragraph");

    const updateStyle=(value,newStyle)=>{
        let oldStyles = {...style};
        oldStyles[value] = newStyle;
        setStyle(oldStyles);
    }


    return(
        <div>
            <Select options={["Paragraph","Header","Button"]} update={setDisplay}/>
            {display === "Paragraph" ? <p style={style}>Hello, world!</p> : display === "Header" ? <h1 style={style}>Hello, world!</h1> : <button style={style}>Hello, world!</button> }
            <Controls setStyle={updateStyle}/>
        </div>
    )
}

//Big plans ahead ;)

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
//hide style settings when not in use
//autoformat style names between react camelcase and css hyphens


//technical debt:

//janky positioning of color picker
//style data not all stored in main class, only in fragments
