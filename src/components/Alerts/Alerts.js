import React from 'react';
import AlertMessage from '../AlertMessage/AlertMessage';

class Alerts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className='row'>
                <AlertMessage type="warning"/>
                <AlertMessage type='danger' />
            </div>
        )
    }
}

export default Alerts;