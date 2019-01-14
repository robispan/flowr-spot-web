import React, { Component } from 'react';

class Input extends Component {
  state = {
    focus: false
  };

  focusHandler = () => {
    this.setState({ focus: true });
  };

  focusOutHandler = () => {
    this.setState({ focus: false });
  };

  render() {
    const inputClasses = ["Input"];
    if (this.props.fullWidth) {
      inputClasses.push("Fullwidth");
    }

    const labelClasses = ["Label"];
    if (this.state.focus || this.props.value) {
      labelClasses.push("Move");
    }

    return (
      <div className={inputClasses.join(' ')}>
        <input
          onFocus={this.focusHandler}
          onBlur={this.focusOutHandler}
          onChange={this.props.inputChanged}
          type={this.props.type}
          required={this.props.required}
          value={this.props.value}
        />
        <p className={labelClasses.join(' ')}>{this.props.label}</p>

        <style jsx>{`
          .Input {
            box-sizing: border-box;
            width: 185px;
            height: 50px;
            border-radius: 3px;
            border: 1px solid #dfe5ea;
            background-color: #f5f6f7;
            text-align: left;
            position: relative;
            margin-bottom: 10px;
          }
          .Fullwidth {
            width: 100%;
          }
          .Label {
            font-size: 13px;
            line-height: 1;
            color: #949ea0;
            margin: 0;
            padding: 0;
            position: absolute;
            top: 18px;
            left: 15px;
            transition: all 100ms;
          }
          .Input input {
            box-sizing: border-box;
            width: 100%;
            height: 100%;
            border: none;
            outline: none;
            margin: 0;
            padding: 26px 0 11px 15px;
            font-size: 13px;
            font-family: inherit;
            line-height: 1;
            color: #334144;
            background: rgba(0, 0, 0, 0);
            position: relative;
            z-index: 2;
          }
          .Move {
            font-size: 10px;
            top: 11px;
            z-index: 3;
          }
        `}</style>
      </div>
    );
  }
}

export default Input;
