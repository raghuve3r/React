import React, {Component} from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import AlertMessage from 'AlertMessage';
import openweathermap from 'openweathermap';
import createBrowserHistory from 'history/createBrowserHistory';
import queryString from 'query-string';

const history = createBrowserHistory();

class Weather extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isLoading: false
    };
  };

  componentDidMount() {
    //console.log(this.props);
    let locObj = queryString.parse(this.props.location.search);
    let location = locObj.location;
    //console.log(location);
    if (location && location.length > 0) {
      this.handleSearch(location);
      this.props.history.push('/');
    }
  }

  componentWillReceiveProps(newProps) {
     let locObj = queryString.parse(newProps.location.search);;
     let location = locObj.location;
     if (location && location.length > 0) {
       this.handleSearch(location);
       this.props.history.push('/');
    }
  }

  handleSearch = (location) => {
    var that = this;

    this.setState({isLoading: true, errorMessage: undefined,location: undefined, temp: undefined, country: undefined, cond: undefined});

    openweathermap.getTemp(location).then(({temp, country, cond}) => {
      //console.log(cond);
      that.setState({location: location, temp: temp, isLoading: false, country: country, cond: cond});
    }, (e) => {
      that.setState({isLoading: false, errorMessage: e.message});
    })
  };

  render() {
    const {isLoading, temp, location, errorMessage,country, cond} = this.state;
    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-center">
          Fetching weather...
        </h3>;
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location} country={country} cond={cond}/>;
      }
    }

    function renderError() {
      if (typeof errorMessage === 'string') {
        return (<AlertMessage message={errorMessage}/>)
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">
          Check weather
        </h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    )
  }
}

export default Weather;
