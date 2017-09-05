import React, {Component} from 'react';

class WeatherForm extends Component {
  onFormSubmit = (e) => {
    e.preventDefault();
    const location = this.refs.location.value;

    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="location"/>
          <button className="button expanded hollow button-color">Get Weather</button>
        </form>
      </div>
    )
  }
}

export default WeatherForm;
