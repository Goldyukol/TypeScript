import React from 'react';
import logo from './logo.svg';
import './App.css';
import Car from './Car';
import Todos from './Todos'

const App: React.FC = () => {
  return (
    <div className="App">
      <Car />
      <Todos />
    </div>
  );
}

export default App;
