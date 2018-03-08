import React from 'react'

class TodoForm extends React.Component {
  state = { title: '' }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addItem(this.state.title)
    this.setState({ title: '' })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="Add A Todo"
          required
          value={this.state.title}
          onChange={this.handleChange}
          name="title"
        />
      </form>
    )
  }
}

export default TodoForm