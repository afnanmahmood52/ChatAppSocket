import './App.css';
import Join from './components/Join/Join'
import Chat from './components/Chat/Chat'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        
            <Route exact path="/">
              <Join/>
            </Route>

            <Route path="/chat">
              <Chat />
            </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
