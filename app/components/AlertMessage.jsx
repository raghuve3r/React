import React, { Component } from 'react';

class AlertMessage extends Component{
  static defaultProps = {
      title: 'Error'
  };

  componentDidMount() {
    const modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  }

  render() {
    var {title,message} = this.props;
    return  (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
          <h4>{title}</h4>
          <p>Error: {message}</p>
          <p>
            <button className="button hollow alert" data-close="">
              Okay
            </button>
          </p>
      </div>
    )
  }
}

export default AlertMessage;
