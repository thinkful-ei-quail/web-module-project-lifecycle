import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
      <form onSubmit={(evt) => this.props.handleSubmit(evt)}>
        <input type="text" onChange={this.props.handleChange}/>
        <button type="submit">Add Todo</button>
        <button type="button">Clear Completed</button>
      </form>
    )
  }
}
