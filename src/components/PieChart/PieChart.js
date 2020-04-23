import {Pie} from 'react-chartjs-2';
import React from 'react';

class PieChart extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: {
                labels: [
                    'One',
                    'Two',
                    'Three',
                    'Four'
                ],
                datasets: [{
                    data: [205, 50, 65, 115],
                    backgroundColor: [
                    'rgba(92, 38, 134, 1)',
                    '#36A2EB',
                    '#FFCE56',
                    'rgba(255,22,144,1)'
                    ],
                    hoverBackgroundColor: [
                    'rgba(92, 38, 134, 1)',
                    '#36A2EB',
                    '#FFCE56',
                    'rgba(255,22,144,1)'
                    ]
                }]
            },
            // options: {
            //     title:{
            //         display:true,
            //         text:'Total Available Funds',
            //         fontSize:20,
            //         fontColor: 'white'
            //     },
            //     legend:{
            //         labels: {
            //             fontColor: 'white'
            //         },
            //         display:true,
            //         position:'right'
            //     },
               
            // }
        }

    }

    componentDidMount() {

    }

    render() {
        return(
            <div id="pie-chart">
                <Pie
                    data={this.state.data}
                    options={this.state.options}
                    />
            </div>
        )
    }
}

export default PieChart;