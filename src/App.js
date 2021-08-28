import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route} from "react-router-dom";
import Login from './components/Login/Login';
import Menu from './components/Menu/Menu';
import Logs from './components/Logs/Logs';
import Home from './components/Home/Home';
import Contacto from './components/Contacto/Contacto';

const App = () => {
  return(
    <BrowserRouter>
      <Route path="/(.+)" component={Menu} />
      <Route exact={true} path="/" component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/logs" component={Logs} />
      <Route path="/contacto" component={Contacto} />
      {/* <Route path="/log/:id" component={Log} /> */}
    </BrowserRouter>
  )
}

export default App;
