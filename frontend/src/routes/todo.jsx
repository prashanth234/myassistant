import React from 'react';
import { Input, Row, Col, Button } from 'reactstrap';
import instance from '../axiosInstance'

class TextEdit extends React.Component {
  
  render () {
    const {todo, updateItem} = this.props
    
    return (
      <li style={{display: 'flex'}}>
        <Input 
          style={{marginRight: 10, alignSelf: 'center'}}
          checked={todo.status} type="checkbox"
          onChange={(e) => updateItem(e, todo, 'status')}
        />
        <div
          className={(todo.status ? 'breakthrough' : '')}
          style={{width: '100%'}} contentEditable="true"
          suppressContentEditableWarning={true}
          onBlur={(e) => updateItem(e, todo, 'description')}
          onKeyDown={(e) => updateItem(e, todo)}
        >
          {todo.description}
        </div>
      </li> 
    )
  }
}

class Todo extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      value: '',
      todos: [],
      all: true
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.addToTodo = this.addToTodo.bind(this)
    this.updateItem = this.updateItem.bind(this)
    this.filterTasks = this.filterTasks.bind(this)
  }

  componentDidMount () {
    this.getTasks()
  }

  async getTasks () {
    try {
      var {data: todos} = await instance.get("/todo/tasks/")
    } catch (error) {
      //
    }

    this.setState({todos})
  }

  handleInputChange (e) {
    this.setState({value: e.target.value})
  }

  async updateItem (e, updatedItem, type) {
    let todos = this.state.todos
    let update = false

    if (type === 'status') {
      todos.forEach(item => { if (item.id === updatedItem.id) item.status = e.target.checked })
      update = true
    } else if (e.key === 'Enter') {
      const value = e.target.innerHTML
      
      if (value) {
        // Update Task
        todos.forEach(item => { if (item.id === updatedItem.id) item.description = e.target.innerHTML })
        update = true
      } else {
        // Delete Task
        todos = todos.filter(item => item.id !== updatedItem.id)
        try {
          await instance.delete(`/todo/tasks/${updatedItem.id}/`)
        } catch (error) {
          //
        } 
        this.setState({todos})
        return
      }
      
      e.target.blur()
    }

    if (update) {
      this.setState({todos})
      try {
        await instance.put(`/todo/tasks/${updatedItem.id}/`, updatedItem)
      } catch (error) {
        //
      }  
    }
  }

  async addToTodo (e) {
    if (e.key === 'Enter' && this.state.value) {
      const todos = this.state.todos
      const task = {description: this.state.value, todo_date: new Date().toISOString().slice(0,10)}

      try {
        var {data} = await instance.post("/todo/tasks/", task)
      } catch (error) {
        //
      }

      todos.push(data)
      this.setState({todos, value: ''})
    }
  }

  async filterTasks () {
    var {data} = await instance.get("/todo/tasks/", {params: {status: this.state.all ? false : undefined}})
    this.setState({todos: data, all: !this.state.all})
  }

  render () {
    return (
      <div className="padding">
        
        <Row>
          <Col xs="4">
            <Input value={this.state.value} placeholder="Type and press enter to add" onChange={this.handleInputChange} onKeyDown={this.addToTodo}/>
          </Col>
        </Row>

        <Button style={{marginTop: 20}} onClick={this.filterTasks}>{this.state.all ? 'Show pending' : 'Show all'}</Button>


        <ul style={{paddingTop: 20}}>
          {this.state.todos.map(todo =>
            <TextEdit key={todo.id} todo={todo} updateItem={this.updateItem}></TextEdit>
          )}
        </ul>

      </div>
    )
  }
}

export default Todo;