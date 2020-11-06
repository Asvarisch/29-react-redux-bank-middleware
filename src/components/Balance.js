import React from 'react';

class Balance extends React.Component {
   

    render() {
        return (
            <div>
                <h1 className='text-center text-uppercase'>Iron bank of Braavos</h1>
                <h4 className='text-center text-uppercase'><q>{this.props.quote}</q></h4>
                <h3 className='text-center text-uppercase'>Balance = {this.props.balance}</h3>
            </div>
        );
    }
}

export default Balance;