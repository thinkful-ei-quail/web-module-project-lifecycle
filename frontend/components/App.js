import React from 'react';
import axios from 'axios';

import Form from './Form';
import TodoList from './TodoList';

const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      userInput: '',
      filtered: ''
    }
  }

  componentDidMount() {
    // expected response: array of objects following the following schema
    // {id: 'IaQds', name: 'laundry', completed: false}

    axios.get(URL)
      .then(res => res.data.data)
      .then(res => this.setState({...this.state, todos: res}));
  }

  // handlers
  handleChange = e => {
    e.preventDefault();
    this.setState({...this.state, userInput: e.target.value});
  }

  handleSubmit = e => {
    e.preventDefault();
    axios.post(URL, {name: this.state.userInput})
      .then(res => res.data.data)
      .then(res => this.setState({...this.state, todos: [...this.state.todos, res]}));
  }

  render() {
    return (
      <div>
        <Form handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <TodoList todos={this.state.todos} />
      </div>
    )
  }
}
