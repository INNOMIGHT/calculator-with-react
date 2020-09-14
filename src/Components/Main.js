import React, {Component} from "react";
import Result from "./Result";
import Keypad from "./Keypad";

class Main extends Component{
    constructor() {
        super();

        this.state = {
            result: ''
        }
    }

    onClick = button => {
        if (button === '='){
            this.calculate()
        }
        else if (button === 'C'){
            this.reset()
        }
        else if (button === 'CE'){
            this.backspace()
        }
        else {
            this.setState({
                result: this.state.result + button
            })
        }
    }

    calculate = () => {
        try {
            this.setState({
                result: (eval(this.state.result) || '') + ''
            })
        }
        catch (e){
            this.setState({
                result: 'Error'
            })
        }
    }

    reset = () => {
        this.setState({
            result: ''
        })
    }

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    }

    render() {
        return(
            <div>
                <div className='calc-body'>
                    <h1>Calculator</h1>
                    <Result result={this.state.result} />
                    <Keypad onClick={this.onClick} />
                </div>
            </div>
        )
    }
}

export default Main