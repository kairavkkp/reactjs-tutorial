import './App.css';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h5>Higher Order Component</h5>
      </header>
      <br/>
      <body className="App-body">
      <ClickCounter className="App-clickcounter"/>
      <br />
      <HoverCounter className="App-hovercounter"/>
      </body>
    </div>
  );
}

export default App;
