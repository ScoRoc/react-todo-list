import React, { Component } from 'react';

class ListItem extends Component {
  render() {
    return (
      <li>
        {this.props.doThis}
        <button onClick={(e) => this.props.deleteItem(e)}>Delete Item</button>
      </li>
    );
  }
}

export default ListItem;
