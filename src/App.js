import logo from './logo.svg'
import { Component } from "react";
import Menu from "./components/menu";
import './App.css';
import { DISHES } from "./shared/dishes";
import { DETAILS } from './shared/details';

class App extends Component{
  constructor(props){
      super(props);
      this.state = {
        dishes: DISHES,
        details: DETAILS
      };
  }

render()
{
  return (
    <div className="App">
          <div className='container'>
          <Menu dishes={this.state.dishes} details={this.state.details}/>
           

    </div>
      
    </div>
  );
  };
};

export default App;
