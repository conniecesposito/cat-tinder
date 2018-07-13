import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {
  Grid, Col, Row, ListGroup, ListGroupItem, FormControl
} from 'react-bootstrap'
class NewCat extends Component {
  constructor(props){
  super(props)
  this.state = {
    form:{
      name: '',
      age: '',
      enjoys: ''
    }
  }
}
handleChange(event){
  // let {form} = this.state  <---- same as below
   let form = this.state.form

  console.log('name', event.target.name);
  console.log('value', event.target.value);
  form[event.target.name] = event.target.value
  this.setState({form: form})
  console.log({form});
}

formSubmit(event){
  event.preventDefault()
  this.props.handleClick(this.state.form)
}

  render() {
    console.log('state', this.state)

    return (
        <div>
        <form onSubmit={this.formSubmit.bind(this)}>
        <FormControl
          type="text"
          name="name"
          onChange={this.handleChange.bind(this)}
          value={this.state.form.name}
          />
          <FormControl
            type="text"
            name="age"
            onChange={this.handleChange.bind(this)}
            value={this.state.form.age}
            />

            <FormControl
              type="text"
              name="enjoys"
              onChange={this.handleChange.bind(this)}
              value={this.state.form.enjoys}
              />

              <FormControl
                type="submit"
                value= "submit"

                />



</form>


        </div>
    );
  }
}

export default NewCat;
