import React from 'react';

const ListItem = props => (
  <li>
    {props.doThis}
    <button onClick={(e) => props.deleteItem(e)}>Delete Item</button>
  </li>
)

export default ListItem;
