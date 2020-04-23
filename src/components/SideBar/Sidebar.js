import React from 'react';
import SidebarSelection from '../SidebarSelection/SidebarSelection';


class Sidebar extends React.Component {
    constructor (props){
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className='sidebar col-sm-2'>
                <div className='jumbotron'>
                    <h1>Sidebar</h1>
                    
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>
                            <SidebarSelection name="Graph"/>
                        </li>
                        <li className='list-group-item'>
                            <SidebarSelection name="Chart"/>
                        </li>
                        <li className='list-group-item'>
                            <SidebarSelection name="Data"/>
                        </li>
                    </ul>
                    

                </div>
            </div>
        )
    }
}

export default Sidebar;