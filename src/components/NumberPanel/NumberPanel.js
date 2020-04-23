import React from 'react';
import '../NumberHeader/number-panel.css';
import IconCard from '../IconCard/IconCard';
import './number-panel.css'

class NumberPanel extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        let type = this.props.type;
        let title;

        if (type === 'savings'){
            title = 'Projected Year-End Savings ($)'
        } else if (type === 'dueDate') {
            title = 'Days Until Credit Card Payment:'
        }

        return(
            <div>
                <IconCard icon={this.props.icon} />
                <h5 id='num-panel-title'>{title}</h5>
                <h1 id='big-number'>{this.props.number}</h1>
                
            </div>
        )
    }
}

export default NumberPanel;