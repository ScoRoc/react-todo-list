import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyList from './MyList';
import registerServiceWorker from './registerServiceWorker';

// let toDos = ['Buy coconut ice cream', 'Eat coconut ice cream', 'Go to crossfit']

ReactDOM.render(<MyList />, document.getElementById('root'));
registerServiceWorker();
