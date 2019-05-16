import React, {Component} from 'react'
import './ResForm.css'

class ResForm extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      date: '',
      time:'',
      number: ''

    }
  }

  handleChange = e => {
    console.log(e.target.name)
    const {name, date, time, number} = e.target.name 
    this.setState({
      
    })
    
    
  }

  handleSubmit = () => {

  }

  render() {
    return(
      <section>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder='Name' name="name" onChange={this.handleChange}/>
          <input type="text" placeholder="Date (mm/dd)"  name="date"onChange={this.handleChange}/>
          <input type="text" placeholder="Time" name="time"onChange={this.handleChange}/>
          <input type="text" placeholder="Number of Guests"name="number" onChange={this.handleChange}/>
          <button value="submit">Make Reservation</button>
        </form>

      </section>
    )
  }
}

export default ResForm;
