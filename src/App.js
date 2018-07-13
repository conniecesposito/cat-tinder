import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Cats from './pages/Cats'
import NewCat from './pages/NewCat'
import Header from './components/Header'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      cats: [
        {
          id: 1,
          name: 'Morris',
          age: 2,
          enjoys: "Long walks on the beach."
        },
        {
          id: 2,
          name: 'Paws',
          age: 4,
          enjoys: "Snuggling by the fire."
        },
        {
          id: 3,
          name: 'Mr. Meowsalot',
          age: 12,
          enjoys: "Being in charge."
        },

      ]
    }


  }
  handleClick(formNew){
    let {cats} = this.state
    console.log("newform", formNew);
    cats.push(formNew)
    this.setState({cats: cats})
}


  render() {
    console.log(this.state);
    return (
      <div>

        <Router>
          <div>
            <Route path="/NewCat"
            render={(props) => <NewCat  handleClick = {this.handleClick.bind(this)}/>} />

            <Route exact path="/cats" render={(props) => <Cats cats={this.state.cats} />} />


          </div>
        </Router>

      </div>
    );
  }
}

export default App;
