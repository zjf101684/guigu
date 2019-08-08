import React from 'react';
import logo from './logo.svg';
import './App.css';

const element = <h1>hello</h1>
function App() {
  return (
    <div id="App" className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>菜鸟教程</h2>
        <p>
          你可以在 <code>src/App.js</code> 文件中修改。
        </p>
      </header>
    </div>
  );
}
ReactDOM.render(
  element,
  document.getElementById(App)
)



export default App;
