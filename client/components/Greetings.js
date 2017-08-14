import React from 'react'
import {connect} from 'react-redux'

import {getGreetings} from '../actions/greetings'

const renderGreeting = (greeting, key) => (
  <h1 key={key}>{greeting.text}</h1>
)

class Greetings extends React.Component {
  constructor(props) {
    super(props)
    console.log('constructor')
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentWillMount() {
    console.log('componentWillMount')
  }

  componentWillReceiveProps(nextProps) {
      console.log('will receive props', nextProps);
  }
  shouldComponentUpdate(nextProps) {
      console.log('should update', nextProps);
      return true
  }
  componentWillUpdate() {
      console.log('will update')
  }
  componentDidUpdate() {
      console.log('did update')
  }
  render() {
    console.log('render')
    const {greetings, dispatch} = this.props
    return (
      <div>
        {this.props.person}
        <button onClick={() => dispatch(getGreetings())}>Show Greetings</button>
        {greetings.map(renderGreeting)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {greetings: state.greetings}

}

export default connect(mapStateToProps)(Greetings)
