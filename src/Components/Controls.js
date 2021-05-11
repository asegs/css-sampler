import React, { useState } from "react";
import { Button } from "reactstrap";
import StyleRow from "./StyleRow";

export default function Controls(props) {
    const [styles, setStyles] = useState([]);

    function removeStyle(index) {
        let newStyles = [...styles];
        newStyles.splice(index, 1);
        setStyles(newStyles);
    }

    const addStyle = () => {
        const newStyles = [...styles];
        newStyles.push({index: newStyles.length});
        setStyles(newStyles);
    };

    const editStyleInfo=(style,index)=>{
        let newStyles = [...styles];
        newStyles[index]['style'] = style;
        setStyles(newStyles)
    }


    // we are mapping through styles and adding removeStyle newly and rerendering all the divs again every time the state updates with new styles.
    // this always ensures that the removeStyle callback has reference to the latest state at all times.
    return (
        <div>
            {styles.map((style, index) => {
                return (
                    <div>
                        <StyleRow idx={style.index} edit={editStyleInfo} setStyle={props.setStyle}/>
                        <Button onClick={() => removeStyle(index)}>x</Button>
                    </div>
                );
            })}
            <Button color="primary" onClick={addStyle}>+</Button>
        </div>
    );
}



// function addStyle(){
//     setStyles(styles.concat(<div><StyleRow/><Button onClick={()=>
//         removeStyle(styles.length)}>x</Button></div>))
// }
