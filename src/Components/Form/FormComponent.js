import React from 'react';
import IconComponent from '../Icon/IconComponent'
import './FormComponent.css'

class FormComponent extends React.PureComponent {

  render() {
    return (
        <form className="form" onSubmit={this.props.onSave}>
          <div className="form-prepend">
            <IconComponent type="pencil" />
          </div>
          <input type="text" 
                 name="addTodo"               
                 placeholder="What needs to be accomplished"/>
        </form>        
    );
  }
}

export default FormComponent;