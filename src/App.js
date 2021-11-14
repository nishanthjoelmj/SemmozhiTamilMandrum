import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" component={HomePage} exact />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
