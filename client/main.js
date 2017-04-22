import React from 'react';
import ReactDOM from 'react-dom';
import ImageList from './components/image_list';

const App = () => {
  return (
    <div>
      React App #2
    <h1>    <ImageList/>  </h1>
    </div>
  );
};

Meteor.startup( () => {
  ReactDOM.render(<App />, document.querySelector('.container'));

});


// ReactDOM.render(<App />, document.querySelector('.container'));
