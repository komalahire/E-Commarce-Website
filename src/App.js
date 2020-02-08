import React from 'react';
import { BrowserRouter ,Route,Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from  './components/Cart';
import Default from './components/Default';


function App() {
  return (
    <div className="App">
    <React.Fragment>
     <Navbar/>
     <Switch>
     <Route exact path="/" component={ProductList}/>
       <Route path="/details" component={Details}/>
       <Route path="/cart" component={Cart}/>
       <Route component={Default}/>
       </Switch>
     </React.Fragment>
    </div>
  );
}

export default App;
