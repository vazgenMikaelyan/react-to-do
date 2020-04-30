import React from 'react';
import FormComponent  from './Form/FormComponent';
import ListComponent  from './List/ListComponent';
import ClearComponent from './Clear/ClearComponent';
import {mockTodos} from './mockTodos' 

class ToDoComponent extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = mockTodos
    this.handleSave   = this.handleSave.bind(this);
    this.handleClear  = this.handleClear.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleSave(event) {
    event.preventDefault();
    const targetElement = event.target.addTodo
    if(targetElement.value !==""){
      const item = {
        id: Date.now(),
        label: targetElement.value,
        isDone: false
      }; 
      targetElement.value = targetElement.defaultValue;
      this.setState((prevState) => ({
        items: prevState.items.concat(item)
      }));
    }
  }

  handleClear() {
    let items = this.state.items.map((e, i) => {
      e.isDone = false;
      return e;
    });
    this.setState({ items: items });
  }

  handleSelect(id) {
    let items = this.state.items.map((e, i) => {
      if (id === e.id) {
        e.isDone = !e.isDone;
      }
      return e;
    });
    this.setState({ items: items });
  }

  handleDelete(id) {
    let items = this.state.items.filter((e, i) => {
      return id !== e.id;
    });
    this.setState({ items: items });
  }

  render() {
    const props = {
     items: this.state.items,
     onDelete: this.handleDelete,
     onSelect: this.handleSelect,
    };
    return (
      <React.Fragment>
        <FormComponent onSave={this.handleSave} />
        <ListComponent {...props}/>
        <ClearComponent onClick={this.handleClear}/>
      </React.Fragment>
    );
  }
}

export default ToDoComponent;