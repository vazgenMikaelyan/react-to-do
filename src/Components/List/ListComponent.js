import React from 'react';
import IconComponent from '../Icon/IconComponent'
import './ListComponent.css'

class ListComponent extends React.PureComponent {

  handleSelect = (id) => {
    this.props.onSelect(id);
  }

  handleDelete = (id) => {
    this.props.onDelete(id);
  }

  render() {
    return (
      <ul className="todo-list">
        {this.props.items.map((item, index) => {
          const type = item.seleced ? "checked" : "unChecked";
          return (  
            <li className="todo-list-item" key={index}>
              <IconComponent type={type} onClick={this.handleSelect.bind(this, item.id)}/>
              <div className={`item-lable ${item.seleced ? 'selected' : '' }`}>
                {item.label}
              </div>
              <IconComponent type="trash" onClick={this.handleDelete.bind(this, item.id)}/>
            </li>
          )
        })}
      </ul>
    );
  }
}

export default ListComponent;