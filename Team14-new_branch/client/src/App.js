import React, { Component } from 'react';
//import { Form, Text } from 'informed';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
   constructor(props) {
    super(props);
    this.state = {value: '', info: '', buttonVal: [false,false,false,false,false,false,false,false], row: {}};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

     this.handleChangeNew = this.handleChangeNew.bind(this);
    this.handleSubmitNew = this.handleSubmitNew.bind(this);
  
  }
 
 
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
   
    var url = new URL( 'http://localhost:5000/api/getRow')
    var params = {data: this.state.value ,}
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    fetch(url)
    .then(res => res.json())
    .then(info_ => this.setState({info: info_}, () => console.log("successfully fetched Data", info_)))

    event.preventDefault();
  }
  
  handleChangeNew(event) {
    console.log(this);

    // Toggling tha values of buttonVal array
    var arr = this.state.buttonVal

    const target = event.target;
    const value = target.checked;
    const name = parseInt(target.name);
    console.log(value, name)
    arr[name] = value;
    
    this.setState({
      buttonVal: arr
    }); 
  }
  handleSubmitNew(event) {
   console.log(this.state.buttonVal)
    var url = new URL( 'http://localhost:5000/api/getCol')
    var params = {data: this.state.buttonVal}
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    fetch(url)
    .then(res => res.json())
    .then(info_ => this.setState({row: info_}, () => console.log("successfully fetched Data", info_)))
    event.preventDefault();
  }
  

  render() {
      var arr = [1,2,3,4,5,6,7,8]   ;
    return (
      <div>
       <form onSubmit={this.handleSubmit}>
       <div className = 'App-header'> Retriever </div>
        <div className = 'App-title'>
        <label  className = 'App-intro'>
          Enter data to be queried
          <input  className = 'Input' type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input className = 'SubmitB' type="submit" value="Submit" />
        </div >
      </form>
      <div className = {'App-title'}> 
      {this.state.info}
      </div>
       <form onSubmit={this.handleSubmitNew} >
       
        <div className = 'App-title'>
        
          <div  className = 'App-intro'>Choose from the buttons {arr} </div>
          <div className = 'Check'><input type="checkbox"   name = {arr[1]} value = {this.state.buttonVal[arr[1]]} onChange={this.handleChangeNew}/>Name</div>
           <div className = 'Check'><input  type="checkbox" onChange={this.handleChangeNew} name = {arr[1]} value = {this.state.buttonVal[arr[1]]}/>Owner</div>
           <div className = 'Check'><input  type="checkbox" onChange={this.handleChangeNew} name = {arr[2]} value = {this.state.buttonVal[arr[2]]}/>Dogs</div>
           <div className = 'Check'><input  type="checkbox" onChange={this.handleChangeNew} name = {arr[3]} value = {this.state.buttonVal[arr[3]]}/>Cats</div>
           <div className = 'Check'><input type="checkbox" onChange={this.handleChangeNew} name = {arr[4]} value = {this.state.buttonVal[arr[4]]}/>Health</div>
           <div className = 'Check'><input  type="checkbox" onChange={this.handleChangeNew} name = {arr[5]} value = {this.state.buttonVal[arr[5]]}/>Body </div>
           <div className = 'Check'><input type="checkbox" onChange={this.handleChangeNew} name = {arr[6]} value = {this.state.buttonVal[arr[6]]}/>Nature</div>
        
          <input className = 'SubmitB' type="submit" value="Submit" />
        </div >
      </form>
      </div>
    );
  }
}

export default App;
