import React, { Component } from 'react';
//import { Form, Text } from 'informed';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
   constructor(props) {
    super(props);
    this.state = {value: '', info: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

 
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    var url = new URL( 'http://localhost:5000/pet')
    var params = {data: this.state.value ,}
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    fetch(url)
    .then(res => res.json())
    .then(info_ => this.setState({info: info_}, () => console.log("successfully fetched Data", info_)))

    event.preventDefault();
  }
  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
       <form onSubmit={this.handleSubmit} style = {{}}>
       <div className = 'App-header'> Data Analysis Project </div>
        <div className = 'App-title'>
        <label  className = 'App-intro'>
          Enter data to be queried
          <input  className = 'Input' type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input className = 'SubmitB' type="submit" value="Submit" />
        </div >
      </form>
    );
  }
}

export default App;
