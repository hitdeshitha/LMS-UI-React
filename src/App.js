import MContent from "./Components/ProductView/MainContent/MContent"
import Admin from "./Components/Admin/admin"
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path = "" component = {MContent}/>
          {/* <Route path = "/acc" component = {Admin}/> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
