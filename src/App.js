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
        {
          id: 3,
          name: 'Mr. Meowsalot',
          age: 12,
          enjoys: "Being in charge."
        }
      ],
      user: {
        name: "Cat",
        age: "aksjdf3049585aeuk"
      }
    }
  }


  render() {
    return (
      <div>

        <Router>
          <div>
            <Route path="/NewCat" component={NewCat} />

            <Route exact path="/cats" render={(props) => <Cats cats={this.state.cats} />} />


          </div>
        </Router>

      </div>
    );
  }
}

export default App;
