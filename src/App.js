import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route} from "react-router-dom";
import Login from './components/Login/Login';
import Menu from './components/Menu/Menu';
import Logs from './components/Logs/Logs';
import Home from './components/Home/Home';
import Contacto from './components/Contacto/Contacto';
import Registrar from './components/Registrar/Registrar';
import Informacion from './components/Informacion/Informacion';

const App = () => {
  return(
    <div className='app'>
      <BrowserRouter>
        <Route path="/(.+)" component={Menu} />
        <Route exact={true} path="/" component={Login} />
        <Route exact path={"/home"} component={Home}/>
        <Route exact path={"/contacto"} component={Contacto}/>
        <Route exact path={"/logs"} component={Logs}/>
        <Route exact path={"/informacion"} component={Informacion}/>
        <Route exact path={"/registrarse"} component={Registrar}/>
      </BrowserRouter>
    </div>
  )
}

export default App;
