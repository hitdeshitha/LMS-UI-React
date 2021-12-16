import mcontent from "./Components/ProductView/MainContent/MContent"
import admin from "./Components/Admin/admin"
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          {/* <Route path = "/acc" component = {mcontent} /> */}
          <Route path = "/" exact component = {admin}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
