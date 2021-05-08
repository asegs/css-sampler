import React,{Component} from 'react';
import Controls from "./Controls";

class View extends Component{
    constructor(props) {
        super(props);
        this.state = {
            'style':{}
        }
    }

    render() {
        return(
            <div>
                <p style={this.state.style}>Hello, world!</p>
                <Controls/>
            </div>
        )
    }

}

export default View;
