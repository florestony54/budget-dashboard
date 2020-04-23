import {Bar} from 'react-chartjs-2';
import React from 'react';
import IconCard from '../IconCard/IconCard'

class BarChart extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                  {
                    label: 'My First dataset',
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: [65, 59, 80, 81, 56, 55, 53]
                  }
                ]
              },
            options: {
                title:{
                    display:true,
                    text:'Monthly Expenditures',
                    fontSize:20,
                    fontColor: 'white'
                },
                legend:{
                    labels: {
                        fontColor: 'white'
                    },
                    display:false,
                    position:'right'
                },                                               
            },
            
        }

    }

    componentDidMount() {

    }

    render() {
        return(
            <div id="radar-chart">
                <IconCard icon={this.props.icon}/>
                <Bar
                    data={this.state.data}
                    options={this.state.options}
                    />
            </div>
        )
    }
}

export default BarChart;