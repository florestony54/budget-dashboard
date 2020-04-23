import React from 'react';
import './number-panel.css';

class NumberHeader extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <h3>Total Savings:</h3>
                <h1 id='big-number'>${this.props.number} <span style={{'color':'gray'}}>/$5500</span> </h1>
                <div className='progress'>
                    <div className='progress-bar progress-bar-striped progress-bar-animated bg-success' 
                         role='progressbar'
                         style={{"width": (parseInt(this.props.number)/5500)*100 + "%"}} //TODO: let user enter savings goal
                         >
                    </div>
                </div>
            </div>
        )
    }
}

export default NumberHeader;