import React, {Component} from 'react';

class SearchBar extends Component {
constructor(props){ //uses to initiallize the component
  super(props); //calling the parent
  this.state = {
    term : '' //record the change on this State
  }
}

//class method always needs Render()
render(){
  //return <input onChange={this.onInputChange}/>
  //return <input onChange={(event) => console.log(event.target.value)}/>//one input then --> event => blah blah
  return (
      <div>
        <input
          value={this.state.term}
          onChange={event =>this.setState({term: event.target.value})} />
      </div>
  );
}
//define an Eventhandler
//onInputChange(event){}
}
export default SearchBar;
