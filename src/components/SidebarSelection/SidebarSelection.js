import React from 'react';


class SidebarSelection extends React.Component {
    constructor (props){
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className='sidebar-selection'>
                <h4>{this.props.name}</h4>
            </div>
        )
    }
}

export default SidebarSelection;