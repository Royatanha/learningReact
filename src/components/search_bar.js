import React, {Component} from 'react';
import ReactDOM from 'react-dom';
//import * as React from 'react';

class SearchBar extends Component {
constructor(props){ //uses to initiallize the component
  super(props); //calling the parent
  this.state = {
    term : 'yuhu' //record the change on this State
  }
}

//class method always needs Render()
render(){
  //return <input onChange={this.onInputChange}/>
  //return <input onChange={(event) => console.log(event.target.value)}/>//one input then --> event => blah blah
  return (
      <div>
      {this.state.term}
      </div>
  );
}
}
export default SearchBar;
