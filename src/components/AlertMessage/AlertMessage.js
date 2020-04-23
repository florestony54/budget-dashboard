import React from 'react';


class AlertMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "High Pressure",
            type: ""
        }

        this.alertType = "";

    }

    componentDidMount() {
        this.setState({type: this.props.type})
        switch (this.props.type){
            case "danger": 
                this.setState({type: "bg-danger"});
                break;
            case "warning":
                this.setState({type: "bg-warning"});
                break;

        }
    }


    render() {
        return (
            <div className='col-md'>
                <div className={"card text-white " + this.state.type} >
                    <div className='card-header'>{this.state.message}</div>
                    <div className='card-body bg-white text-white'>Pressure at location XY-2 exceeds threshold of XX PSI</div>
                </div>
            </div>
            
        )
    }
}

export default AlertMessage;