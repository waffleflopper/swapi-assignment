import React, { Component } from 'react';
import CardSection from './CardSection';

class App extends Component {
  constructor() {
    super();
    this.state = {fetchComplete: false}
  }

  componentDidMount() {
    this.fetchSwapi();
  }

  fetchSwapi = async function() {
    try {
      const peoples = await fetch('https://swapi.co/api/people');
      const peopleJSON = await peoples.json();
      this._peoples = peopleJSON.results;
      this.setState({fetchComplete: true})
    } catch (err) {
      console.log("something wen't terribly wrong", err);
    }
  }

  render() {
    if (this.state.fetchComplete) {
      return (
        <div>
          <CardSection people={this._peoples}/>
      </div>
      )
    }
    return null;
  }
}

export default App;
