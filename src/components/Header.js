import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, NavLink, Redirect, Prompt} from 'react-router-dom';
import About from "./About";
import Info from './Info'

class Header extends Component {
    
    credits=()=>{
        return (
            <div>
                <h1>here comes the credits:</h1>
                <h2>this was made in a function inside the class component in the same js file</h2>
            </div>
        )
    }

    render() {
        return (
          <Router>

            <div className="navBar" style={{width: '100%', height: '10vh', backgroundColor: 'black', display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
              <NavLink to="/" exact activeStyle={{ color: "gray" }} style={style}> Home </NavLink>
              <NavLink to="/about" exact activeStyle={{ color: "gray" }} style={style}> About </NavLink>
              <NavLink to="/info" exact activeStyle={{ color: "gray" }} style={style}> Info </NavLink>
              <NavLink to="/credits" exact activeStyle={{ color: "gray" }} style={style}> Credits </NavLink>
              <NavLink to="/foods" exact activeStyle={{ color: "gray" }} style={style}> Foods </NavLink>
            </div>
            
            <Switch>
            <Route path="/" exact render={()=>{return (<div> <h1> Hello Stranger!</h1> <h2>this was made directly in the component (Route '/') using the render attribute</h2> <h3>-same js file-</h3><img src={imgURL}/> </div>)}}/>
            <Route path="/about"  component={About}/>
            <Route path="/info" component={Info}/>
            <Route path="/credits" component={this.credits}/>
            <Route path="/foods" component={Foods}/>
            </Switch>
          </Router>
        );
    }
}

const imgURL = "https://picsum.photos/id/237/300/300";
const style={color: 'white', textDecoration: 'none'};

const Foods=()=>{
    return (
        <div>
            <h1>FOOD:</h1>
            <h1>Falafel</h1>
            <h1>Shawerma</h1>
            <h2>this was made in a function outside the class component but in the same js file</h2>
        </div>
    )
}

export default Header
