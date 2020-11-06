import React, {Component} from 'react';

class Operation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sum: 1
        }
    }

    getQuote = () => {
        fetch('http://api.kanye.rest/')
            .then(response => response.json())
            .then(data => this.props.putQuote(data.quote))
            .catch(e => console.log(e));
    };

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='mx-auto'>
                        <button
                            className='btn btn-primary btn-lg'
                            onClick={() => this.props.withdraw(this.state.sum)}>Withdraw
                        </button>
                        <input
                            className='form-control-lg'
                            type='number'
                            min={0}
                            value={this.state.sum}
                            onChange={event => this.setState({sum: +event.target.value})}
                        />
                        <button
                            className='btn btn-primary btn-lg'
                            onClick={() => this.props.deposit(this.state.sum)}>Deposit
                        </button>
                    </div>
                    <div className='w-100'></div>
                    <button
                        onClick={this.getQuote}
                        className='mx-auto btn btn-lg btn-info'>Get quote
                    </button>
                </div>
            </div>
        );
    }
}

export default Operation;