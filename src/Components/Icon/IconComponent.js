import React from 'react';
import { Icons } from './Icons'
import './IconComponent.css';

class IconComponent extends React.Component {

    static defaultProps = {
        type: "unChecked",        
        onClick: () => {},        
    }

    render() {
        return (
            <span className="icon-block" onClick={this.props.onClick}>
                {Icons[this.props.type]}
            </span>
        );
    }
}

export default IconComponent