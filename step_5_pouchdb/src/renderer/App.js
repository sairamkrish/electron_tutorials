
import React from 'react';
import ReactDOM from 'react-dom';

var TodoActions = require('./actions/TodoActions');
import TodoApp from './components/TodoApp.react';


const style = {
}

class App extends React.Component{
  constructor(){
      super();
  }

  componentDidMount() {
    TodoActions.initTodoList();
    // AppStore.addChangeListener(this._onChange);
  }

  _onChange = () => {
  }

  render(){
    return (
        <TodoApp />
    );
  }
}

if(document.getElementById('todoapp')){
  ReactDOM.render(
    <App />,
    document.getElementById('todoapp')
  );
}
