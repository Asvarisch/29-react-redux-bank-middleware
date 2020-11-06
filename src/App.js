import React from 'react';
import './App.css';
import Balance from "./containers/BalanceContainer";
import Operation from "./containers/OperationContainer";

const App = () => {
    return (
        <div className='App'>
            <Balance/>
            <Operation/>
        </div>
    );
}

export default App;