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
        reservations:response
      })
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
        <ResForm />

        </div>
        <div className='resy-container'>
        <ResContainer reservations={this.state.reservations} />
          
        </div>
      </div>
    )
  }
}

export default App;
