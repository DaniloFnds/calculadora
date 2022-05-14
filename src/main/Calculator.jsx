import React, {Component} from 'react';
import './Calculator.css'
import Button from "./components/Button";
import Display from "./components/Display";

const
    initialState = {
        displayValue: '0',
        clearDisplay: false,
        operation: null,
        value: [0, 0],
        current: 0
    }

class Calculator extends Component {

    //cria uma copia do objeto
    state = {...initialState}

    clearMemory = () => {
        this.setState({...initialState})
    }

    render() {
        return (
            <div>
                <Display value={this.state.value}></Display>
                <Button label={"1"}/>
                <Button label={"2"}/>
                <Button label={"3"}/>
                <Button label={"4"}/>
                <Button label={"5"}/>
                <Button label={"6"}/>
                <Button label={"="}/>
            </div>
        );
    }
}

export default Calculator;
