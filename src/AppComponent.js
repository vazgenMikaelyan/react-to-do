import React from 'react';
import ToDoComponent from './Components/ToDoComponent'
import './AppComponent.css';
class AppComponent extends React.Component {

  render() {
    return (
        <div className="container">
          <header className="header">
            react to do
          </header>
          <ToDoComponent />
        </div>
    );
  }
}

export default AppComponent;
