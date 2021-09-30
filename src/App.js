import logo from './logo.svg';
import './App.css';
import {Nav, Navbar,NavbarBrand} from 'reactstrap';
import { Component } from 'react';
import Menu from './components/MenuComponent';


class App extends Component{
  render(){
    return (
      <div className='App'>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href='/'>Ristornate Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu />
      </div>
    );
  }
}

export default App;
