import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillAlt, 
        faHandHoldingUsd, 
        faWallet,
        faCoins,
        faChartLine} from '@fortawesome/free-solid-svg-icons';
import './icon-card.css';

class IconCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            icon: null,
        }
    }

    componentWillMount() {
        switch (this.props.icon) {
            case 0:
                this.setState({icon: faMoneyBillAlt})
                break;
            case 1:
                this.setState({icon: faHandHoldingUsd})
                break;
            case 2:
                this.setState({icon: faWallet})
                break;
            case 3:
                this.setState({icon: faCoins})
                break;
            case 4:
                this.setState({icon: faChartLine})
                break;
            case 5:
                this.setState({icon: null})
                break;
        }
    }

    render(){
        return(
            <div className='card bg-success col-3' id='icon-card'>
                <FontAwesomeIcon icon={this.state.icon} size='2x'/>
            </div>
        )
    }
}

export default IconCard;