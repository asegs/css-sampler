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

    const removeStyle=(value)=>{
        console.log(value)
        let oldStyles = {...style};
        console.log(oldStyles)
        delete oldStyles[value];
        console.log(oldStyles)
        setStyle(oldStyles);
    }

    return(
        <div>
            <Select options={["Paragraph","Header","Button"]} update={setDisplay}/>
            {display === "Paragraph" ? <p style={style}>Hello, world!</p> : display === "Header" ? <h1 style={style}>Hello, world!</h1> : <button style={style}>Hello, world!</button> }
            <Controls setStyle={updateStyle} deleteStyle={removeStyle}/>
        </div>
    )
}

// Big plans ahead ;)
//
// border
// border radius
// set view text
// UI padding
// export CSS
// save and name style settings
// style settings don't reset when one is deleted
// better style removing when deleted
// better dropdown (internally scrollable)
// autoformat style names between react camelcase and css hyphens
// more options for view type beyond p,h1,button
//
// technical debt:
//
// janky positioning of color picker
// style data not all stored in main class, only in fragments
// general poor padding for UI
