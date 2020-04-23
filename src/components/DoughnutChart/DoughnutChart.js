import {Doughnut} from 'react-chartjs-2';
import React from 'react';
import data from '../../server/data';

class DoughnutChart extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: {
                labels: [
                    'Entertainment',
                    'Shopping',
                    'Groceries',
                    'Bills',
                    'Rent',
                    'Fast Food'
                ],
                datasets: [{
                    data: data,
                    backgroundColor: [
                    'rgba(92, 38, 134, 1)',
                    '#36A2EB',
                    '#FFCE56',
                    'rgba(255,22,144,1)',
                    'red',
                    '#0D0221'
                    ],
                    hoverBackgroundColor: [
                    'rgba(92, 38, 134, 1)',
                    '#36A2EB',
                    '#FFCE56',
                    'rgba(255,22,144,1)',
                    'red',
                    '#0D0221'
                    ]
                }]
            },
            options: {
                title:{
                    display:true,
                    text:this.props.title,
                    fontSize:20,
                    fontColor: 'white'
                },
                legend:{
                    position: 'right',
                    labels: {
                        fontColor: 'white'
                    },
            //         display:true,
            //         position:'right'
                },
               
            }
        }

    }

    componentDidMount() {

    }

    render() {
        return(
            <div id="donut-chart">
                <Doughnut
                    data={this.state.data}
                    options={this.state.options}
                    />
            </div>
        )
    }
}

export default DoughnutChart;