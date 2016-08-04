
import React from 'react';
import ReactDOM from 'react-dom';

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
        <div className="container-fluid" style={style}>
          Hello Webpack and React :)
        </div>
    );
  }
}

if(document.getElementById('todoapp')){
  ReactDOM.render(
    <App />,
    document.getElementById('todoapp')
  );
}
