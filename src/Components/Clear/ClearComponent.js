import React from 'react';
import IconComponent from '../Icon/IconComponent';
import './ClearComponent.css'

class ClearComponent extends React.PureComponent {
    render() {
        return (
            <div className="block-clear">
                <span className="button-clear" onClick={this.props.onClick}>
                    <IconComponent type="trash" />
                    Clear All
                </span>
            </div>
        );
    }
}
export default ClearComponent;