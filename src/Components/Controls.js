import React,{useState} from 'react';
import {Button} from "reactstrap";

export default function Controls(props){
    const [styles,setStyles] = useState([]);
    const removeStyle=(index)=>{
        let newStyles =styles;
        newStyles.splice(index,1);
        setStyles(newStyles);
    }

    const addStyle=()=>{
        let newStyles = styles;
        newStyles.push(<Button onClick={()=>
            removeStyle(styles.length)}>x</Button>);
        setStyles(newStyles)
    }
    return(
        <div>
            {styles}
            <Button color="primary" onClick={()=> addStyle()}>+</Button>
        </div>
    );
}



// function addStyle(){
//     setStyles(styles.concat(<div><StyleRow/><Button onClick={()=>
//         removeStyle(styles.length)}>x</Button></div>))
// }
