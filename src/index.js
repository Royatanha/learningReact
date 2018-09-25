import React from 'react';
import ReactDOM from 'react-dom';
//react is a library --> the rest need file reference
import SearchBar from './components/search_bar';

const API_KEY='AIzaSyD6qwYV0SWWoeE_rw30JCRQHtIfH0BM4h8';



//create a new component
/* Old js syntax
const App = function(){
  return <div>Hi!</div>;
}
*/

//new ES6 syntax
const App =() => {
  return(
    <div>
      <SearchBar />
    </div>
  );
}

//make an instance of APP and use it as a ReactDom (instance , insert the html from instance into this ! - mostly Container on index.html)
ReactDOM.render(<App />, document.querySelector('.container'));
