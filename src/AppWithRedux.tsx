import React from 'react';
import './App.css';
import {Counter} from "./Counter";
import {CounterWithRedux} from "./CounterWithRedux";


export const AppWithRedux=()=> {

    return (
        <div className="App">
            <CounterWithRedux/>
        </div>

    );
}

