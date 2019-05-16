import React, {Component} from 'react'

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
    console.log(e.value)
  }

  handleSubmit = () => {

  }
  render() {
    return(
      <section>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder='Name' onChange={this.handleChange}/>
          <input type="text" placeholder="Date (mm/dd)" onChange={this.handleChange}/>
          <input type="text" placeholder="Time" onChange={this.handleChange}/>
          <input type="text" placeholder="Number of Guests" onChange={this.handleChange}/>
          <button>Make Reservation</button>
        </form>

      </section>
    )
  }
}

export default ResForm;
