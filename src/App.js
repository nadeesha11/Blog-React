import Home from "./pages/Home/Home";
import Topbar from "./components/topbar/Topbar";
import Single from "./pages/single/Single";
import Write from "./pages/Write/Write";
import Settings from "./pages/Settings/Settings";
import Login from "./pages/Login/Login";
import Register from './pages/Register/Register.jsx'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
   
   <Router>
  <Topbar></Topbar>
 
  <Switch>
  <Route exact path="/">
            <Home />
          </Route>

      <Route  path="/Login">
       <Login />
   </Route>

     <Route  path="/Register">
       <Register />
   </Route>    

    <Route  path="/Settings">
       <Settings />
   </Route>   

   <Route  path="/single">
       <Single />
   </Route>  

   <Route  path="/Write">
       <Write />
   </Route>  


    </Switch>
    </Router>
  );
}

export default App;
