import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form.jsx'
import Questions from './components/Questions.jsx'

ReactDOM.render(<Form />, document.getElementById('formDiv'));
ReactDOM.render(<Questions />, document.getElementById('listDiv'));