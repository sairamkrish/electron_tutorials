
import React from 'react';
import ReactDOM from 'react-dom';

// import bootstrap from 'bootstrap';
// import bootstrapcss from 'bootstrap/dist/css/bootstrap.min.css';

import TodoApp from './components/TodoApp.react';


const style = {
}

class App extends React.Component{
  constructor(){
      super();
  }

  componentDidMount() {
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
