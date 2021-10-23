import './App.css';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header />
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
