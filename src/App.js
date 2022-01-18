import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Tabs from './Components/Tabs';

function App() {
  return (
    <div className="App bg-dark text-light container mt-4 text-center">
      <div>
        <h1>Tabs Page</h1>
      </div>
      <div>
        <Tabs/>
      </div>
    </div>
  );
}

export default App;
