import React, { Component } from 'react';

import classes from './Search.module.css';
import magnifier from '../../assets/images/pl-icon-search.svg';

class Search extends Component {
   state = {
      textEntered: ""
   }

   inputChangedHandler = (event) => {
      this.setState({textEntered: event.target.value});
   }

   searchHandler = (event) => {
      event.preventDefault();
      console.log('searching...');
   }

   render() {
      return (
         <form onSubmit={this.searchHandler} className={classes.Search} >
            <input
               type="text"
               placeholder="Looking for something specific?"
               value={this.state.textEntered}
               onChange={this.inputChangedHandler} />
            <img
               src={magnifier}
               alt="magnifier"
               onClick={this.searchHandler} />
         </form>
      );
   }
}

export default Search;
