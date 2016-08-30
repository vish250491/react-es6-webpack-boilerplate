import React, {Component} from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'

class Parent extends Component{
  render(){
    return (
    <h2>Helllo {this.props  .name}</h2>
  )
  }
}

class List extends Component{
  render(){
    var listItems = this.props.names.map(function(friend){
      return <li> <Link to={`/user/${friend}`} activeClassName={{ color: 'red' }}>{friend}</Link> {friend} </li>;
    });
    return (
        <div>

        {listItems}
        </div>

   )
  }
}

export default class App extends Component {

  render() {
    var name="VISHNU SINGH";
    var friends = ['Ean Platter', 'Murphy Randall', 'Merrick Christensen'];
    var children=this.props.children;
    return (
      // Add your component markup and other subcomponent references here.
        <div>
        <h1>App! </h1>
        <Parent name={name}/>
        <List names={friends} />
        </div>

    );
  }
}
