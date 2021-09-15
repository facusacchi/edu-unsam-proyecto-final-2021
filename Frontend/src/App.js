import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
import Menu from "./components/Menu/Menu";
import Logs from "./components/Logs/Logs";
import Home from "./components/Home/Home";
import Contacto from "./components/Contacto/Contacto";
import Registrar from "./components/Registrar/Registrar";
import React from "react";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path={"/registrarse"} component={Registrar} />
          <Route component={ComponentWithNavBar}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;


const ComponentWithNavBar = () => {
  return(
    <>
      <Menu/>
      <Route exact path={"/home"} component={Home} />
      <Route exact path={"/contacto"} component={Contacto} />
      <Route exact path={"/logs"} component={Logs} />
    </>
  );
}
