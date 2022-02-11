import React from 'react';
import Todo from './components/Todo';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Todo />
        </header>
      </div>
    );
  }
}

export default App;
