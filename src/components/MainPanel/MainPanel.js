import React from 'react';
import Panel from '../Panel/Panel';
import NumberPanel from '../NumberHeader/NumberHeader';
import './main-panel.css';


class MainPanel extends React.Component {
    constructor (props){
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className='main-panel'>
                <div className=''>
                
                    {/* <div className='row' > */}
                        <div className='col-sm'>
                            <NumberPanel number='1500' />
                        </div>
                    {/* </div> */}

                    <div className='row' id='big-panels'>
                        <div className='col-md big-panel'>
                            <Panel title='Spending Breakdown' type='doughnut'/>
                        </div>                
                        <div className='col-md big-panel'>
                            <Panel type='line' dataset='two' />
                        </div>
                                         
                    </div>

                    <div  className='row' id='small-panels'>
                        <div className='col-md' >
                            <Panel type='line' icon={0} dataset='one' />
                        </div>
                        <div className='col-md'>
                            <Panel type='number' number={3800} icon={4} numType={'savings'}/>   
                        </div>
                        <div className='col-md'>
                            <Panel type='number' number={5} icon={2} numType={'dueDate'}/>   
                        </div>   
                        <div className='col-md'>
                            <Panel type='bar' icon={1}/>   
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default MainPanel;