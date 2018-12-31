import React from 'react';
import ReactDOM from 'react-dom';
//css可以删掉
/*import './index.css';*/

//跟组件
import App from './App';

//加快react速度
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
