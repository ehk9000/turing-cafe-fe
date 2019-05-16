import React, { Component } from 'react';
import ResForm from './ResForm/ResForm'
import ResContainer from './ResContainer/ResContainer'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
      isLoading: false
    }
  }

  componentDidMount() {
    this.fetchRes()
  }

  fetchRes = async () => {
    this.setState({isLoading: true})
    const url = 'http://localhost:3001/api/v1/reservations'
    const data = await fetch(url);
    const response = await data.json();
      this.setState({
        reservations:response,
        isLoading:false
      })
  }

  render() {
    let display;

    display = this.state.isLoading ? (
      <p>Loading...</p>
    )
    :
    <ResContainer reservations={this.state.reservations} />

    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
        <ResForm />

        </div>
        <div className='resy-container'>
          {display}
        </div>
      </div>
    )
  }
}

export default App;
