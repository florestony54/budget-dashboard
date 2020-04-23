import {Radar} from 'react-chartjs-2';
import React from 'react';
import IconCard from '../IconCard/IconCard';

class RadarChart extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: {
                labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
                datasets: [
                    {
                    label: 'First dataset',
                    backgroundColor: 'rgba(0, 0, 235, 0.2)',
                    borderColor: 'rgba(92, 38, 134, 1)',
                    pointBackgroundColor: 'rgba(92, 38, 134, 0.2)',
                    pointBorderColor: 'white',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(179,181,198,1)',
                    data: [65, 59, 90, 81, 56, 55, 40]
                    },
                    {
                    label: 'Second dataset',
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,22,144,1)',
                    pointBackgroundColor: 'rgba(255,22,144,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(255,99,132,1)',
                    data: [28, 48, 40, 19, 96, 27, 100]
                    },
                ]},
            
            options: {
                scale: {
                    gridLines: {
                        // lineWidth: 2,
                        color: 'white'
                    },
                    labels:{
                    fontColor: 'white'
                    }
                },
                
                legend: {
                    labels: {
                        fontColor: 'white'
                    }
                }
            }
        }

    }

    componentDidMount() {
    }

    render() {
        return(
            <div id="radar-chart">
                <IconCard icon={this.props.icon}/>
                <Radar data={this.state.data} options={this.state.options}/>
            </div>
        )
    }
}

export default RadarChart;