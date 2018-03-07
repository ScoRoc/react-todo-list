import React, { Component } from 'react';
import ListItem from './ListItem'
import logo from './logo.svg';
import './App.css';

class MyList extends Component {
  constructor(props) {
    super()
    this.state = {
      toDoItemArray: [],
      currentItem: ''
    }
  }

  componentDidMount() {
    this.textInput.focus()
  }

  handleChange = (e) => {
    e.preventDefault()  //don't really need this, but fail safe just in case
    this.setState({
      currentItem: e.target.value
    })
  }

  addItem = (e) => {
    e.preventDefault()
    //create a copy of the array bc arrays are referenced
    if (this.state.currentItem !== '') {
      let toDoItemArrayCopy = Array.from(this.state.toDoItemArray)
      // push item to a copy
      toDoItemArrayCopy.push(this.state.currentItem)
      // update state with copy
      this.setState({
        toDoItemArray: toDoItemArrayCopy,
        currentItem: ''
      })
    }
    this.textInput.focus()
  }

  deleteItem = (e, index) => {
    let toDoItemArrayCopy = Array.from(this.state.toDoItemArray)
    toDoItemArrayCopy.splice(index, 1)
    this.setState({
      toDoItemArray: toDoItemArrayCopy
    })
    this.textInput.focus()
  }

  clearList = (e) => {
    e.preventDefault()
    this.setState({
      toDoItemArray: []
    })
    this.textInput.focus()
  }

  render() {
    let jsxToDos = this.state.toDoItemArray.map((listItem, index) => {
      return (<ListItem
        key={index}
        doThis={listItem}
        deleteItem={(e) => this.deleteItem(e, index)}
        />)
    })

    return (
      <div className="MyList">
        <h1> Things I should stop procrastinating:</h1>
        <ul>
          {jsxToDos}
        </ul>
        <input type='text'
            ref={el => {
              this.textInput = el;
            }}
            onChange={this.handleChange}
            value={this.state.currentItem}
        />
        <br />
        <button onClick={this.addItem}>Add Item</button>
        <br />
        <button onClick={this.clearList}>Finished the list!</button>
      </div>
    );
  }
}

export default MyList;
