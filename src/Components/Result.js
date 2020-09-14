import React, {Component} from "react";

class Result extends Component{

    render() {

        let result = this.props.result
        console.log(result)
        return(
            <div className='resultBox'>
                <p>{result}</p>
            </div>
        );
    }
}
export default Result;