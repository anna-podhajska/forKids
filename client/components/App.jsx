import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import Greetings from './Greetings'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      person: 'jv'
    }
  }
  randomPerson(e) {
    const people = ['jv', 'harrison', 'rohan', 'silvia']
    const index = Math.floor(Math.random() * people.length)
    this.setState({
      person: people[index]
    })
  }
  render() {
    console.log(this.state)
    return (
      <Router>
        <div className='app-container'>
          <h1>Hello World</h1>
          <Link to='/somewhere'>Somewhere</Link>
          <Link to='/'>Home</Link>
          <Route exact path="/" render={() => <Greetings person={this.state.person}/>} />
          <button onClick={this.randomPerson.bind(this)}>Change Person</button>
        </div>
      </Router>
    )
  }
  componentWillUnmount() {
      console.log('compoonent did unmount')
  }
}

export default App
