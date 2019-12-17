import React, { Component } from 'react';

class TodoForm extends Component {
  constructor () {
    super();
    this.state = {
      Title: '',
      Owner: '',
      Description: '',
      Priority: 'low'
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddTodo(this.state);
    this.setState({
      Title: '',
      Owner: '',
      Description: '',
      Priority: 'low'
    });
  }

  handleInputChange(e) {
    const {value, name} = e.target;
    console.log(value, name);
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="card">
        <form onSubmit={this.handleSubmit} className="card-body">
          <div className="form-group">
            <input
              type="text"
              name="Title"
              className="form-control"
              value={this.state.Title}
              onChange={this.handleInputChange}
              placeholder="Title"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="Owner"
              className="form-control"
              value={this.state.Owner}
              onChange={this.handleInputChange}
              placeholder="Owner"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="Description"
              className="form-control"
              value={this.state.Description}
              onChange={this.handleInputChange}
              placeholder="Description"
              />
          </div>
          <div className="form-group">
            <select
                name="Priority"
                className="form-control"
                value={this.state.Priority}
                onChange={this.handleInputChange}
              >
              <option>low</option>
              <option>medium</option>
              <option>high</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    )
  }

}

export default TodoForm;
