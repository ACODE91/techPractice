import React from 'react';
import ReactDOM from 'react-dom';
import TopTen from './components/topTen.jsx';
import $ from 'jquery';

const App = (props) => <TopTen />;

ReactDOM.render(<App />, document.getElementById('app'));

