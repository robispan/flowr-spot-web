import React, { Component } from 'react';

import magnifier from '../assets/images/pl-icon-search.svg';

class SearchBar extends Component {
  state = {
    textEntered: ''
  };

  inputChangedHandler = event => {
    this.setState({ textEntered: event.target.value });
  };

  searchHandler = event => {
    event.preventDefault();
    console.log('searching..... ');
  };

  render() {
    return (
      <form onSubmit={this.searchHandler} className="SearchBar">
        <input
          type="text"
          placeholder="Looking for something specific?"
          value={this.state.textEntered}
          onChange={this.inputChangedHandler}
        />
        <img src={magnifier} alt="magnifier" onClick={this.searchHandler} />

        <style jsx>{`
          .SearchBar {
            position: relative;
            width: 600px;
            margin: 0 auto;
          }
          .SearchBar input {
            box-sizing: border-box;
            width: 100%;
            height: 60px;
            border-radius: 3px;
            box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.05);
            background-color: white;
            border: none;
            outline: none;
            font-family: inherit;
            font-size: 18px;
            font-weight: 300;
            line-height: 1;
            padding-left: 19px;
            color: #686e70;
          }
          .SearchBar input::placeholder {
            color: #949ea0;
          }
          .SearchBar img {
            position: absolute;
            top: 20.5px;
            right: 20px;
            cursor: pointer;
          }
        `}</style>
      </form>
    );
  }
}

export default SearchBar;
