import React, { Component } from 'react';
import CardSection from './CardSection';
import Loading from './Loading';
import TopNav from './TopNav';

class App extends Component {
  constructor() {
    super();
    this.state = {
      fetchComplete: false,
      modalOn: false,
      peopleData: []
    }
    this.fetchURL = this.fetchURL.bind(this);
  }

  componentDidMount() {
    //this.fetchSwapi();
    this.fetchAllPeople();
  }

  fetchURL = async (url) => {
    const result = await fetch(url);
    const data = await result.json();
    //console.log(data.results);
    return data
  }

  fetchAllPeople = async function() {
    //because of how the API returns results, i need to see how many 'pages' there are first
    const result = await fetch('https://swapi.co/api/people');
    const data = await result.json();
    const pages = Math.ceil((data.count)/10);

    //add the first data to to url array then we'll loop on the pages to get the rest
    const urls = [];
    for (let i=1; i <= pages; i++) {
      urls.push(`https://swapi.co/api/people/?page=${i}`);
    }

    this._peopleData = [];

    const charsFetch = urls.map(url => fetch(url)
        .then(res => res.json())
        .then(data => data.results.map(user => this._peopleData.push(user)))
    );

    Promise.all(charsFetch)
      .then(results => this.setState({api_data: this._peopleData}))
      .then(this.setState({fetchComplete: true}))
      .catch((err) => console.log('ERROR, please check', err))
    
  }

  render() {
    if (this.state.fetchComplete) {
      return (
        <div>
          <TopNav/>
          <CardSection people={this._peopleData} />
      </div>
      )
    }
    return <Loading/>
  }
}

export default App;
