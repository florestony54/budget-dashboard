import {Line} from 'react-chartjs-2';
import React from 'react';
import IconCard from '../IconCard/IconCard';

class LineChart extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: {
                one:{
                    labels: ['2/1', '2/2', '2/3',
                            '2/4', '2/5', '2/6', '2/7', '2/8'],
                    datasets: 
                        [{
                        label: 'Funds ($)',
                        backgroundColor: 'rgba(135, 15, 255, 0.2)',
                        borderColor: 'rgba(135, 15, 255, 1)',
                        borderWidth: 2,
                        data: [1185, 1040, 995, 965, 1450, 1370, 1370, 1295]
                        }],
                        options: {
                            title:{
                                display:true,
                                text:'Total Available Funds',
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
                           
                        }
                    },
                two:{
                    labels: ['2/1', '2/2', '2/3',
                        '2/4', '2/5', '2/6', '2/7', '2/8'],
                    datasets: [{
                        label: 'Savings ($)',
                        backgroundColor: 'rgb(82, 248, 91, 0.2)',
                        borderColor: 'rgb(82, 248, 91, 1)',
                        borderWidth: 2,
                        data: [500, 600, 700, 950, 950, 1250, 1250, 1500]
                    }],
                    options: {
                        title:{
                            display:true,
                            text:'Total Savings',
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
                    }                        
                    }                                    
            },            
        }

        this.dataset = [];
        this.options = null;
    }

    componentWillMount() {
        
        if (this.props.dataset === "one") {
            this.dataset = this.state.data.one;
            this.options = this.state.data.one.options;
        } else if (this.props.dataset === 'two') {
            this.dataset = this.state.data.two;
            this.options = this.state.data.two.options;
        }
    }

    componentDidMount() {
        
        // this.setState({
        //     data: {
        //         one: {
        //             datasets: {
        //                 data: this.dataset
        //             }
        //         }
        //     }
        // })
        // console.log(this.state.d)
    }

    render() {
        let icon;
        if (this.props.icon == null) {
            icon = null;
        } else {
            icon = <IconCard icon={this.props.icon} />;
        }

        return(
            
            <div id="line-chart">
                {icon}
                <Line
                    data={this.dataset}
                    options={this.options}
                    />
            </div>
        )
    }
}

export default LineChart;