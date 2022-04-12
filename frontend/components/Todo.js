import React from 'react'

export default class Todo extends React.Component {
  render() {
    return (
      <>
        <h2 style={{textDecoration: this.props.todo.completed ? 'line-through' : ''}}>{this.props.todo.name}</h2>
      </>
    )
  }
}
